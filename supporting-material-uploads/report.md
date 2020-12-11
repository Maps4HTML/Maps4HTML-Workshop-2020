


[TOC]


<h2>Report on the Joint W3C-OGC Workshop on Maps for the Web</h2>


<h3 id="executive-summary">Executive Summary</h3>


Geospatial information on the Web is fragmented, inadequately covered by Web standards, and as a result lacking interoperability significantly raising barriers to its effective use.  Efforts to standardize geoinformation have focused on established geospatial developers, which thus leaves out most people.  An opportunity exists today to standardize maps and spatial information in HTML, lowering barriers for everyone, ranging from web developers, GIS data providers, map solution providers, the disabled community to the commercial stakeholders. Browser makers are more open than ever to incorporating ideas and code from community initiatives.  It falls to communities to organize themselves to assert the need for and definition of such standards.  The global geospatial information community can and should mobilize to simplify and standardize geoinformation for the Web, as maps in HTML, supporting both geographic and non-georeferenced map rendering and interaction.

On the topic of standardizing maps for the Web, the workshop surfaced a wide range of information, and opinion, the latter ranging from negative to cautious to outright enthusiasm. The hesitant feel a standard could prevent people from effectively using maps compared to current proprietary offerings. Those voicing cautious endorsement the idea and strongly encourage “keeping it simple.” Others were optimistic on calls to action to standardize maps as it reduces the barriers to their use by everyone, of all abilities technical, physical, cognitive.


    **“(A native map HTML element would) definitely let us focus more on what we can do with maps; how we can make nice maps, how we can support users in creating nice maps...the more I think about it, the more I like...the basic concept of … a slippy map.... with that in place, mapping libraries could probably develop in directions that we cannot even think about yet. But this strong focus on the rendering that we have now is definitely in the way of ... other kinds of developments.” **-** **Andreas Hocevar, OpenLayers developer / OSGEO

The workshop demonstrated the receptiveness on the part of the Web standards community, to the idea of standardizing maps in browsers (the Web Plat, with the caveat that the work will be costly and time consuming.  Web Platform advocates suggest that efforts to standardize maps should be incremental in nature, starting with use cases and requirements, and proceeding to specification and development. In the light of such willingness to cooperate, and with the knowledge that the Web Platform is the last and only “even playing field” in our global information space, it is imperative that the geospatial standards community continue, and to increase our participation in Web standards development, promulgating standard and simplified access to maps and spatial information (maps in HTML), for everyone, of all abilities.

This report concludes that the next step forward for this initiative should be negotiation of the terms of reference for a W3C working group that draws its inputs and requirements from relevant W3C, WHATWG and OGC (standards) working groups.

<h3 id="introduction">Introduction</h3>


Natural Resources Canada (NRCan) sponsored the first joint workshop on standardizing Maps for the Web, which took place online from September 21st to October 2nd, 2020. The workshop was co-lead by the World Wide Web Consortium (W3C) and the Open Geospatial Consortium (OGC), and convened an organizing committee of individuals from NRCan, W3C, OGC, Environment and Climate Change Canada (ECCC), the US’ National Geospatial Intelligence Agency (NGA), the US’ National Aeronautics and Space Administration (NASA), as well as volunteers from the Maps for HTML community.  The workshop was initially scheduled to be an in-person workshop co-located with the OGC Technical Committee meeting in June of 2020, but was cancelled, then re-scheduled under an online virtual format,due to the COVID-19 pandemic.  The workshop was open to the public free of charge.

A call for positions, papers and talks was issued over the Web from the workshop [website](https://www.w3.org/2020/maps/), which was promoted jointly through the W3C and OGC membership communications channels. The workshop was organized by theme, with all themes notionally centred on the idea of standardization of maps in the Web platform. Themes included: accessibility, internationalization, privacy and security, performance, augmented reality, Web map standards and technology, and stakeholder perspectives.

Over 150 [registrations](https://www.w3.org/2020/maps/supporting-material) were received, with submission of 13 position papers, 33 talks, 7 panels and 3 breakout sessions.  All workshop sessions were recorded and each day’s session recording is linked to from the [agenda item](https://www.w3.org/2020/maps/agenda#day-1) for that day.  Discussion of talks and panels was (and is still) encouraged, and occurred both during the presentations through the live [chat](https://gitter.im/Maps4HTML/W3C-OGC-Workshop-Maps-For-Web), as well as afterwards, with each talk, panel or breakout being the subject of an individual [Web standards discussion forum topic](https://discourse.wicg.io/c/web-mapping/22).  For ease of review, each individual discussion topic links to the specific recording of the presentation or panel.

<h3 id="workshop-themes">Workshop Themes</h3>


<h4 id="accessibility-a11y">Accessibility (a11y)</h4>


The wide variation in Web Content Accessibility Guidelines (WCAG) failures of existing Web map techniques was the subject of an [analysis](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Nic_Chan/index.html) done by Nic Chan and Robert Linder.  In short, none of the evaluated Web mapping frameworks meet all the WCAG 2.1 success criteria, and there exists a wide range in the number of frameworks which may pass individual criteria, from none, to all of those evaluated.  As a result of the evaluation, some of the framework maintainers took steps to improve the accessibility of the framework, which is a great start for outcomes from the workshop.

A summary of [requirements](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Nicolo_Carpignoli-Maps-for-the-Web.pptx) for accessible Web maps was presented by Nicolò Carpignoli and Joshue O Connor.  One of the important needs outlined by them is for accessible text-based geolocated “annotations”.  In view of standard geographic models, we believe the usage of “annotations” in the context of maps can broadly be interpreted to mean integration of the OGC Simple Features standard model into the HTML standard. Such integration makes sense in the context of browser support of maps, but little sense without such context (how does the user agent know where to render the feature?).  Consequently, the requirements seem to implicitly endorse the basic notion of integrating maps into the HTML and related accessibility standards (CSS, ARIA, WCAG).  Further support for the layer-based model of maps, as a means to isolate information from surrounding “noise” was presented.  

The state of accessible indoor locations and maps was [described](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Claudia_Loitsch_Julian_Striegl.pptx) by Claudia Loitsch and  Julian Striegl, whose research has shown that the coverage of indoor maps is today very low, and what is more, there exists no single standard today for how maps and geographical data should be made accessible for different contexts and diverse user needs.  They conclude that because the market for indoor map data is forecast to grow significantly in the coming years, the aforementioned problems represent the perfect opportunity to develop such standards, before such efforts are expended and potentially wasted.

Physical accessibility relates to facilities that provide access to people with physical disabilities, such as wheelchair ramps and so on.  Sebastian Felix Zappe of WheelMap.org [suggests](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Sebastian_Felix_Zappe_Holger_Dieteric.pdf) that maps in HTML could be used for “disability mainstreaming”, that is, ensuring that accessibility information becomes part of all map services on the Web through standards.  

Brandon Biggs from the Smith-Kettlewell Eye Research Institute [contributed](https://www.w3.org/2020/maps/supporting-material-uploads/position-statements/Brandon_Biggs-Smith-Kettlewell.pdf) to the workshop, and reinforced the importance of presenting the <span style="text-decoration:underline;">content</span> of maps to blind and visually impaired users.  The WCAG standard is out of date with respect to maps. With new capabilities built into browsers, such as the Web Vibration, Audio and Speech APIs, it is possible to create more advanced nonvisual maps for the Web.  Such maps are known as digital auditory maps, and vibro-auditory maps, and both require every feature in a data set to have a name and a full geometry.  Existing raster maps and even maps that label features as point markers do not match such a definition.  The way that nonvisual maps work is through spatial collision detection with a feature; when the user collides with the feature, the feature name attribute is read out.  A dataset without a name attribute is virtually useless for accessibility purposes, and collisions must be detectable, implying that the geometry of the feature representation must be faithful to the reality. Biggs concludes that without taking into account the data modeling requirements imposed on Web map feature information by nonvisual maps, there would be no point in building a standard HTML component.  This points to at least a pair of key requirements to be addressed by a standard for Web maps.

<h5 id="web-maps-for-cognitive-accessibility">Web Maps for Cognitive Accessibility</h5>


The map-related needs of those with cognitive disabilities was the topic of a [panel](https://youtu.be/Jb-vLX7a1m0?list=PLNhYw8KaLq2VuEWzz096iRjtvWel-p2AJ&t=2534) of experts including David Fazio, John Kirkwood and John Rochford, all members of the W3C COGA Task Force.  Unfortunately, Lisa Seeman, chair of the COGA TF, who had accepted to participate in the panel, was unintentionally excluded by the awkward hour of the panel.  In sum, the panel members indicate that while a lot of user research remains to be done in this area, broadly speaking, accessible Web mapping technology that responds to COGA users is a huge market, and one to which everyone eventually belongs.  Specifically, as the brain ages (more precisely the parietal lobe), function associated to wayfinding (aka indoor navigation) decreases. The key challenges of wayfinding are creating user needs-specific spatial cues that users can apply to the problem of navigation.  Such cues can be visual or audible, but take different forms.  The panel also affirmed that such technology need not be confined to proprietary software, and indeed their task force is working on [standards](https://w3c.github.io/coga/content-usable/) for COGA users.  It is to be hoped that collaboration will happen between the relevant standards working groups to bring these needs forwards for map users.

<h5 id="creating-accessible-web-map-widgets">Creating accessible Web map widgets</h5>


The workshop brought together global experts and researchers in the emerging field of Web map accessibility, who were empanelled together to discuss the issues relevant to people with disabilities and in particular those with visual impairments, who use Web maps, and what actions the Web mapping community may be able to collectively take to facilitate access to map content and function through standards. Panelists included Doug Schepers of Fizz Studio, Brandon Biggs an engineer with the Smith Kettlewell Eye Research Institute, Dr. Tony Stockman from Queen Mary University and Dr. Nicholas Giudice from the University of Maine.

The panel first described the nature of audio maps, and the different types of audio and vibro tactile maps that exist, as well as describing features of these maps and their distinctions, including audio icons, earcons, the relation and similarities between the vision and touch senses, and how such maps may lend themselves to implementations and APIs.  The panel also emphasized important considerations or requirements for standardized audio maps, such as the need for name or label attributes for map features, and the need to be able to automatically transform raster data for presentation to auditory or tactile users.  The panel also discussed how cartography has well established rules for visual maps, and that there is a need to have cartography develop similar psycho-physical standards for non-visual maps, through research directly involving users.

Tony Stockman, on challenges facing the auditory map domain:


    **“One of the real problems, actually, is the lack of standards for auditory displays in general.”**

Nicholas Giudice, on challenges facing the auditory map domain:


    **“...for non visual variants of maps, cartographers...haven't thought about auditory and vibro tactile map (cartography), and so we need to somehow bake into any type of standard, more empirically derived guidelines for design that ...ensure that these elements are both perceptually salient and cognitively meaningful.”** 

Brandon Biggs - about challenges for standards organizations:


    **“There are three (challenges). One is the data; there needs to be a lot more work with data. The second is the APIs. There's some future APIs like with XR that are coming out and we need to be thinking about those and how we can represent maps in that way. And the third is getting the users involved in whatever we make.”**

Brandon Biggs - on how standards organizations can facilitate auditory map innovation:


    **“The thing that needs to happen is we need to make more maps in all different types of modalities... the biggest problem is that we've we haven't really tried doing BART maps or topological maps of the Grand Canyon, or, you know, different, different types of maps that are required for being a professional, a geographer”**

<h4 id="augmented-reality-ar">Augmented Reality (AR)</h4>


Jan-Erik Vinje, of Norkart.no, who is Managing Director of the Open AR Cloud Association, gave a [presentation](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Jan-Erik_Vinje-From%20Points-of-interest_to_maps_of_objects.pdf) on the emerging OGC GeoPose standard. Jan-Erik described what a “GeoPose” is, by comparing it with 2D points of interest (POIs).  In contrast to POIs, which can be rendered on a 2D Web map, a GeoPose lends itself to rendering in a 3D globe projection environment, and supports “six degrees of freedom”, meaning a GeoPose can describe the position and orientation of objects in space.  Jan-Erik goes on to emphasize that GeoPose is attempting to create a standard for describing the attitude of things in the real and virtual world.  As such, things in the real world tend to move around, and because of this, the representation of things needs to be machine-made, but this doesn’t exclude the possibility of manual interventions.  He indicates that all of these concepts are fundamentally compatible with the concept of a “map”, with layers, that is 3D and in which you live, but in which you could have objects that are part of the virtual world, such as historical objects, but which don’t have a physical reality.  In sum, Jan-Erik is describing what augmented reality is,  and he asserts that a native browser Maps API should support a “globe mode”, which could be the basis for a standardized augmented reality:


    **“...(with GeoPose) support (in) the native map elements...objects in (the) map become especially useful...if we could make sure that the map elements supported the globe mode...like...Cesium or Google Earth”**

Christine Perey and Josh Lieberman gave a [presentation](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/M4W_GeoPoseUseCases_Perey_LIeberman.pdf), about how GeoPose might be integrated with, or supply use cases supporting the Use Cases and Requirements for Web Maps being developed  by the Maps for HTML Community Group. The approach they take is to classify the use cases according to the actor's role, be they content author, Web site visitor or application developer, and they usefully itemize these by reference to the UCR for Web Maps, tabulating exactly how GeoPose aligns with and extends these with 3D GeoPosed considerations. It is worth noting that certain of the GeoPose Web Map use case extensions, such as views along a route from any / different directions, aligns with the spatial cues considerations for cognitive needs users, brought forward by the members of the COGA panel.

Josh Lieberman - Open Geospatial Consortium:  


    **“there really is a continuum...between a flat map oriented north with a fixed extent and scale and...augmented reality where you really are looking at what's around you and in front of you and having map objects placed into that view.  … (A) Web Map that ... is able to transition from … augmented reality to (a) mapped formalism of reality...can really be put into this spectrum...GeoPose is an important part of establishing that continuum”**

A distinguished and enthusiastic [panel](https://youtu.be/RPZlE5N-Nds?t=5820) of AR researchers, entrepreneurs and standards practitioners convened, which included Patrick Cozzi, CEO of Cesium, Thomas Logan of Equal Entry, Christine Perey and Jan-Erik Vinje of the Open AR Cloud Association, and Ada Rose Cannon from the Samsung Internet team. 

The panel started out with Thomas Logan pointing out that a lot of times when people think of Augmented Reality, they think about the purely visual application, but he noted that sounds can be an important augmentation for people with vision impairments, or for the blind.   The panel addressed questions about precision requirements of geospatial information in AR, and how to anchor or relate AR coordinate frames to the real world.  The panel touched on game accessibility, and on the important intersection between gaming, graphics and 3D geospatial technology, collaboration over which is the path foreseen by which AR will advance.  The panel also addressed audience questions about the idea of incrementally advancing the Web platform to introduce AR by starting with 2D maps as proposed by the Maps for HTML community.

Jan-Erik Vinje - Open AR Cloud Association:


    **“Thumbs up from me! It's better to start with (2D native Web maps) and ... build on that. If we have native map elements that start out as 2D then the next thing is to extend it. So you could have the globe maps and the immersive modes later on. So, get on with it; that would be wonderful.”**

Ada Rose Cannon - Samsung Internet:


    **“It would be interesting if there was a native element. Currently Web XR is the only way to do AR in the Web... the best way for it to to be able to get into Web XR would be if it was able to expose some kind of buffer, so that the particular web engine you're using could then take that content and do smart stuff with it to layer it appropriately in your environment.”**

Thomas Logan - Equal Entry:


    **“2D maps for my kind of world have been a constant challenge from when I got into this world of accessibility. So I just put it out there to really make sure people do care and consider the (accessibility) use case in 3D.”**

Patrick Cozzi - Cesium:


    **“I really believe in order to advance AR for maps and to advance 3D geospatial in general, we really need this collaboration, at the intersection of games and graphics and geospatial.... I think we're really just at the beginning of this kind of fusion of gaming and geospatial.”**

<h4 id="internationalization">Internationalization</h4>


Brandon Liu’s [presentation](http://bdon.org/maps-for-the-web/), “Multilingual Text Rendering” delved into the relationship between text rendering and maps, going so far as to posit that what defines a map is in fact a composite of spatially referenced geometries with textual properties, possibly rendered as labels on the map. Even if labelling is considered outside the scope of MapML, Liu suggests such a topic to be worthy of forward thinking, which is essentially what was asked of all workshop participants. Brandon evaluated support for language-sensitive text rendering across browsers. He concluded that the deep complexity of JavaScript or Web Assembly (WASM) client text rendering, combined with the lack of cross-browser support for high-performance, accessible text rendering facilities in graphics standards such as canvas, gives enough reason for declarative graphical Web standards such as SVG, canvas, video and potentially map standards to share and rely on declarative multilingual text support built into (future) browsers.  Brandon also specifically advised that there needs to be a lot of care in pushing something as a standard, such as MapML, versus having a low level set of JavaScript tools that can be used to accomplish something, because, for one thing, a Web standard has to be truly international. For example, he notes that CJK (Chinese-Japanese-Korean) printed maps often have vertical text rendering, but maps on the Web rarely have this. Web browsers do support vertical text, so it would be ideal for Web maps to be able to leverage this feature of browsers. Brandon noted, in response to a question, that ensuring that map text is part of the HTML DOM, whether it is in the user interface to the map or not, is part of the path towards supporting internationalization of maps.

<h5 id="worldwide-web-maps-challenges-in-the-global-context">Worldwide Web Maps: Challenges in the global context</h5>


The workshop convened a [panel of experts](https://youtu.be/zJkJcvmUA5o?t=4642) on international Web mapping technology challenges which had the idea of standards for Web maps as a backdrop to the conversation.  These experts included Brandon Liu, of Protomaps, Thijs Brentjens, of Geonovum, and Siva Pidaparthi, of ESRI.  Topics of discussion included: how to improve the state of Web mapping, localizing map content leveraging the work that has gone into browsers’ text support, challenges for security and privacy for geospatial data, map projections and standards, and the importance of accessibility for Web maps users.

Brandon Liu, Protomaps: 


    **“For something to become a Web standard, it's not good to have a half-baked internationalisation solution; it's not good if the solution is just a minimum viable product that only works for left to right, languages, for example... I'm curious if (the internationalization built into) Web browsers already can influence broader cartographic possibilities for web maps.”**

Thijs Brentjens, Geonovum:


    **“(Web map accessibility) is a very important topic…(however) it isn’t (very important) in geospatial work ...(we have) this idea that maps are visual-only… you can't make that accessible. So we just don't do it. ...It requires us to...start ...breaking down the idea...we have that maps are not easy to make accessible because I think there are options”.**

Siva Pidaparthi, ESRI: 


    **“When we are looking at new standards, we should also be thinking about other, different, coordinate systems, not just Web Mercator, or like WGS84, which are good for global data, but for local data they are not very good. We should take additional coordinate reference systems into account.”**

<h4 id="privacy">Privacy</h4>


Thijs Brentjens, of Geonovum in Netherlands, gave a [presentation](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Thijs_Brentjens/fuzzy-geolocation/index.html) on Fuzzy Geolocation, which arose as a topic of interest at Geonovum because of the debate in Netherlands about COVID-19 tracking apps were suspect due to the possibility of the app capturing and storing user geolocation information on a server, which made citizens wary of the app violating their privacy.  Consequently, staff at Geonovum discussed how API services might be useful to obscure or provide some randomness in a user's true interest or location before such locations were transmitted to backend services. Thijs offered to collaborate with interested parties in implementing such a “Fuzzy Geolocation” service or API.

<h4 id="performance">Performance</h4>


Andreas Hocevar, core contributor to the OpenLayers Web mapping library, gave a presentation on some research he did into the Web Workers based OffscreenCanvas technology in the Maps for HTML Community Group, which allows for smoother and faster loading and rendering of tiles. Andreas showed a video which emphatically shows the difference in rendering speed of this technology compared with asynchronous fetch (the current standard).  Andreas concluded with an appeal to Webkit (Apple) and Gecko (Mozilla) to complete their implementations of this exciting map-related Web standard, so that libraries such as OpenLayers can deploy it across all browsers, interoperability being a core benefit of the Web Platform.

<h4 id="web-map-standards-and-technology">Web map standards and technology</h4>


Amelia Bellamy-Royds discussed the common behaviour and patterns of Web maps, and the state of development of the [Use Cases and Requirements for Web Maps](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements) specification.  She mentioned that if the requirements were to be satisfied by existing frameworks, then no action would be needed, but that does not appear to be the case.  Amelia presented an example of a client-side image maps’ application to actual Web maps (Environment Canada’s daily weather forecast map), their being a primitive form of Web map.  As well, Amelia showed a Leaflet map of a [painting](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#use-case-technical-drawings) (Leaflet is a modern JavaScript Web mapping framework), which is used to demonstrate the requirement to support non-geographic maps, just as the client-side image map does.  _[Editor](https://discourse.wicg.io/t/use-cases-and-requirements-for-web-maps/4796/13?u=peterr)’s note: Amelia’s talk thus demonstrated that maps (in the abstract) are already a shared primitive of the HTML Web. It remains up to the “mapping” [community](https://discourse.wicg.io/t/use-cases-and-requirements-for-web-maps/4796/14?u=peterr) to define how to modernize this shared primitive.  Background: Traditionally, Web developers have thought of client-side image maps as being primitive, and non-geographic.  Recent [attempts](https://github.com/whatwg/html/issues/389) to use client-side image maps for responsive Web design have been thwarted, because of a fear (on the part of browser teams) of breaking compatibility with older sites that depend on client-side image maps’ behaviour, which is at least accessible, even if non-responsive._

Dan “The Ducky” Little [presented](https://youtu.be/Ji3HF35Hpso?list=PLNhYw8KaLq2VuEWzz096iRjtvWel-p2AJ&t=3347) GeoMoose, which is a mature OSGEO project that began in 2003, and has undergone two major revisions since its inception.  It still uses the concept of an XML-based catalog to declare the structure of the application, and its users love this declarative aspect.  GeoMoose has evolved through generations of JavaScript frameworks and supports modern formats, such as GeoJSON for features, MapBox Vector Tiles, Cloud-Optimized GeoTiff, and others.  Cartographic styling of features continues to be a challenge without direct Web platform support, even though several generations of feature styling approach have come and gone. Performance is not a given even when using “lightweight” features such as WebGL, because of the temptation to serve everything as vector data without a strategy.  GeoMoose has supported OGC protocols, such as WMS and WFS since very early on, and benefited from support via Federal Geographic Data Committee (FGDC) grants to enable sharing of geo information between counties.  This meant that GeoMoose installations became widespread across Minnesota and other northern states.

Dan “The Ducky” Little offered several points of advice relative to standardizing maps for the Web.  First, layer definitions should be decoupled from the source data, as this was a major hurdle encountered by the GeoMoose project.  Next, cartography and styling of maps remains a challenge, despite several generations of “successful” style technologies, such as MapCSS, SLD, MapBox GL stylesheets, and OpenLayers styles. 

Dr. Gobe Hobona, Director of the OGC API standards development program, gave a [presentation](https://www.youtube.com/watch?v=kYZ1RBQFHEU&list=PLNhYw8KaLq2VuEWzz096iRjtvWel-p2AJ&index=2&t=176s) on the principles, scope, method, history and plans for the development and roll out of the next generation of OGC geospatial developer standards, which are based on OpenAPI.

Tom Kralidis presented the work of the [pygeoapi ](https://www.youtube.com/watch?v=kYZ1RBQFHEU&list=PLNhYw8KaLq2VuEWzz096iRjtvWel-p2AJ&index=2&t=981s)open source project which is led by himself, Angelos Tzotsos, and Francesco Bartoli.  The project is built using the many available geospatial python libraries, and supports many different back end data sources, because of integrating the GDAL spatial engine. It also implements the emerging STAC API and OGC (Features, Tiles, Records) and other API standards. Francesco Bartoli gave a short demonstration of the framework. Tom invited the audience to come over and chat about the project  with the developers on their [gitter channel](https://gitter.im/geopython/pygeoapi)  

Joan Masó from [CREAF](http://www.creaf.cat/staff/joan-maso-pau), and editor of the OGC Tiles API specification, gave a presentation about the history of development of Map Markup Language through the OGC Testbed program, and about the great potential for integration of MapML with OGC Web services and APIs.  Joan mentioned the relation between the Two Dimensional Tile Matrix Set, the Web Map Tile Service and MapML, highlighting the formalization of the URL template in all three standards, and emphasizing that it’s through the application of URL templates that one is able to decouple client and server.  He indicates that there is a great similarity between an OGC Tiles API Tileset Metadata Document and a simple MapML document.  He concludes that MapML may be the easiest and simplest way to make an OGC Tiles API useful to a browser, especially if the API produces MapML documents.

Jonathan Moules of GeoSeer.net, a geospatial Web services search engine, gave a [presentation](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Jonathan_Moules.pdf) on the limitations and barriers to discovering map services via his GeoSeer service.  The main problem Jonathan highlighted was the existence of hundreds of geoportals.  Although there are millions of data sets in his search engine, without the careful manual curation done by GeoSeer, the user would not be able to search for data across portals.  Further, organizations who do publish data via these portals don’t produce good metadata, which exacerbates the problem of discovering their services.  With about 2M services indexed by his services, there are only about 1500 _searches per month._ While federation of portals (e.g. cascaded catalog services) is potentially a great solution to one problem, the actual problem is that there isn’t a great demand for service discovery, period. The question Jonathan concludes by asking us is: of these 2M services, spread across so many geoportals, how many of those services exist for sharing vs how many exist to serve the maps for their own use? And, he [asks](https://discourse.wicg.io/t/the-difficulty-of-discovering-ogc-services/4844/7?u=peterr), is it a good use of resources to put data sets onto a geoportal to comply with a regulation (INSPIRE) when nobody (except the producer, perhaps) seems to be using or searching for the data to use it?

Satoru Takagi, member of W3C SVG Working Group and long time contributor to W3C Web standards on behalf of KDDI Corporation, has developed a Web GIS based exclusively on Web standards, including HTML, SVG, CSS and JavaScript.  While Takagi-san shares the goal of [decentralized](https://satakagi.github.io/mapsForWebWS2020-docs/De-centralizedWebMapping.html) Web mapping that is also an objective of the Maps for HTML community group, he does not believe that changing browsers to natively include mapping code is possible or worthwhile, because maps can already be created by combining existing Web standards, as his work demonstrates. Takagi-san suggests that the Open Geospatial Consortium definition of ‘tile’ concept be expanded to include uniquely performant and adaptive tiling schemes such as his [Quadtree vector tiling](https://satakagi.github.io/mapsForWebWS2020-docs/QuadTreeCompositeTilingAndVectorTileStandard.html). He also [suggests](discussion-on-standardization) that the geospatial industry participate in the W3C process directly.

Peter Rushforth of Natural Resources Canada gave a two-part presentation on the MapML Proposal ([part one](https://www.youtube.com/watch?v=zJkJcvmUA5o&list=PLNhYw8KaLq2VuEWzz096iRjtvWel-p2AJ&index=3&t=https://youtu.be/zJkJcvmUA5o?t=1140s), [part two](https://youtu.be/aqXmbNAaLAU?t=4903)), which is a proposal from the Maps for HTML community to create an HTML element set and media type, that is designed to be incrementally developed. MapML responds to the use cases and requirements to serve both geo-referenced and non-georeferenced Web maps’ needs, via a progressively enhanced &lt;map> and a new &lt;layer> element in HTML.

[Bocoup’s](https://bocoup.com/about/mission-values) Simon Pieters, a contributor to WHATWG standards and the browser ecosystem, presented his review of the Maps for HTML Community Group’s documents.  Simon indicated that the [use cases and requirements for Web maps](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/) are very much on track, while his recommendation is that specification and development of browser support for maps be tackled in an incremental fashion, which prioritized small pieces of functionality that can be individually exposed and shared by non-geospatial applications, including especially the issue he raised with the CSS Working Group which if properly developed would see support for rendering, panning and zooming of geospatial and non-geospatial coordinate systems built into browsers natively.  Such functionality is the fundamental primitive upon which browser support for maps may rest. 

[Igalia’s](https://www.igalia.com/) Brian Kardell gave a [presentation](https://youtu.be/HgcLYIj05DI) about the scale and scope of Web technology, and the  consequent challenges around developing Web standards, highlighting the fact that creating them is costly, risky and long term.  He suggests that the mapping community focus on defining shared, scoped objectives that incrementally build support of maps in the Web platform.  He offered the services of Igalia to help, and suggested a list of technologies they would be interested in helping with, including: pan & zoom, OffscreenCanvas, hardware accelerated SVG and others.

Terence Eden gave a [presentation](https://youtu.be/9iw75LmnyvQ?t=464) that encouraged the Maps for HTML community to ask developers for their opinions on the proposed MapML syntax, to evaluate if it’s too complicated or not explicit enough for them, since the Web is an international resource shared by developers of different languages, nationalities and experiences.  On the whole, Terence is a long time supporter of standardizing maps in HTML.

Iván Sánchez Ortega gave a [presentation](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/2020-ogc-w3c-workshop-ivansanchez-slides/slides.html#/) in which he gave examples of existing browser APIs, such as the Gamepad API and WebGL, and questioned how these APIs fit with the MapML proposal.  He asserted that tiles of GeoTIFF multi-spectral imagery should be considered as 256x256x7 mini data cubes. He speculated that image processing for satellite information in the future will be done in the browser as “edge computing”, because of the incredibly powerful APIs that the Web Platform provides to all developers, and he questioned how such powerful APIs will work with MapML.  

Iván went on to emphasize that standardization is a choice, and to suggest that MapML can not solve the commercial and/or legal issues which underlie why maps on the Web are fragmented and non-standard. Iván gave the specific example of the GoogleMutant Leaflet plugin, which uses the Google API together with the Web standard Mutation Observers API to integrate Google map content via the Leaflet API.  The Google Maps Terms of Service forbid such an application, requiring that all access to content be done through the Google Maps API, which for the purposes of discussion is a _non-standard interface_.  In sum, Ivan asserts that hacks like his GoogleMutant plugin should not be necessary.  He says that map vendors _should_ expose standard interfaces. Iván asserts that the proposed MapML standard interface will not _make_ vendors expose standard interfaces, and he argues that because MapML duplicates the current functionality (non-standard interfaces) available in JavaScript mapping frameworks, and thus it should not exist.

Daniel Morissette of MapGears gave a [presentation](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Daniel_Morissette-ogc-w3c-mapml-in-mapserver-gdal-ogr.pdf) about MapGears’ implementation of MapML in MapServer, GDAL and OGR.  Daniel’s presentation showcased the willingness of some experts in the FOSS4G community to help push maps into wider Web standards, through integration of MapML support into widely used open source geospatial software such as MapServer, GDAL and OGR.

Karel Charvat gave a [presentation](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Karel_Charvat-Map-Compositions-format-intro-presentation-by-Karel.pdf) and convened a breakout session on the “[Map Whiteboard](https://www.w3.org/2020/maps/supporting-material-uploads/position-statements/Karel_Charvat-Plan4all.pdf)” technology his project has created. A map whiteboard is a map that acts much like a shared Web document (e.g. like a Google Doc, or a MS Teams document), allowing simultaneous editors and viewers at the same time, dynamically saving and updating each other’s view of the content as it changes.  The Map Whiteboard is built using the open source OpenLayers JavaScript mapping framework, and relies on a Map Compositions JSON document, which extends what the old OGC Web Map Context XML document type did, with many modern features. 

Kathi Schleidt, on behalf of herself, Hylke van der Schaaf and Thomas Usländer, gave a [presentation](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Schleidt_van_der_Schaaf_%20Uslander-Dynamic-and-Observational-Spatial-Data.pdf) about the challenges of Web mapping dynamic and observational data and metadata obtained from sensors. The OGC SensorThings API follows the OData RESTful API architecture; the challenges addressed by the project include properly scaled map layer display where multi-scale data is available. The SensorThings model is useful because it allows you to formulate your queries based on the graph defined by your data model, and the resulting queries work well using the RESTful OData API. The challenges of displaying SensorThings data on maps at multiple scales is handled by their JavaScript library that works with both Leaflet and OpenLayers, which accepts a JSON configuration object that allows you to calibrate it for use in your application, and it is [available](https://github.com/DataCoveEU/STAM) on GitHub.

Karl Grossner, technical director of the world historical gazetteer, who works at the University of Pittsburgh, gave a presentation on a proposed time extension to GeoJSON, called “GeoJSON-T”.  GeoJSON is a Web geodata encoding standard for transmitting and consuming features, their properties and geometry, based on the widespread OGC Simple Features model.  The GeoJSON-Time proposal extends the standard model with a “when” member, which allows the encoding to describe the time, or time period to which the feature applies in a standardized way.  The structure of the “when” member is not finalized. The GeoJSON-T proposal is used by the digital humanities community, but could ideally be shaped and adopted outside that community as well.

Bryan Haberberger, IIIF Maps Technical Specification Group Chair, gave a presentation on his work which creates semantic annotations for cultural resources not owned by his organization, using GeoJSON-LD, which is based on JSON-LD 1.1, since it was required to support lists of lists to manage the GeoJSON polygon geometry type.  Additionally, Bryan discussed the Web Annotation standard model, which enables creating GeoJSON-LD annotations for any Linked Data resource and geolocating it.

Nicolas Rafael Palomino gave a [presentation](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Nicolas_Rafael_Palomino-W3C-Application.pdf) in which he explained his views on how and why geospatial information standardization is essential in preparing for a digital-friendly future.  Overall, he recommends advancing the objective of standardizing maps in HTML.

<h4 id="government-stakeholders">Government Stakeholders</h4>


The USGS’ Danielle Dupuy [presented](https://www.youtube.com/watch?v=Jb-vLX7a1m0&feature=youtu.be&list=PLNhYw8KaLq2VuEWzz096iRjtvWel-p2AJ&t=4977) on the automation benefits of declarative data-driven map styling.  The USGS has developed a system that stores map type and style information in a database, and which presents a central location to edit the declared values of certain map properties, including maps’ symbols, color, size, and “pane” (an internal Leaflet abstraction which could be described as z-index ‘categories’).  These map ‘properties’ can be manipulated easily by non-developers, and they reduce or eliminate the need for developer intervention in the map-making process.  The USGS has found the system a boost to productivity, and they plan to apply the technique to other projects.  

Chris Little, an Information Technology Fellow of the UK Met Office, gave a short [presentation](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Chris_Little-Meteorology-and-MapsCut1.pdf) of the history and future of cartography and meteorology.  It was a fascinating tour through thousands of years of the evolution of maps and spatial information management technology, concluding with some offered insights as to the current needs and potential future trends. First, Chris observes that the current Web map “layer” metaphor is “broken” for meteorological charts and maps.  The combination in charts of 100s of “levels”, at 100s of time points or intervals, with 100s of data ensembles yields millions of possible layers.  However, he does predict the integration of spatial information and browsers over a 10 year time scale, without being specific about how that integration will or should occur, apart from the current technological environment being particularly fertile for such growth to occur.  Chris indicates that his preference would be to start the integration of map technology into the browser with 3D content, and derive 2D content as a product of that integration, which would make certain classes of problem easy / easier to solve.

Sajeevan G. gave a [presentation](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Sajeevan_G-maps-for-the-web.pdf) about the Web GIS application supporting the Indian Prime Minister’s Rural Road Programme (PMGSY). The PMGSY application has a 15+ year history, including migrating from a commercial GIS-based application to a Web interface, based on Web service standards, open source and commercial software. Dr. Sajeevan notes that while the application is capable of producing and consuming OGC standard services, many businesses still require to accept feature content as shapefiles only.  It is expected that future OGC Web APIs will be an integral part of feature transactions in the future.  Regarding standardizing maps in HTML, Dr. Sajeevan emphasizes the importance of coordinate systems and [recommends](https://www.w3.org/2020/maps/supporting-material-uploads/position-statements/Sajeevan_G.pdf) that a Google Earth-like globe view be considered essential in a future standard for Web maps, so as to avoid having to specifying map projections in the standard, by allowing the viewer to do on-the-fly deprojection to the globe view at runtime.  The viewer should be able to consume external map data services, supporting both raster and vector (feature) data types. Dr. Sajeevan foresees enormous contributions from the developer community into a browser based HTML map viewer, and sees geospatial data services as an emerging business opportunity as a result.

<h5 id="stakeholders-government-geospatial-data-providers-&-the-web">Stakeholders: Government geospatial data providers & the web</h5>


A government stakeholder panel was convened to discuss the importance of geospatial information to governments and what impact a standard for Web maps might have on their organizations’ goals. The panel included Sébastien Durand, manager of the Canadian Geospatial Platform (CGP),  Cameron Wilson, manager of the GeoConnections Program, Emilio López Romero, director of the National Centre of Geographic Information of Spain, and Don Sullivan a geospatial scientist and standards expert with NASA AMES Research Center, and one of the original authors of the Web Mapping Service OGC standard.  A key point made by Sébastien was that Web maps provide a view of data in context that is unique and almost magical in its ability to turn data into knowledge.  _Editor’s note: This latter point is widely recognized as one of the key values of maps, for example [that cholera was spread by water was already understood](https://collections.nlm.nih.gov/ext/cholera/PDF/0050707.pdf) in 1849, but that fact did not become common knowledge until the publication of John Snow’s famous [map](https://en.wikipedia.org/wiki/John_Snow#/media/File:Snow-cholera-map-1.jpg) in 1854._  Generally, the panelists were receptive to or enthusiastic about the proposal to standardize and integrate maps in browser technology, specifically via OGC APIs and HTML, because they believe that such an integration would lower the barriers to better use of public spatial data infrastructures, as well as providing an interoperable standard for a “common operational picture” that cuts across JavaScript frameworks. 

Don Sullivan, NASA Ames Research Center: 


    **“When I heard about... maps on the web and maps as first class citizens. I went, oh my God, yeah. So I'm here...as a champion. I think this is just an amazing idea that has been way too long in coming out. I've been waiting for this for over 20 years now.”**

<h4 id="stakeholders-open-source-for-web-mapping">Stakeholders: Open Source for Web Mapping</h4>


A panel of open source geospatial and browser developers discussed what needs to happen in order to bring map support into Web browsers. Tom Kralidis of OSGEO/pygeo* moderated a panel of experts which included Simon Pieters, of Bocoup, Daniel Morissette of OSGEO/MapGears, Will Mortenson from NGA’s Gnome program, and Andreas Hocevar of OpenLayers/OSGEO. The panel discussed collaboration between the Web and geospatial communities, and what it takes to contribute ideas and requirements to HTML standards and browser code bases. As well, the panel discussed the issues that Web mapping libraries face that could be made more tractable with better browser &lt;slippy> / &lt;map> support, such as performance, and styling of vector features, without that Web map developers and users master very complex and low-level APIs such as WebGL.

Daniel Morissette, MapGears/OSGEO:


    **“A good example of a standard that did work and nobody could kill, even though it's simple, and could be called flawed, is the web map service, WMS.  If it's good enough, people are going to use it, and if the map integration in HTML is good enough, it's gonna win over time.”**

Will Mortenson, NGA Gnome Program:


    **“I gather requirements from customers and users;...as a government guy, I don't necessarily know everything…(about how Web browsers work). So if we had people...from the public side (who) could stress why (investing in maps in browsers is) important, (the government could invest) money towards these efforts.”**

Andreas Hocevar - OpenLayers / OSGEO: 


    **“(A native map HTML element would) definitely let us focus more on what we can do with maps; how we can make nice maps, how we can support users in creating nice maps...the more I think about it, the more I like...the basic concept of … a slippy map.... with that in place, mapping libraries could probably develop in directions that we cannot even think about yet. But this strong focus on the rendering that we have now is definitely in the way of ... other kinds of developments.”**

Simon Pieters - Bocoup: 


    **“Browser developers and map framework developers need to talk to each other and get an agreement on use cases and requirements and how we can change the browser to better address those needs in a well designed way.  ...when designing solutions in (this) space... ...maps should be accessible to people who use screen readers … by default, insofar as (they) can be. But for more custom rendering, when you use canvas or WebGL, then accessibility is hard to get by default, but you will need to make it possible to layer in, somehow.”**

<h4 id="commercial-mapping-stakeholders">Commercial Mapping Stakeholders</h4>


Ted Guild of the World Wide Web Consortium (W3C) convened a panel of stakeholders from the commercial mapping platforms, including Ed Parsons (Google), Johannes Lauer (HERE, formerly Nokia, maps), Daniel Lewis (Geotab), and Thomas Lee (Mapbox).  This group of stakeholders found common ground on issues related to Web mapping, and the group thoughtfully approached the workshop theme of standards for Web maps while addressing a diversity of topics, including: the potential benefit of client-side map standards for improving the agility of product iteration, the benefits and limits of open (government, and other) data for map content creation, the importance of rendering performance for client-side map content, how simple use cases such as rendering GeoJSON on top of base maps unlock enormous value; the value of vector tile information for creating accessible interfaces and styling, and improving performance; the need of further work to develop data licensing approaches that mirror the advanced state of open source software licensing, the prospect of 5G technology improving maps for everyone, how semantic textual annotation/markup embedded in Web pages can relate importantly to locations and maps, and the coming indoor mapping revolution.

Daniel Lewis - Geotab:


    **_“(during) disaster(s)...the ability for decision makers to quickly go in and get access to that kind of data..ultimately the point of this stuff is…(to) make decisions based on it...having the ability to quickly iterate on that ...is really important. ...interoperability is ... a key thing going through all of this...baking that standard into the tool that everybody uses... immediately starts to break down the silos”_**

Tom Lee - Mapbox:


    **_“For us, unlocking performance is really important. Moving to a native implementation could really unlock some additional performance. … anything that can be done to unlock more performance will push the frontier forward and if standardization can be part of that, then that's really great.”_**

Ed Parsons - Google:


    **_“My message is, we need to be more mainstream. We need to be much more standard citizens of the web as opposed to creating our own separate Geospatial web where we did things differently.”_**

<h3 id="conclusion">Conclusion</h3>


Wendy Seltzer - W3C Strategy Lead and Counsel:

 


    **_“...as strategy lead at W3C I'm excited to hear the discussion here and we'll welcome any follow up that you have for places that we can fill gaps in existing standards work or new work that you might like to see started at the W3C, that the team is here to help.”_**

Web mapping standards have previously focused on server-side technologies and infrastructure, and there is a robust set of standards for map servers which closely interact with universal modern client-side techniques such as tiled “slippy maps” that can be panned and zoomed. Because these techniques are de facto standards between all web map providers, and have been stable for some years, there are common factors that would clearly benefit from formal client-side standardization: tiling, panning, zooming, coordinate reference systems, layers, accessible map features (e.g. geometric areas of interest), and more.

Another impetus for standardizing maps is improved accessibility in web maps, which was a major theme of the workshop. Several surveys of existing mapping frameworks demonstrated a fundamental lack of accessibility, which needs to be addressed in web standards.

<h4> \
Next steps \
</h4>


The next logical step is to begin the discussion for how a working group should scope these features in its charter. The two main points for discussion are what is and is not in scope for the first charter, and whether to define higher-level map-specific features or to break the functionality down into functional primitives that can solve a wider set of use cases beyond maps. 

The charter should also define the relationship and coordination between server-side and client-side map standards, specifically, the W3C working groups that should be consulted and collaborated with in order to achieve the best possible result. There is a mutual relationship between W3C and OGC which includes a joint working agreement that would facilitate bringing together the right stakeholders and relevant working groups from both organizations.
