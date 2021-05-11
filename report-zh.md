---
permalink: /report-zh
title: W3C与开放地理空间联盟（OGC）联合举办的Web地图技术研讨会报告
description: >-
  W3C与开放地理空间联盟（OGC）联合举办的Web地图技术研讨会报告 · 2020年9月-10月
---

{% include relBase.html %}

以下报告内容的[原始英文版本在这里](https://www.w3.org/2020/maps/report)。

<h2 id="executive-summary">执行摘要</h2>

Web上的地理空间信息是碎片化的，并没有完全被Web标准所涵盖，缺乏互通性，因此这些信息并不能被有效地使用。对地理信息进行标准化的努力一直依赖于地理空间权威开发人员，而忽略了在web上进行地图数据通信的所有人员。今天，我们有机会可以在HTML中标准化地图及空间信息，减少诸如web开发人员、地理信息系统（GIS）开发人员、数据提供商、地图解决方案提供商、商业性地理应用程序服务商，以及个人web用户，特别是残障社区等多方利益相关者所面临的障碍。

当web社区对特定方案提出明确的需求时，浏览器厂商会无比开放地接纳这些想法和代码。这需要各领域社区自己组织起来，明确对标准的需求，并确定对标准的定义。全球地理空间信息社区有能力而且也应当动员大家简化和标准化Web上的地理信息，即HTML中的地图，以支持地理地图和非地理地图的呈现方式和常用的交互模式。

研讨会就标准化Web地图方面收集了很多信息和意见。一些与会者较为保守，担心地图标准化解决方案会不如目前的专有解决方案有效。有些与会者则谨慎地支持了这一提议，但是推崇标准的简洁性。但也有忠实的支持者，强烈呼吁web地图的标准化，希望可以借此减少不同能力、不同技术、不同身体状态以及不同认知水平的用户的使用障碍。

> [原生HTML的地图元素] 肯定会让我们更多地关注可以用地图做什么；如何制作好的地图，我们如何支持用户制作出好的地图…越是这么想，我就越倾向于…拖拽式地图的基本概念…有了这个概念，地图库可能会朝着我们尚未想到的方向发展。但是我们目前对地图渲染的强烈关注绝对会阻碍其他方面的发展。
>
> <cite>Andreas Hocevar, OpenLayers 开发人员 / OSGeo</cite>

研讨会展示了Web标准社区对浏览器（Web平台）中地图标准化的接受程度，但同时也提醒大家：这项工作会非常耗时费力。Web平台的拥护者建议地图标准化的工作本质上应该是渐进的，从用例和需求开始，然后再到规范和开发。

对于地理空间标准社区来说，Web平台为开发和创新以及向最广泛的受众提供地图和空间信息，提供了必要的开放、公平的竞争环境。鉴于Web标准社区谨慎的合作意愿，地理空间标准社区需要继续推动Web地图的标准化，并增加对相关Web标准开发的参与度。

这份报告的结论是，该计划的下一步应该是确定W3C工作组的职权范围。该工作组从相关的W3C、WHATWG和OGC（标准）工作组中获取建议和需求。

<p class="info">会议视频、纪要以及参考材料均可在研讨会网站的<a href="{{ relBase }}/agenda">日程页面</a>找到。</p>

<h2 id="introduction">简介</h2>

加拿大自然资源部（NRCan）赞助了首个关于Web地图标准化的联合研讨会，该研讨会于2020年9月21日至10月2日在线上举行。研讨会由万维网联盟（W3C）和开放地理联盟（OGC）共同牵头举办，并由来自NRCan、W3C、OGC、加拿大环境与气候变化部（ECCC）、美国国家地理空间情报局（NGA）、美国国家航空和宇宙航行局（NASA）的成员，以及来自HTML地图社区的志愿者组成了组织委员会。该研讨会原计划与2020年6月的OGC技术委员会会议一同在线下举行，但由于2019新冠疫情（COVID-19），研讨会改为线上的形式，并对公众免费开放。

本次研讨会通过[网站](https://www.w3.org/2020/maps/)发布了对与会者、论文以及讲座的征集，并通过W3C和OGC会员沟通渠道共同推广。研讨会是按主题划分为不同板块，所有主题都以Web平台中地图标准化的概念为中心。主题包括：可访问性、国际化、隐私和安全、性能、增强现实、Web地图标准和技术，以及利益相关者的观点。

会议共有超过150人次[报名](https://www.w3.org/2020/maps/supporting-material)，共收到13份意见书、33份报告、7个专家组讨论和3个分组讨论会。所有的会议都进行了记录，每天的会议记录与当天的[议程项目](https://www.w3.org/2020/maps/agenda#day-1)相关联。会议鼓励大家对演讲和专家组讨论进行讨论（目前仍是），可以在会议中通过[实时对话](https://gitter.im/Maps4HTML/W3C-OGC-Workshop-Maps-For-Web)讨论，也可以在会后，在单独的[Web标准讨论论坛主题](https://discourse.wicg.io/c/web-mapping/22)中对每个演讲、专家组讨论或分组讨论进行讨论。为了方便回顾，每个单独的讨论主题都会链接到相应的会议回放。

<h2 id="workshop-themes">研讨会主题</h2>

<h3 id="accessibility-a11y">可访问性（无障碍访问）</h3>

Nic Chan和Robert Linder所做的一项[分析](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Nic_Chan/index.html)，是根据Web内容无障碍指南（WCAG）来衡量现有的Web地图嵌入解决方案的可访问性。简而言之，他们所评估的Web地图框架中，没有一个符合WCAG 2.1的所有成功标准。而对于某一些标准，被评估的框架中则没有一个能够达到。出于对此次评估的回应，一些框架维护者改善了框架的可访问性。作为研讨会的初步结果，这让人很有信心。

Nicolò Carpignoli和Joshue O 'Connor对[无障碍Web地图的要求](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Nicolo_Carpignoli-Maps-for-the-Web.pdf) 进行了概述。他们强调的一个重要需求是可访问的、基于文本的地理位置“注释”。根据标准的地理模型，这些文本注释对应于对OGC的SFS简单要素标准。这个OGC标准描述了简单几何对象的通用架构，并且已经被KML、GeoPackage和GeoJSON等几个流行标准所采用。地理注释的标准化需要找到一种方法，在HTML中实现这些特性。浏览器支持带注释的地理元素的隐式先决条件是浏览器对地图呈现的控制（用户代理需要知道在哪里呈现该要素）。因此，这些需求似乎含蓄地认可了将地图集成到HTML的理念和相关的无障碍标准（CSS、ARIA、WCAG）。报告还强调有必要将主要信息与背景信息或周围的“噪音”分开。也就是说，这是一种基于层的地图模型，可以让使用计算机辅助的用户关注相关层。

Claudia Loitsch和Julian Striegl描述了如何使用地图来改善[室内位置的可访问性](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Claudia_Loitsch_Julian_Striegl.pdf) 。他们的研究表明，目前室内地图的覆盖率非常低。更重要的是，对于如何让地图和地理数据能够满足不同情景和不同用户需求，目前还没有统一的标准。他们总结，由于室内地图数据的市场预计在未来几年将显著增长，上述问题为制定此类标准提供了绝佳机会，以免在不兼容的解决方案上消耗甚至浪费绘图工作。

物理无障碍是指为身体残疾者提供的设施，如轮椅坡道等。WheelMap.org网站的Sebastian Felix Zappe认为[HTML中的地图可以被用于“残障主流化”](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Sebastian_Felix_Zappe_Holger_Dieteric.pdf)，也就是说，确保无障碍信息通过标准的制定，成为所有Web地图服务的一部分。

来自Smith Kettlewell眼科研究所的Brandon Biggs[强调了向盲人和视力受损用户展示地图内容的重要性](https://www.w3.org/2020/maps/supporting-material-uploads/position-statements/Brandon_Biggs-Smith-Kettlewell.pdf)。WCAG标准和技术目前还没有涵盖Web地图中图形信息的复杂性，也没有涵盖将这种空间信息传达给非可视Web用户的方法。随着浏览器新增的内置功能，比如Web振动、音频和语音识别API，可以为Web创建更高级的非可视化地图。为了生成数字或振感有声地图，地理空间数据集中的每个要素都需要名称和完整的几何特征。Biggs开发的非视觉地图使用了空间碰撞检测，用户操作他们在空间中的虚拟位置，当虚拟位置与要素发生碰撞时，就会读出要素的名称属性。现有的栅格地图和未标记的特征向量集不能提供所需的文本描述。即使是将要素标记为点标记的地图也一样，因为要素在空间中的比例是未知的。Biggs的结论是，如果不考虑非可视地图对Web地图要素信息的数据建模要求，构建标准HTML组件是毫无意义的。这指出了建立Web地图标准需要解决的至少两个关键问题。

<h4 id="web-maps-for-cognitive-accessibility">Web地图的认知障碍可访问性</h4>

包括David Fazio、John Kirkwood和John Rochford在内的[专家小组](https://youtu.be/Jb-vLX7a1m0?list=PLNhYw8KaLq2VuEWzz096iRjtvWel-p2AJ&t=2534)讨论了认知障碍群体的地图相关需求。他们都是W3C认知障碍可访问性（COGA）任务小组的成员。COGA任务组的主席Lisa Seeman也参与了专家讨论组的规划工作，但由于日程安排上的沟通失误，她最终未能参加。总之，专家组成员指出，虽然在这一领域还需要进行大量的用户研究，但从广义上讲，针对COGA用户的可访问Web地图技术是一个巨大的市场，这个市场最终也适用于所有人。具体来说，随着大脑（更准确地说是顶叶）的老化，与导向（也就是室内外导航）相关的功能减弱。导向的关键挑战是找到一种方法，利用符合用户认知能力的线索来描述空间信息和方向。这些线索可以是可视化的，也可以是文字的，针对不同的人有不同的形式。该小组还确认，这样的技术不需要局限于专有软件，事实上，他们的特别任务组正在为[COGA用户制定标准](https://w3c.github.io/coga/content-usable/)。希望相关的标准工作组之间能够进行合作，一同为地图用户提出这些需求。

<h4 id="creating-accessible-web-map-widgets">建立无障碍Web地图部件</h4>

本次研讨会汇集了无障碍Web地图这一新兴领域的全球专家和研究人员。他们讨论了残障人士，特别是有视觉障碍的人，使用Web地图会面临的问题，以及Web地图社区可以共同采取哪些行动来促进对地图内容和功能的可访问性。专家组成员包括来自Fizz Studio的Doug Schepers、来自Smith Kettlewell眼科研究所的工程师Brandon Biggs、来自玛丽皇后大学的Tony Stockman博士和来自缅因大学的Nicholas Giudice博士。

专家组首先描述了有声地图的性质，和目前存在的不同类型的有声和振感地图，并且描述了这些地图的特点和区别。包括音频标记（耳标），视觉和触觉之间的关系和相似性，以及如何在这样的地图中便于实现与API的设计。专家组还强调了标准化有声地图的重要考虑因素和要求，例如地图特征需要名称或标签属性，以及需要能够自动转换栅格数据，以便向听觉或触觉用户呈现。专家组讨论的另一个内容是，绘图学已经为视觉地图建立了良好的规则，有必要通过对相关用户的研究，让绘图学为非视觉地图制定类似的心理－生理标准。

对于有声地图领域面临的挑战，Tony Stockman说到：

> 事实上，真正的问题之一，是缺少通用的听觉显示标准。

对于有声和振感地图领域面临的挑战，Nicholas Giudice说到：

> 对于非视觉的地图，绘图员们…没有考虑过听觉和振感地图的[制图法]，所以我们需要融入任一类型的标准，更基于经验的设计指南…确保这些元素既能被明显的感知，又具有认知上的意义。

对于标准化组织的挑战，Brandon Biggs说到：

> 有三个[挑战]。第一个是数据，在数据方面需要做更多的工作。第二个是API。未来会有一些类似虚拟现实（WebXR）的API出现，我们需要考虑到这些API，以及如何用那种方式来展现地图。第三个是让用户参与到我们的产品中来。

对于标准组织如何促进有声地图创新，Brandon Biggs说到：

> 我们需要在所有不同的模式下制作更多的地图…最大的问题…作为地理学专家，我们还没有真正尝试过绘制旧金山湾区捷运系统（BART）地图或者科罗拉多大峡谷的拓扑图，或者其他不同类型的地图。

<h3 id="augmented-reality-ar">增强现实(AR)</h3>

开放性AR云协会的常务董事，来自Norkart.no的Jan-Erik Vinje，就[新兴的OGC GeoPose标准做了演讲](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Jan-Erik_Vinje-From%20Points-of-interest_to_maps_of_objects.pdf)。Jan-Erik通过与2D兴趣点（POIs）进行比较，描述了什么是“GeoPose”。与可以在2D Web地图上呈现的POIs不同，GeoPose可以在3D地球投影环境中呈现，并且支持“六自由度”，这意味着GeoPose可以描述对象在三维空间中的位置和旋转方向。Jan-Erik强调，GeoPose正试图创建一个标准，来描述现实和虚拟世界中倾向于移动的物体的行为。这些物体的几何结构相对于地球的方向是不固定的。它是推动开放性空间网络的一部分。开放性空间网络也要求对事物的描述（几何结构、语义和关系）必须是机器可读的和可更新的，不过并不排除人工干预的可能性。他指出，所有这些概念从根本上都与专题图层地图兼容，不过是三维的。“增强现实”的含义是，地图通常会显示使用者周围的现实世界，但也可能包含虚拟对象，例如覆盖在物理现实之上的历史对象的展现。Jan-Erik认为，本地浏览器上的地图API应该支持“全局模式”，这可能是标准化增强现实的基础：

> 本地地图元素中有了[GeoPose的]的支持…如果我们能确保地图元素支持全局模式，就像Cesium或谷歌地球一样，那么地图中的物体就会变得特别有用。

Christine Perey和Josh Lieberman演讲的内容是，[如何将GeoPose与HTML Maps社区小组开发的Web地图集成在一起，或者提供用例来支持Web地图的用例和需求](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/M4W_GeoPoseUseCases_Perey_LIebermang)。他们列举了GeoPose是如何考虑到3D元素，为不同的利益相关者（内容作者、网站访问者或应用程序开发人员）匹配及扩展用例。一些以GeoPose为中心的附加用例，例如从任意/不同方向的观看路线，与COGA专家组的考虑相一致，考虑到了有认知需求的用户的空间提示问题。

Josh Lieberman －开放地理空间联盟：

> 一个朝向北且有固定范围和比例的平面地图，和增强现实之间确实存在连续性。在增强现实中你可以看到周围事物以及你面前事物，地图对象可以放置在你的视野中。Web地图可以从增强现实转变到形式主义现实…可以真正投入到这个范围…GeoPose是建立这种连续性的重要部分。

关于[AR和3D绘图](https://youtu.be/RPZlE5N-Nds?t=5820) 的杰出专家组聚集了AR研究人员、企业家和标准实践者：Cesium的首席执行官Patrick Cozzi、Equal Entry的Thomas Logan、开放性AR云协会的Christine Perey和Jan-Erik Vinje，以及三星互联网团队的Ada Rose Cannon。

在专家讨论组的一开始，Thomas Logan指出，很多时候当人们想到增强现实时，他们想到的是纯粹的视觉应用，但他发现，声音对于视力有障碍的人或盲人来说是一种重要的增强。小组讨论了关于增强现实中地理空间信息的精度要求，以及如何定位增强现实坐标框架、如何将其关联到现实世界。专家组讨论了游戏的可访问性，以及游戏、图像和3D地理空间技术之间的重要交叉。他们期望这些领域之间的协作可以成为增强现实技术进步的关键。专家组还回答了观众提出的问题，即如HTML地图社区建议的那样，从2D地图开始逐步推进Web平台，引入增强现实技术。

Jan-Erik Vinje －开放AR云协会：

> 我要点赞！从这[2D原生Web地图]开始，在此基础上进行构建会更好。如果我们的原生地图元素一开始是2D的，那么接下来就要扩展它。这样你以后就可以拥有全景地图和沉浸式模式了。所以，继续加油吧，太棒了。

Ada Rose Cannon －三星互联网：

> 如果有原生元素，那就有趣了。目前实现Web增强现实的唯一方法就是Web XR…与Web XR交互最好的方式就是暴露某种信息字节，以便你使用的特定Web引擎可以抓取并利用这些内容，将其适当地整合在使用环境中。

Thomas Logan — Equal Entry:

> 当我进入无障碍访问领域时，2D地图一直是我所面临的挑战。所以我提出来，要确保人们真的关心和考虑到3D中的[可访问性]用例。

Patrick Cozzi — Cesium:

> 我笃信，为了在地图上推进增强现实技术，以及在总体上推进3D地理空间技术，我们真的需要在游戏、图形和地理空间的交叉领域进行这种合作…我认为游戏和地理空间的融合才刚刚开始。

<h3 id="internationalization">国际化</h3>

Brandon Liu关于[“多语言文本渲染”的演讲](http://bdon.org/maps-for-the-web/) 深入探讨了文本渲染和地图之间的关系，指出定义地图的是空间引用的几何图形与文本描述的组合，通常作为地图上的标签进行渲染。Liu建议，在评估不同的Web绘图方法时，需要从特定地图的角度和多语言的角度来考虑正确文本渲染的要求。Brandon评估了不同浏览器和地图框架对语言敏感性文本渲染的支持。他得出的结论是，如需使用自定义JavaScript或Web Assembly（WASM）进行深层次复杂的文本渲染，在缺乏跨浏览器的高性能、符合图形标准（例如Cancas，尤其是WebGL）的可访问文本渲染设备的情况下，会更倾向于使用浏览器CSS和HTML内置文本渲染方式，依赖于声明式多语言文本支持的绘图方式。Brandon还特别建议，在推动一个标准（如MapML）时，我们需要非常小心，而不是使用一组低级的JavaScript工具来完成某些事情。因为Web标准必须是真正国际化的。例如，他注意到中－日－韩印刷的地图通常有垂直的文本渲染，但Web地图很少有这样的。Web浏览器确实支持垂直文本，因此如果Web地图能够利用浏览器的这一特性，那将是非常理想的。Brandon在回答一个问题时指出，确保地图文本是HTML DOM的一部分。无论它是否在地图的用户界面中，这都是支持地图国际化的一部分。

<h4 id="worldwide-web-maps-challenges-in-the-global-context">全球Web地图：全球环境中的挑战</h4>

研讨会召集了一个关于国际Web地图技术挑战的[专家小组](https://youtu.be/zJkJcvmUA5o?t=4642)，并以Web地图标准化作为背景。这些专家包括来自Protomaps的Brandon Liu，来自Geonovum的Thijs Brentjens和来自ESRI的Siva Pidaparthi。讨论的主题包括：如何改善Web地图的现状；利用浏览器的文本支持对地图内容进行本地化；地理空间数据的安全性和隐私性的挑战；地图投影和标准；以及Web地图用户可访问性的重要性。

Brandon Liu, Protomaps:

> 要成为Web标准，一个不成熟的国际化解决方案是不够的，如果解决方案一个只有最小可行性的产品，例如只适用于从左到右单向阅读的语言，也是不够的…我很好奇Web浏览器的[国际化]是否已经影响到更广泛的Web绘图可能性。


Thijs Brentjens, Geonovum:

> [Web地图的可访问性]是一个非常重要的话题…[然而]它在地理空间工作中不是[非常重要]…[我们]的想法是，地图只能是可视化的…你无法让它无障碍化。所以，我们就不费功夫了。[…]这让我们开始分析…我们知道地图的无障碍化并不容易实现，因为我认为有很多其他的选择。


Siva Pidaparthi, ESRI:

> 当我们考虑新的标准时，我们也应该考虑其他不同的坐标系统，而不仅仅是Web 墨卡托投影或WGS84坐标系。它们适用于全球数据，不太适用于本地数据。我们应该考虑额外的坐标参考系。

<h3 id="privacy">隐私</h3>

来自荷兰Geonovum的Thijs Brentjens做了一个关于[模糊地理定位](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Thijs_Brentjens/fuzzy-geolocation/index.html)的报告。在荷兰备受争议的COVID-19跟踪应用程序使得模糊地理定位成为了Geonovum当地关注的一个话题，特别是关于应用程序在服务器上获取和存储个人用户地理位置信息的隐私问题。因此，Geonovum的工作人员讨论了API服务可能有助于在将位置传输到后端服务之前，隐藏用户的真实意向或位置，或者在其中加入一些随机性。Thijs愿意与感兴趣的各方合作，实现这种“模糊地理定位”服务或API。

<h3 id="performance">性能</h3>

Andreas Hocevar是OpenLayersWeb地图库的核心贡献者，他介绍了自己的一些研究，从HTML社区组织的地图，到Web Workers之间（在浏览器内并行计算线程）使用离屏CanvasAPI，在OpenLayers地图中达到更平滑更快速的加载和渲染，不会导致用户界面的中断。Andreas展示了一个视频，着重展示了该技术与异步读取（当前的标准）在渲染速度上的差异。Andreas最后呼吁Webkit （Apple）和Gecko （Mozilla）来完成他们对OffscreenCanvas规范化的实现，这样地图和其他图形库就可以在所有浏览器上部署这些性能改进，因为互通性是Web平台的核心优势。

<h3 id="web-map-standards-and-technology">Web地图标准和技术</h3>

Amelia Bellamy-Royds讨论了Web地图的常见行为和模式，以及[Web地图的用例和需求](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements) 报告的开发状态。她提到，如果现有框架可以满足我们的需求，则不需要采取任何行动，但情况并非如此，特别是涉及到用户界面的可访问性时。Amelia展示了各种现有的Web地图技术和用例，从现有的HTML `<map>` 元素的超链接图像地图（如加拿大环境部的每日天气预报地图）。Amelia还展示了一个用于显示[高分辨率缩放和平移绘制](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#use-case-technical-drawings)的Leaflet地图查看器，作为支持非地理地图的用例。

Dan Little介绍了GeoMoose，这是一个[始于2003年的成熟的OSGeo项目](https://youtu.be/Ji3HF35Hpso?list=PLNhYw8KaLq2VuEWzz096iRjtvWel-p2AJ&t=3347)。自成立以来经历了两次重大的修订。它仍然使用基于XML目录的概念来声明应用程序的结构，这种声明的形式颇受用户欢迎。GeoMoose经过了几代JavaScript框架的发展，支持现代格式，如功能上的GeoJSON、MapBox矢量切片、云优化的GeoTiff等。即使经历了几代功能样式，如MapCSS、SLD、MapBox GL样式表和OpenLayers样式等，没有直接的Web平台支持，地图的功能样式仍然是一个挑战。即使使用硬件加速渲染工具（如WebGL）也不能保证性能，因为地图内容通常是数据密集型格式，并没有针对动态渲染进行优化。GeoMoose很早就支持诸如WMS和WFS等OGC协议，并得益于联邦地理数据委员会（FGDC）的支持，以实现了郡与郡之间的地理信息共享。这就意味着，在明尼苏达州和其他北部州，GeoMoose的安装得到了普及。

Dan Little就Web地图的标准化提出了几点建议。首先，层定义应该与源数据解耦，因为这是GeoMoose项目遇到的主要障碍。接下来，需要以一种与制图过程一致的方式内置地图功能的动态样式。

OGC API标准开发项目主任Gobe Hobona博士介绍了[开发和推出OGC API标准的原则、范围、方法、历史和计划](https://www.youtube.com/watch?v=kYZ1RBQFHEU&list=PLNhYw8KaLq2VuEWzz096iRjtvWel-p2AJ&index=2&t=176s)。OGC API标准是利用OpenAPI规范的下一代OGC地理空间开发人员标准。这些标准为访问Web API提供的空间数据指定了模块化的构建块。因此，OGC API标准也将空间数据应用到Web最佳实践中。为促进OGC API标准的发展，我们会定期举办编程活动，让公众参与到其中。

Tom Kralidis介绍了[pygeoapi开源项目](https://www.youtube.com/watch?v=kYZ1RBQFHEU&list=PLNhYw8KaLq2VuEWzz096iRjtvWel-p2AJ&index=2&t=981s)的工作，该项目由他和Angelos Tzotsos，Francesco Bartoli一同领导。该项目是使用许多可用的地理空间Python库构建的，由于集成了GDAL空间引擎，它支持许多不同的后端数据源。它还使用了新兴的STAC API和OGC API（特性、Tiles、记录）和其他API标准。Francesco Bartoli对这个框架做了一个简短的演示。Tom邀请观众在[pygeoapi Gitter频道上](https://gitter.im/geopython/pygeoapi)与开发人员讨论这个项目。

[来自CREAF的Joan Masó是OGC API切片规范的编辑](http://www.creaf.cat/staff/joan-maso-pau)，他介绍了[如何通过OGC测试床程序开发地图标记语言（MapML），以及MapML与OGC Web服务和API集成的巨大潜力](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Joan_Maso_Connection_Of_The_MapML_Initiative_With_OGC_Standards-V2.pdf)。Joan提到了二维切片矩阵集、Web地图切片服务和MapML之间的关系，强调了URL模板在这三个标准中的形式化，并强调通过URL模板的应用，人们能够将客户端和服务器解耦。他指出，一个切片集元数据文档（来自OGC API）和一个简单的MapML文档之间有很大的相似性。他总结说，MapML可能是使OGC Tiles API对浏览器有用的最简单的方法，特别是当该API产生MapML文档时。

来自地理空间Web服务搜索引擎GeoSeer.net的Jonathan Moules介绍了通过他的GeoSeer服务所发现的[地图服务的局限性和障碍](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Jonathan_Moules.pdf) 。Jonathan强调的主要问题是数百个地理站点的存在。尽管在他的搜索引擎中有数百万的数据集，但如果没有GeoSeer的人工细致管理，用户将无法跨站点搜索数据。他认为，通过这些门户站点发布数据的组织不会产生好的元数据，这进一步降低了其服务的访问度。他的服务索引了大约200万项服务，每月只有大约1500次搜索。虽然门户的联合（例如级联目录服务）是一个潜在的问题解决方法，但实际的问题是对服务搜索的需求并不大。乔纳森最后问道：在这200万个分布在如此多地理门户的服务中，有多少是可供共享的，有多少仅供自己使用的地图服务？他还问到，当没有人（可能除了制作人）使用或搜索数据时，[将数据集放到地理门户上以遵守规范（例如，INSPIRE），这是对资源的良好利用吗](https://discourse.wicg.io/t/the-difficulty-of-discovering-ogc-services/4844/7?u=peterr)？

Satoru Takagi是W3C SVG工作组的成员，也是KDDI公司的W3C Web标准的长期贡献者，他开发了一个完全基于Web标准的Web GIS，包括HTML、SVG、CSS和JavaScript。Takagi的目标是[去中心化的Web地图](https://satakagi.github.io/mapsForWebWS2020-docs/De-centralizedWebMapping.html)，也是一个客观的HTML地图社区团体的目标。他认为通过浏览器迭代加入原生地图代码不切实际，因为从他的工作可以发现，通过组合现有的Web标准已经足以创建地图了。Takagi建议扩展开放地理空间联盟对“切片”概念的定义，纳入独特的性能和自适应的切片方案，例如他的[四叉树矢量切片](https://satakagi.github.io/mapsForWebWS2020-docs/QuadTreeCompositeTilingAndVectorTileStandard.html)。他还[建议地理空间行业直接参与W3C流程](https://discourse.wicg.io/t/vector-tiling-on-svgmap/3135)。

来自加拿大自然资源部的Peter Rushforth分两部分介绍了MapML提案（[第一部分](https://www.youtube.com/watch?v=zJkJcvmUA5o&list=PLNhYw8KaLq2VuEWzz096iRjtvWel-p2AJ&index=3&t=https://youtu.be/zJkJcvmUA5o?t=1140s)，[第二部分](https://youtu.be/aqXmbNAaLAU?t=4903)）。MapML提案是地图HTML社区内部形成的提案，在专用的文件中，对网页中嵌入的地图内容和描述性地图数据（矢量特性和图像切片集，以及相应的注释和元数据）定义HTML元素。MapML通过逐步增强的 `<map>` 和HTML中新的 `<layer>` 元素来响应用例和需求，以满足地理相关和非地理相关Web地图的需求，并设计为通过脚本增强的API支持核心功能。

[Bocoup](https://bocoup.com/about/mission-values)的Simon Pieters是WHATWG和W3C标准、各类浏览器和Web平台测试的贡献者，他对HTML地图社区小组的文件做了回顾。Simon指出，[Web地图的用例和需求](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/)已经走上了正轨，而他的建议是以一种渐进的方式来处理浏览器对地图支持的规范和开发。特别地，他建议优先标准化基本的原语：小块的、可以单独公开或与非地理空间应用程序共享的功能。例如，他向CSS工作组提出了一个功能特性要求，建议将平移和缩放等（地理空间和非地理空间的图形内容）用户交互模式集成到浏览器中，作为聚焦文本的滚动交互的替代方案。

[Igalia](https://www.igalia.com/)的Brian Kardell的[演讲关于Web技术的规模和范围](https://youtu.be/HgcLYIj05DI)，以及随之而来的围绕开发Web标准的挑战，强调了创建这些标准是昂贵的、有风险的，并且是一个长期过程。他建议地图社区关注于定义共享的、限定范围的目标，逐渐增加Web平台对地图的支持。他提出Igalia可以向大家提供帮助，并提出了他们感兴趣的技术列表，包括：平移和缩放、离屏Canvas、硬件加速SVG等。

Terence Eden是HTML地图查看器标准化的长期支持者，他做了一个演讲[鼓励HTML地图社区向开发人员征求他们对MapML语法的意见](https://youtu.be/9iw75LmnyvQ?t=464)，以评估它是否太复杂或不够明确。他强调说，Web是由不同语言、国籍和经验的开发人员共享的国际资源，在他们不断反馈的情况下制定的标准才是最好。

Iván Sánchez Ortega[在演讲中概述了他对MapML提案的可实现性的担忧](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/2020-ogc-w3c-workshop-ivansanchez-slides/slides.html#/)，或者对HTML地图中任何纯粹声明式方法的担忧。他给出了一些现有浏览器API的例子，并对如何将它们与地图集成进行了思考。例如，Gamepad API或基于设备的API可以用来操作地图视图，但如果地图查看器是一个由浏览器控制的黑盒，则无法做到这一点。他还描述了WebGL纹理与GIS栅格覆盖数据的相似性：GeoTIFF多光谱图像的块应该被视作256x256x7微型数据立方体。他推测，未来卫星信息的图像处理将以“边缘计算”的形式在浏览器中完成，因为Web平台为所有开发人员提供了功能强大的API，他对如此强大的API如何与MapML协同工作提出了疑问。

Iván继续强调标准化是一种选择，并表示MapML无法解决商业和/或法律问题，而这些问题正是Web地图碎片化和不规范的原因。伊凡以GoogleMutant的Leaflet插件举例。它使用谷歌API以及Web标准Mutation Observers API，覆盖和同步谷歌和Leaflet查看器，因为谷歌地图服务条款禁止通过非谷歌视角（如Leaflet插件）直接渲染图像。Ivan坦言他的GoogleMutant兼容插件实属不必，地图供应商应该通过标准的API来公开内容，允许将多个来源的地图数据整合到浏览器中。Iván声称，所提倡的MapML标准接口不会改变地图供应商的行为，相反，它只会复制JavaScript地图框架中已有的功能（非标准接口）。

MapGears的Daniel Morissette介绍了[MapGears在MapServer、GDAL和OGR中的MapML实现](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Daniel_Morissette-ogc-w3c-mapml-in-mapserver-gdal-ogr.pdf)。Daniel的演讲展示了FOSS4G社区的一些专家愿意帮助推动所提议的Web标准的采用，并通过将新的地图数据格式集成到广泛使用的开源地理空间服务器软件中，为提供试验和反馈。

Karel Charvat的[演讲关于“地图白板”技术](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Karel_Charvat-Map-Compositions-format-intro-presentation-by-Karel.pdf)，并用他的项目创建的[白板技术](https://www.w3.org/2020/maps/supporting-material-uploads/position-statements/Karel_Charvat-Plan4all.pdf)进行了一次分组会议。地图白板是一种地图，它的原理很像一个共享的Web文档（例如，谷歌文档，或一个微软Teams文档），允许同时编辑和查看，动态地保存和更新彼此的内容视图。地图白板是使用开源的OpenLayers JavaScript地图框架构建的，依赖于组成地图的JSON文档，它扩展了旧的OGC Web地图文本XML文档类型，并具有许多现代特性。

Kathi Schleidt，代表Hylke van der Schaaf和Thomas Usländer以及她自己发言，演讲的内容是[Web地图动态和观察数据，以及从传感器获得元数据的挑战](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Schleidt_van_der_Schaaf_%20Uslander-Dynamic-and-Observational-Spatial-Data.pdf)。OGC SensorThings API遵循OData RESTful API架构。该项目解决的挑战包括适当缩放的地图层显示，其中多尺度数据可用。SensorThings模型非常有用，因为它允许您基于数据模型定义的图来制定查询，并且使用RESTful OData API可以很好地实现查询。在地图上多尺度显示SensorThings数据的挑战是由他们的JavaScript库来处理的，该库可以与Leaflet和OpenLayers一起工作，它接受JSON配置对象，允许你校准它在你的应用程序中使用，而且它也在[GitHub上](https://github.com/DataCoveEU/STAM)开源。

世界历史辞志技术总监，来自匹兹堡大学的Karl Grossner做了一个关于延长GeoJSON时间的报告，名为“GeoJSON- t”。GeoJSON是一个基于广泛应用的OGC简单要素模型的Web地理数据编码标准，用于传输和消耗特征、其属性和几何形状。GeoJSON-Time提议用“时间点”属性扩展标准模型，它允许编码以标准化的方式描述与特性相关的时间。“时间点”属性的结构没有最终确定，但被设计为包含精确和模糊时间，以及时间范围。GeoJSON-T的提案被数字人文社区使用，但也可以在该社区之外修订和使用。

IIIF地图的技术规范小组主席Bryan Haberberger介绍了他的工作，集成GeoJSON标准（编码矢量地理特性在JSON数据文件）与JSON-LD（关联数据），使用GeoJSON-LD为不属于他所在组织的文化资源创建了语义标注。GeoJSON- ld是基于JSON-LD 1.1制定的，因为JSON-LD的原始版本不支持列表的列表，而这是GeoJSON多边形几何类型所必需的。此外，Bryan还讨论了Web注释标准模型，该模型支持为任何链接的数据资源创建GeoJSON-LD注释并对其进行地理定位。

Nicolas Rafael Palomino在演讲中解释了他的观点，即[地理空间信息标准化在为数字友好型未来做准备时是多么重要，以及为何至关重要](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Nicolas_Rafael_Palomino-W3C-Application.pdf)。总之，他建议推进HTML地图标准化的目标。

<h3 id="government-stakeholders">政府利益相关者</h3>

美国地质调查局（USGS）的Danielle Dupuy介绍了[声明式数据驱动地图样式的自动化好处](https://www.youtube.com/watch?v=Jb-vLX7a1m0&feature=youtu.be&list=PLNhYw8KaLq2VuEWzz096iRjtvWel-p2AJ&t=4977)。USGS开发了一个系统，可以在数据库中存储地图类型和样式信息，并提供一个中心位置来编辑某些地图属性的声明值，包括地图的符号、颜色、大小和“窗格”（可以被描述为z索引“类别”的内部Leaflet）。非开发人员可以很容易地操纵这些地图“属性”，减少或消除了开发人员在地图制作过程中的干预需求。美国地质勘探局发现该系统十分高效，他们计划将该技术应用到其他项目中。

英国气象局的信息技术研究员Chris Little[对制图学和气象学的历史和未来进行了回顾](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Chris_Little-Meteorology-and-MapsCut1.pdf)。这是一次有趣的旅行，对数千年的地图和空间信息管理技术的演变进行了回顾，并对当前的需求和潜在的未来趋势提供了一些见解。首先，Chris注意到，对于气象图表和气象地图来说，当前Web地图的“层”隐喻已经被“打破”了。在图表中，以100个时间点或间隔，将100个“级别”与100个数据集成组合起来，产生数百万个可能的层。他预测空间信息和浏览器的整合将持续10年，但并没有具体说明这种整合将如何进行或应该如何进行。不过，他强调，当前的技术环境特别适合这种增长。Chris表示，他倾向于将地图技术与3D内容整合到浏览器中，并将2D内容作为这种整合的产物，这将使某些类型的问题更容易得到解决。

Sajeevan G.介绍了[用于支持印度总理的农村公路项目（PMGSY）的网络GIS应用程序](https://www.w3.org/2020/maps/supporting-material-uploads/presentations/Sajeevan_G-maps-for-the-web.pdf)。PMGSY应用程序有15年以上的历史，包括基于Web服务标准、开源和商业软件，从基于GIS的商业应用程序过渡到Web界面。Sajeevan博士指出，虽然应用程序能够生产和消费OGC标准服务，但许多企业仍然要求只接受特性内容作为形状文件。预计未来的OGC Web API将成为未来功能特性事务不可或缺的一部分。关于HTML地图的标准化，Sajeevan博士强调了地方坐标系统的重要性，并[建议在未来的Web地图标准中，类似谷歌地球的全景视图是必不可少的](https://www.w3.org/2020/maps/supporting-material-uploads/position-statements/Sajeevan_G.pdf)。球形查看器，在运行时对全局视图做动态去投影，不需要在标准中指定其地图投影。查看器应该能够使用外部地图数据服务，同时支持栅格和向量（特性）数据类型。Sajeevan博士预见到开发人员社区对基于浏览器的HTML地图查看器的巨大贡献，并认为地理空间数据服务是一个新兴的商业机会。

<h4 id="stakeholders-government-geospatial-data-providers-&-the-web">利益相关者：政府地理空间数据提供者与Web领域</h4>

研讨会还召集了一个政府利益相关小组，讨论地理空间信息对政府的重要性，以及Web地图标准可能对其组织的目标产生何种影响。专家组包括加拿大的地理空间平台的经理Sebastien Durand，加拿大自然资源GeoConnections项目经理Cameron Wilson，西班牙国家地理信息中心主任Emilio López Romero，以及地理空间科学家和与美国宇航局AMES研究中心的标准专家，Web地图服务OGC标准的制定人之一，Don Sullivan。Sébastien提出的一个关键观点是，Web地图提供了一种上下文环境下的数据视图，其将数据转换为知识的能力方面是独特的，不可思议的。总的来说，参会专家会接受建议或热心地提出建议，将地图标准化，并整合在浏览器技术中，特别是通过OGC API和HTML，因为他们相信这样的整合可以更好地利用公共空间数据基础设施，以及为“共同认可的可行局面”提供一个跨越JavaScript框架的可以互操作的标准。

来自NASA艾姆斯研究中心的Don Sullivan：

> 当我听说…Web地图的到来并作为顶级元素出现。我心想，太棒了。我在此…作为优胜者。我认为这是一个非常棒的想法，但它的出现花费的时间太久。我等这一刻已经等了20多年了。

<h3 id="stakeholders-open-source-for-web-mapping">利益相关者：Web绘图开源</h3>

一个由开源地理空间和浏览器开发人员组成的专家组讨论了将地图支持引入Web浏览器需要做些什么。来自OSGeo并参与了许多Geopython项目的Tom Kralidis成立了一个专家小组，其中包括Bocoup的Simon Pieters、OSGeo/MapGears的Daniel Morissette、NGA的Gnome项目的Will Mortenson和OpenLayers/OSGeo的Andreas Hocevar。专家组讨论了Web和地理空间社区之间的协作，以及如何对HTML标准和浏览器代码库提出想法和要求。小组也讨论Web地图库所面临的问题，这些问题在更好的支持拖拽式地图界面的浏览器支持下会更容易处理，例如性能和矢量特性等问题。没有浏览器的支持，web地图框架开发人员以及内容作者就必须掌握诸如WebGL等复杂、低级的API。

Daniel Morissette，来自MapGears / OSGeo：

> Web Map Service（WMS）就是一个很好的例子，它是一个可行的标准，没有人会废弃它，即使它很简单、有缺陷。如果它足够好，人们就会使用它，如果HTML中的地图集成足够好，它就会最终赢得人心。

Will Mortenson, 来自NGA的Gnome项目：

> 我的工作是收集客户和用户的需求；…作为一个在政府工作的人，我并不完全了解[web浏览器的工作原理]…所以，如果有人能从公众角度强调，为什么[在浏览器上投入地图开发]是很重要的，[政府]就可以在这方面投资。

Andreas Hocevar，来自 OpenLayers / OSGeo：

>[原生HTML的地图元素]肯定会让我们更多地关注我们可以用地图做什么；如何制作好的地图，我们如何支持用户制作出好的地图…越是这么想，我就越倾向于…拖拽式地图的基本概念…有了这个概念，地图库可能会朝着我们甚至还无法想象的方向发展。但是我们目前对地图渲染的强烈关注绝对会阻碍其他方面的发展。

Simon Pieters，来自Bocoup：

> 浏览器开发人员和地图框架开发人员需要相互沟通，并就用例和需求达成一致，以及我们如何改变浏览器以更好地满足那些需求。…在[这个]空间中设计解决方案时…在默认情况下，地图应该对使用屏幕阅读器的人达到无障碍化…但对于更多自定义渲染，当你使用Canvas或WebGL时，默认情况下很难获得可访问性，但还是需要以某种方式让它成为可能。

<h3 id="commercial-mapping-stakeholders">商业地图利益相关者</h3>

W3C的Ted Guild是商业地图平台利益相关者组成的专家组的主席，专家组成员包括Ed Parsons（谷歌）、Johannes Lauer（HERE，前身是诺基亚地图）、Daniel Lewis（Geotab）和Thomas Lee（Mapbox）。这组利益相关者在与Web地图相关的问题上达成了共识，他们深入探讨了研讨会的主题“Web地图标准”，同时还讨论了多个主题，包括：客户端地图标准对于提高产品迭代的灵活性的潜在好处；开放（政府和其他）数据对地图内容创建的好处和限制；客户端地图内容呈现性能的重要性；在基础地图上渲染GeoJSON的简单用例有巨大的价值；用于创建可访问的接口和样式、并提高性能的矢量切片信息的价值；进一步开发可以反映开源软件许可先进状态的数据许可方法的必要性；5G技术为每个人改善地图的前景；嵌入在网页中的语义文本注释/标记如何与位置和地图有重要联系；以及即将到来的室内地图革命。

Daniel Lewis — Geotab:

> [在]灾难期间，决策者能够迅速进入并获取这类数据…最终，这些内容的目的是，基于这些内容作出决策…拥有快速迭代的能力是非常重要的。互操作性是贯穿这一切的关键…将这个标准融入到每个人都在使用的工具中…立即开始打破条条框框…

Tom Lee — Mapbox:

> 对我们来说，解锁性能非常重要。迁移到本地实现可以真正释放一些额外的性能。任何能够释放更多性能的方法都将推动前沿技术的发展，如果标准化能够成为其中的一部分，那就太棒了。

Ed Parsons — Google:

> 我想说的是，我们需要变得更主流。我们需要成为更加标准的网络公民，而不是创建我们自己的地理空间网络。

<h2 id="conclusion">结论</h2>

Wendy Seltzer — W3C战略负责人及顾问:

> …作为W3C的战略负责人，今天的讨论让我很兴奋。我们欢迎您进行任何可以填补现有标准工作中的空白后续工作，或者您希望看到W3C开始的新工作，我们的团队会在这里提供帮助。

在这之前，Web地图的标准专注于服务器端的技术和基础设施，并且有一组粗旷的地图服务器标准，它们与通用的现代客户端技术密切交互，比如可平移和缩放的切片化“拖拽式地图”。由于这些技术实际上是所有web地图提供者之间的标准，并且已经稳定使用了很多年，因此有一些共同的因素将明显受益于正式的客户端标准化：切片化，平移，缩放，坐标参考系统，层，地图的无障碍访问功能（例如感兴趣的几何区域）等等。

促进地图标准化的另一个动力是可以改善Web地图的可访问性，这是研讨会的一个主要主题。对现有Web框架的一些研究显示了可访问性的缺乏，这需要在web标准中加以解决。

<h3> 下一步 </h3>

下一个合乎逻辑的步骤是开始讨论工作组应如何在其章程中确定这些功能的范围。讨论的两个要点是，首个章程内需要包含什么内容，以及不包含哪些内容。是定义更高级的特定于地图的特性，还是将功能分解为更通用的原语，以解决除地图之外更广泛的用例集。

该章程还应定义服务器端和客户端地图标准之间的关系和协调，具体来说，应与W3C工作组进行磋商和协作，以实现可能的最佳结果。W3C和OGC之间存在一种相互关系，其中包括一项联合工作协议，该协议将有助于将两个组织正确的利益相关者和相关工作组聚集在一起。
