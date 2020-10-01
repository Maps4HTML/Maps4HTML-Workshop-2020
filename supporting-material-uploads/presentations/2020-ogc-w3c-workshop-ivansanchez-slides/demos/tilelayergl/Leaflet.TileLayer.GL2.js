/*
 * @class GridLayer.GL
 * @inherits GridLayer
 *
 * This `GridLayer` runs some WebGL code on each grid cell, and puts an image
 * with the result back in place.
 *
 * The contents of each cell can be purely synthetic (based only on the cell
 * coordinates), or be based on some remote tiles (used as textures in the WebGL
 * shaders).
 *
 * The fragment shader is assumed to receive two `vec2` attributes, with the CRS
 * coordinates and the texture coordinates: `aCRSCoords` and `aTextureCoords`.
 * If textures are used, they are accesed through the uniforms `uTexture0` through `uTexture7`
 * There will always be four vertices forming two triangles (a quad).
 *
 */

L.TileLayer.GL2 = L.GridLayer.extend({
	options: {
		// @option tileUrls: Array
		// Array of tile URL templates (as in `L.TileLayer`), between zero and 8 elements. Each URL template will be converted into a plain `L.TileLayer` and pushed in the `tileLayers` option.
		tileUrls: [],

		// @option tileLayers: Array
		// Array of instances of `L.TileLayer` (or its subclasses, like `L.TileLayer.WMS`), between zero and 8 elements.
		tileLayers: [],

		// @option fragmentShader: String
		// A string representing the GLSL fragment shader to be run.
		// This must NOT include defining the variants, nor the texture uniforms,
		// nor user-defined uniforms.
		fragmentShader: "#version 300 es\nout vec4 pixelColor;\nvoid main(void) {pixelColor = vec4(0.2,0.2,0.2,1.0);}",

		// @option uniforms: Object
		// A map of names and initial values for the user-defined uniforms.
		// Values must be `Number` or an `Array` of up to four `Number`s.
		// e.g. `{ uTarget: 2.0, uOffset: [0.0, 5.0] }`.
		uniforms: {},

		subdomains: ["a", "b", "c", "d"],
	},

	// On instantiating the layer, it will initialize all the GL context
	//   and upload the shaders to the GPU, along with the vertex buffer
	//   (the vertices will stay the same for all tiles).
	initialize: function(options) {
		options = L.setOptions(this, options);

		this._renderer = L.DomUtil.create("canvas");
		this._renderer.width = this._renderer.height = options.tileSize;
		this._glError = false;

		var gl = (this._gl =
			this._renderer.getContext("webgl2", {
				premultipliedAlpha: false,
			}));
		gl.viewportWidth = options.tileSize;
		gl.viewportHeight = options.tileSize;

		// Create `TileLayer`s from the tileUrls option.
		this._tileLayers = Array.from(options.tileLayers);
		for (var i = 0; i < options.tileUrls.length && i < 8; i++) {
			this._tileLayers.push(L.tileLayer(options.tileUrls[i]));
		}

		this._loadGLProgram();
	},

	// @method getGlError(): String|undefined
	// If there was any error compiling/linking the shaders, returns a string
	// with information about that error. If there was no error, returns `undefined`.
	getGlError: function() {
		return this._glError;
	},

	_loadGLProgram: function() {
		var gl = this._gl;

		this._glError = false;

		// Force using this vertex shader.
		// Just copy all attributes to predefined variants and set the vertex positions
		var vertexShaderCode =
			"#version 300 es\n" +
			"in vec2 aVertexCoords;  " +
			"in vec2 aTextureCoords;  " +
			"in vec2 aCRSCoords;  " +
			"in vec2 aLatLngCoords;  " +
			"out vec2 vTextureCoords;  " +
			"out vec2 vCRSCoords;  " +
			"out vec2 vLatLngCoords;  " +
			"void main(void) {  " +
			"	gl_Position = vec4(aVertexCoords , 1.0, 1.0);  " +
			"	vTextureCoords = aTextureCoords;  " +
			"	vCRSCoords = aCRSCoords;  " +
			"	vLatLngCoords = aLatLngCoords;  " +
			"}";

		// Force using this bit for the fragment shader. All fragment shaders
		// will use the same predefined variants, and
		var fragmentShaderHeader =
			"#version 300 es\n" +
			"precision highp float;\n" +
			"precision highp sampler2DArray;\n" +
			"uniform float uNow;\n" +
			"in vec2 vTextureCoords;\n" +
			"in vec2 vCRSCoords;\n" +
			"in vec2 vLatLngCoords;\n" +
			"out vec4 pixelColor;\n";

		for (var i = 0; i < this._tileLayers.length && i < 8; i++) {
			/// TODO: Tell apart image textures from geotiff textures
// 			fragmentShaderHeader += "uniform sampler2D uTexture" + i + ";\n";
			fragmentShaderHeader += "uniform sampler2DArray uTexture" + i + ";\n";
		}

		fragmentShaderHeader += this._getUniformSizes();

		var program = (this._glProgram = gl.createProgram());
		var vertexShader = gl.createShader(gl.VERTEX_SHADER);
		var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
		gl.shaderSource(vertexShader, vertexShaderCode);
		gl.shaderSource(fragmentShader, fragmentShaderHeader + this.options.fragmentShader);
		gl.compileShader(vertexShader);
		gl.compileShader(fragmentShader);

		// @event shaderError
		// Fired when there was an error creating the shaders.
		if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
			this._glError = gl.getShaderInfoLog(vertexShader);
			console.error(this._glError);
			return null;
		}
		if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
			this._glError = gl.getShaderInfoLog(fragmentShader);
			console.error(this._glError);
			return null;
		}

		gl.attachShader(program, vertexShader);
		gl.attachShader(program, fragmentShader);
		gl.linkProgram(program);
		gl.useProgram(program);

		// There will be two vec2 vertex attributes per vertex - aCRSCoords and
		// aTextureCoords
		this._aVertexPosition = gl.getAttribLocation(program, "aVertexCoords");
		this._aTexPosition = gl.getAttribLocation(program, "aTextureCoords");
		this._aCRSPosition = gl.getAttribLocation(program, "aCRSCoords");
		this._aLatLngPosition = gl.getAttribLocation(program, "aLatLngCoords");

		this._initUniforms(program);

		// If the shader is time-dependent (i.e. animated), or has custom uniforms,
		// init the texture cache
		if (this._isReRenderable && !this._fetchedTextures) {
			this._fetchedTextures = {};
			this._2dContexts = {};
			this._texArrays = {};
		}

		// 		console.log('Tex position: ', this._aTexPosition);
		// 		console.log('CRS position: ', this._aCRSPosition);
		// 		console.log("uNow position: ", this._uNowPosition);

		// Create three data buffer with 8 elements each - the (easting,northing)
		// CRS coords, the (s,t) texture coords and the viewport coords for each
		// of the 4 vertices
		// Data for the texel and viewport coords is totally static, and
		// needs to be declared only once.
		this._CRSBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this._CRSBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(8), gl.STATIC_DRAW);
		if (this._aCRSPosition !== -1) {
			gl.enableVertexAttribArray(this._aCRSPosition);
			gl.vertexAttribPointer(this._aCRSPosition, 2, gl.FLOAT, false, 8, 0);
		}

		this._LatLngBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this._LatLngBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(8), gl.STATIC_DRAW);
		if (this._aLatLngPosition !== -1) {
			gl.enableVertexAttribArray(this._aLatLngPosition);
			gl.vertexAttribPointer(this._aLatLngPosition, 2, gl.FLOAT, false, 8, 0);
		}

		this._TexCoordsBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this._TexCoordsBuffer);

		// prettier-ignore
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
			1.0, 0.0,
			0.0, 0.0,
			1.0, 1.0,
			0.0, 1.0,
		]), gl.STATIC_DRAW);
		if (this._aTexPosition !== -1) {
			gl.enableVertexAttribArray(this._aTexPosition);
			gl.vertexAttribPointer(this._aTexPosition, 2, gl.FLOAT, false, 8, 0);
		}

		this._VertexCoordsBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this._VertexCoordsBuffer);

		// prettier-ignore
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
			 1,  1,
			-1,  1,
			 1, -1,
			-1, -1
		]), gl.STATIC_DRAW);
		if (this._aVertexPosition !== -1) {
			gl.enableVertexAttribArray(this._aVertexPosition);
			gl.vertexAttribPointer(this._aVertexPosition, 2, gl.FLOAT, false, 8, 0);
		}

		// Init textures
		this._textures = [];
		for (i = 0; i < this._tileLayers.length && i < 8; i++) {
			this._textures[i] = gl.createTexture();
			gl.uniform1i(gl.getUniformLocation(this._glProgram, "uTexture" + i), i);
		}

		gl.getExtension('OES_texture_float_linear');
	},

	// Looks at the size of the default values given for the uniforms.
	// Returns a string valud for defining the uniforms in the shader header.
	_getUniformSizes() {
		var defs = "";
		this._uniformSizes = {};
		for (var uniformName in this.options.uniforms) {
			var defaultValue = this.options.uniforms[uniformName];
			if (typeof defaultValue === "number") {
				this._uniformSizes[uniformName] = 0;
				defs += "uniform float " + uniformName + ";\n";
			} else if (typeof defaultValue === "array") {
				if (defaultValue.length > 4) {
					throw new Error("Max size for uniform value is 4 elements");
				}
				this._uniformSizes[uniformName] = defaultValue.length;
				if (defaultValue.length === 1) {
					defs += "uniform float " + uniformName + ";\n";
				} else {
					defs += "uniform vec" + defaultValue.length + " " + uniformName + ";\n";
				}
			} else {
				throw new Error(
					"Default value for uniforms must be either number or array of numbers"
				);
			}
		}
		return defs;
	},

	// Inits the uNow uniform, and the user-provided uniforms, given the current GL program.
	// Sets the _isReRenderable property if there are any set uniforms.
	_initUniforms(program) {
		var gl = this._gl;
		this._uNowPosition = gl.getUniformLocation(program, "uNow");
		this._isReRenderable = false;

		if (this._uNowPosition) {
			gl.uniform1f(this._uNowPosition, performance.now());
			this._isReRenderable = true;
		}

		this._uniformLocations = {};
		for (var uniformName in this.options.uniforms) {
			this._uniformLocations[uniformName] = gl.getUniformLocation(program, uniformName);
			this.setUniform(uniformName, this.options.uniforms[uniformName]);
			this._isReRenderable = true;
		}
	},

	// This is called once per tile - uses the layer's GL context to
	//   render a tile, passing the complex space coordinates to the
	//   GPU, and asking to render the vertexes (as triangles) again.
	// No need to clear the WebGL context, because the shader will
	//   overwrite all the pixel values.
	_render: function(coords) {
		var gl = this._gl;
		gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
		gl.clearColor(0.5, 0.5, 0.5, 0);
		gl.enable(gl.BLEND);

		var tileBounds = this._tileCoordsToBounds(coords);
		var west = tileBounds.getWest(),
			east = tileBounds.getEast(),
			north = tileBounds.getNorth(),
			south = tileBounds.getSouth();

		// Create data array for LatLng buffer
		// prettier-ignore
		var latLngData = [
			// Vertex 0
			east, north,

			// Vertex 1
			west, north,

			// Vertex 2
			east, south,

			// Vertex 3
			west, south,
		];

		// ...upload them to the GPU...
		gl.bindBuffer(gl.ARRAY_BUFFER, this._LatLngBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(latLngData), gl.STATIC_DRAW);

		// ...also create data array for CRS buffer...
		// Kinda inefficient, but doesn't look performance-critical
		var crs = this._map.options.crs,
			min = crs.project(L.latLng(south, west)),
			max = crs.project(L.latLng(north, east));

		// prettier-ignore
		var crsData = [
			// Vertex 0
			max.x, max.y,

			// Vertex 1
			min.x, max.y,

			// Vertex 2
			max.x, min.y,

			// Vertex 3
			min.x, min.y,
		];
		// ...and also upload that to the GPU...
		gl.bindBuffer(gl.ARRAY_BUFFER, this._CRSBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(crsData), gl.STATIC_DRAW);

		// ... and then the magic happens.
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
	},

	_bindTextureImage: function(index, imageData) {
		// Helper function. Binds a ImageData (HTMLImageElement, HTMLCanvasElement or
		// ImageBitmap) to a texture, given its index (0 to 7).
		// The image data is assumed to be in 8-bit RGBA format.
		var gl = this._gl;
		var tileSize = this.getTileSize();

		gl.activeTexture(gl.TEXTURE0 + index);
		gl.bindTexture(gl.TEXTURE_2D_ARRAY, this._textures[index]);
// 		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imageData);
		gl.texImage2D(gl.TEXTURE_2D_ARRAY, 0, gl.RGBA, tilesize.x, tilesize.y, 0, gl.RGBA, gl.UNSIGNED_BYTE, imageData);

		gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
		gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.generateMipmap(gl.TEXTURE_2D_ARRAY);
	},

	_bindTextureArrays: function(index, arrays, key) {
		// Helper function. Binds an array of TypedArrays (e.g. an array containing one
		// Float32Array), given its index (0 to 7).
		// The image data is assumed to *not* be in 8-bit RGBA format. Instead, its type
		// is inferred from the type of the typed array.
		var gl = this._gl;

		gl.activeTexture(gl.TEXTURE0 + index);
		gl.bindTexture(gl.TEXTURE_2D_ARRAY, this._textures[index]);
		gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

		console.log("(re)-binding texture unit ", index , " at ", key, this._textures[index], this._texArrays[key][index]);

		var tileSize = this.getTileSize();
		/// TODO: When there's more than one typed array, concatenate the
		/// typed arrays to properly fill the Texture Array.

		if (arrays[0] instanceof Float32Array) {

			var concatArrays;
			if (this._texArrays[key][index]) {
				concatArrays = this._texArrays[key][index];
			} else {
				concatArrays = Float32Array.from(Array.prototype.concat(...arrays.map(a => Array.from(a))));
				if (this._isReRenderable) {
					this._texArrays[key][index] = concatArrays;
				}
			}

			gl.texImage3D(
				gl.TEXTURE_2D_ARRAY,
				 0,
				 gl.R32F,
				 arrays.width,
				 arrays.height,
				 arrays.length,
				 0,
				 gl.RED,
				 gl.FLOAT,
				 concatArrays, //arrays[0],	/// TODO: concatenate the arrays
				 0
			);
// 			console.log('float32 tile', concatArrays);

// 		} else if (arrays[0] instanceof Uint16Array) {
// 			/// NOTE: There is no support for Uint16 textures. Check the tables
// 			/// from the texImage2D documentation at
// 			/// https://www.khronos.org/registry/webgl/specs/latest/2.0/#3.7.6
// 			gl.texImage3D(
// 				gl.TEXTURE_2D_ARRAY,
// 				 0,
// 				 gl.R32F, //gl.R16UI,
// 				 arrays.width,
// 				 arrays.height,
// 				 arrays.length,
// 				 0,
// 				 gl.RED,
// 				 gl.FLOAT, // gl.UNSIGNED_SHORT,
// 				 Float32Array.from(arrays[0]),	/// TODO: concatenate the arrays
// 				 0
// 			);
			// 		} else if (arrays[0] instanceof Uint16Array) {
		} else if (arrays[0] instanceof Uint8Array) {
			var concatArrays;
			if (this._texArrays[key][index]) {
				concatArrays = this._texArrays[key][index];
			} else {
				concatArrays = Uint8Array.from(Array.prototype.concat(...arrays.map(a => Array.from(a))));
				if (this._isReRenderable) {
					this._texArrays[key][index] = concatArrays;
				}
			}

			gl.texImage3D(
				gl.TEXTURE_2D_ARRAY,
				 0,
				 gl.R8,
				 arrays.width,
				 arrays.height,
				 arrays.length,
				 0,
				 gl.RED,
				 gl.UNSIGNED_BYTE,
				 concatArrays,
				 0
			);
// 			console.log('Uint8 tile', concatArrays);
		} else {
// 			throw new Error("Unsupported sample depth. Only Float32 and UInt16 supported so far.");
			throw new Error("Unsupported sample depth. Only Float32 and UInt8 supported so far.");
		}

		gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
// 		gl.generateMipmap(gl.TEXTURE_2D);
	},

	// Gets called by L.GridLayer before createTile(), just before coord wrapping happens.
	// Needed to store the context of each <canvas> tile when the tile coords is wrapping.
	_addTile(coords, container) {
		// This is quite an ugly hack, but WTF.
		this._unwrappedKey = this._tileCoordsToKey(coords);
		L.GridLayer.prototype._addTile.call(this, coords, container);
	},

	createTile: function(coords, done) {
		var tile = L.DomUtil.create("canvas", "leaflet-tile");
		tile.width = tile.height = this.options.tileSize;
		tile.onselectstart = tile.onmousemove = L.Util.falseFn;
		var ctx = tile.getContext("2d");
		var unwrappedKey = this._unwrappedKey;
		var texFetches = [];
		for (var i = 0; i < this._tileLayers.length && i < 8; i++) {
			if ('GeoTIFF' in window && this._tileLayers[i] instanceof GeoTIFF.GeoTIFF) {
				texFetches.push(this._getNthGeoTIFF(i, coords));
			} else {
				texFetches.push(this._getNthTile(i, coords));
			}
		}

		Promise.all(texFetches).then(
			function(textureImages) {
				if (!this._map) {
					return;
				}

				// HACK: If there are any geotiffs, transform any Uint16 result into
				// a Float32. This is due to lack of support for R16UI textures, and
				// to cache the Float32 data instead of the Uint16 data since it's a
				// non-trivial amount.
				for (var i = 0; i < this._tileLayers.length && i < 8; i++) {
					var texImg = textureImages[i];
					if ('0' in texImg && texImg[0] instanceof Uint16Array) {
						/// TODO: Transform any other bands as well!
						for (var j=0; j<texImg.length; j++)
							texImg[j] = Float32Array.from(texImg[j]);
					}
				}


				// If the shader is time-dependent (i.e. animated),
				// save the textures for later access
				var key = this._tileCoordsToKey(coords);
				if (this._isReRenderable) {
					this._fetchedTextures[key] = textureImages;
					this._2dContexts[unwrappedKey] = ctx;
					this._texArrays[unwrappedKey] = {};
				}

				var gl = this._gl;
				for (var i = 0; i < this._tileLayers.length && i < 8; i++) {
					var texImg = textureImages[i];
					if (texImg instanceof HTMLImageElement ||
						texImg instanceof HTMLCanvasElement ||
						texImg instanceof ImageBitmap
					) {
						// Assume this is a 8-bit RGBA image
						this._bindTextureImage(i, texImg);
					} else {
						// Assume this is a set of 8- or 16- or 32-bit typed arrays
						this._bindTextureArrays(i, texImg, key);
					}
				}

				this._render(coords);
				ctx.drawImage(this._renderer, 0, 0);
				done();
			}.bind(this),
			function(err) {
				L.TileLayer.prototype._tileOnError.call(this, done, tile, err);
			}.bind(this)
		);

		return tile;
	},

	_removeTile: function(key) {
		if (this._isReRenderable) {
			delete this._fetchedTextures[key];
			delete this._2dContexts[key];
			delete this._texArrays[key];
		}
		L.TileLayer.prototype._removeTile.call(this, key);
	},

	onAdd: function() {
		// If the shader is time-dependent (i.e. animated), start an animation loop.
		if (this._uNowPosition) {
			L.Util.cancelAnimFrame(this._animFrame);
			this._animFrame = L.Util.requestAnimFrame(this._onFrame, this);
		}
		L.TileLayer.prototype.onAdd.call(this);
	},

	onRemove: function(map) {
		// Stop the animation loop, if any.
		L.Util.cancelAnimFrame(this._animFrame);
		L.TileLayer.prototype.onRemove.call(this, map);
	},

	_onFrame: function() {
		if (this._uNowPosition && this._map) {
			this.reRender();
			this._animFrame = L.Util.requestAnimFrame(this._onFrame, this, false);
		}
	},

	// Runs the shader (again) on all tiles
	reRender: function() {
		if (!this._isReRenderable) { return; }
		var gl = this._gl;

		gl.uniform1f(this._uNowPosition, performance.now());

		for (var key in this._tiles) {
			var tile = this._tiles[key];
			var coords = this._keyToTileCoords(key);
			var wrappedKey = this._tileCoordsToKey(this._wrapCoords(coords));

			if (!tile.current || !tile.loaded || !this._fetchedTextures[wrappedKey]) {
				continue;
			}

			for (var i = 0; i < this._tileLayers.length && i < 8; i++) {
				var texImg = this._fetchedTextures[wrappedKey][i];
				if (texImg instanceof HTMLImageElement ||
					texImg instanceof HTMLCanvasElement ||
					texImg instanceof ImageBitmap
				) {
					// Assume this is a 8-bit RGBA image
					this._bindTextureImage(i, texImg);
				} else {
					// Assume this is a set of 16- or 32-bit typed arrays
					this._bindTextureArrays(i, texImg, key);
				}
			}

			this._render(coords);

			// Clear the tile, as the shader might return a different set of transparent pixels
			this._2dContexts[key].clearRect(0, 0, this.getTileSize().x, this.getTileSize().y);
			this._2dContexts[key].drawImage(this._renderer, 0, 0);
		}
	},

	// Sets the value(s) for a uniform.
	setUniform(name, value) {
		switch (this._uniformSizes[name]) {
			case 0:
				this._gl.uniform1f(this._uniformLocations[name], value);
				break;
			case 1:
				this._gl.uniform1fv(this._uniformLocations[name], value);
				break;
			case 2:
				this._gl.uniform2fv(this._uniformLocations[name], value);
				break;
			case 3:
				this._gl.uniform3fv(this._uniformLocations[name], value);
				break;
			case 4:
				this._gl.uniform4fv(this._uniformLocations[name], value);
				break;
		}
	},

	// Gets the tile for the Nth `TileLayer` in `this._tileLayers`,
	// for the given tile coords, returns a promise to the tile.
	_getNthTile: function(n, coords) {
		var layer = this._tileLayers[n];
		// Monkey-patch a few things, both for TileLayer and TileLayer.WMS
		layer._tileZoom = this._tileZoom;
		layer._map = this._map;
		layer._crs = this._map.options.crs;
		layer._globalTileRange = this._globalTileRange;
		return new Promise(
			function(resolve, reject) {
				var tile = document.createElement("img");
				tile.crossOrigin = "";
				tile.src = layer.getTileUrl(coords);
				L.DomEvent.on(tile, "load", resolve.bind(this, tile));
				L.DomEvent.on(tile, "error", reject.bind(this, tile));
			}.bind(this)
		);
	},

	// Gets the tile for the Nth `GeoTIFF` in `this._tileLayers`,
	// for the given tile coords, returns a promise to an array of typed arrays.
	_getNthGeoTIFF: function(n, coords) {
		var tiff = this._tileLayers[n];

		// Get the bounds and size of the image
		/// TODO: This info should be cached somewhere, really.
		return tiff.getImage().then(function(img) {
			var w = img.getWidth();
			var h = img.getHeight();
			var samplesPerPixel = img.getSamplesPerPixel();
			var bbox = img.getBoundingBox();

			// Get the latlngs for the geotiff bbox
// 			var ne = map.options.crs.unproject(L.point(bbox[1], bbox[0]))
// 			var sw = map.options.crs.unproject(L.point(bbox[3], bbox[2]))

			// Get the EPSG:3857 coords for the tile
			var latlngbounds = this._tileCoordsToBounds(coords);
			var ne = this._map.options.crs.project(latlngbounds.getNorthEast());
			var sw = this._map.options.crs.project(latlngbounds.getSouthWest());

			// Calculate the pixel coords to be fetched from those coords and the image
			var x1 = ((ne.x - bbox[0]) / (bbox[2] - bbox[0])) * w;
			var x2 = ((sw.x - bbox[0]) / (bbox[2] - bbox[0])) * w;
			var y1 = ((ne.y - bbox[1]) / (bbox[3] - bbox[1])) * h;
			var y2 = ((sw.y - bbox[1]) / (bbox[3] - bbox[1])) * h;

// 			console.log(w, h, bbox, samplesPerPixel, latlngbounds, ne, sw, x1, x2, y1, y2);
			console.log("Tile", coords, " pixels X ", x2, x1, "Y", y2, y1, " raster size", w, h);

			var tileSize = this.getTileSize();

			x2 = Math.floor(x2);
			x1 = Math.ceil(x1);
			y2 = Math.floor(y2);
			y1 = Math.ceil(y1);

			return tiff.readRasters({
				window: [x2, h - y1, x1, h - y2] ,
				width: tileSize.x,
				height: tileSize.y,
				// resampleMethod: 'nearest',
// 				fillValue: -999 ,
			});

		}.bind(this));

	},


});

L.tileLayer.gl2 = function(opts) {
	return new L.TileLayer.GL2(opts);
};
