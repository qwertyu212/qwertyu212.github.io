if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,d,r)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return a;case"module":return c;default:return e(i)}}))).then((e=>{const i=r(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/11/12/My-Gallery/index.html",revision:"19d2b1b7e3efd4db19ae80ff5765852c"},{url:"2021/11/13/第一篇文章/index.html",revision:"b43def5f6f4afb48d0b0334bc7d544b2"},{url:"2021/11/13/第一篇文章/test_01.jpg",revision:"1426e3611a759c6d6663f76b9dab8ff5"},{url:"2021/11/29/3-全国汽车销量可视化/index.html",revision:"6ca6904e2ae8fadd2bfd489f60acebb1"},{url:"2021/11/29/4-运营商流失用户的分析与预测/index.html",revision:"f977986972d61f3c653510012a4d7d91"},{url:"2021/11/29/航空公司客户价值分析/index.html",revision:"ae19d9577879afa5c9a1d966b0ba0e8d"},{url:"2021/11/29/财政收入预测分析/image-20211129125338196.jpg",revision:"436f13d45dd55c6577cc74cb976ff1e5"},{url:"2021/11/29/财政收入预测分析/image-20211129125657821.png",revision:"3fd0803c257216a3304725f8c83e9b26"},{url:"2021/11/29/财政收入预测分析/image-20211129213021543.png",revision:"2e4c87373fe53a421ec81b693647d31a"},{url:"2021/11/29/财政收入预测分析/index.html",revision:"39966d6ab38d3c97cc276443ade7dfa6"},{url:"2021/11/30/php连接数据库的增删改查/index.html",revision:"d21dd0445074e214a5b587f8a1ac1e9a"},{url:"2021/12/07/学习计划/index.html",revision:"cb777319d4abfafbc1422628c5ae17ae"},{url:"2021/12/11/测试一/index.html",revision:"b152be02b9ac96cdfb49f5c4ee494c8f"},{url:"2021/12/11/测试三/index.html",revision:"513281d3bb228991698387036f0f3cce"},{url:"2021/12/11/测试二/index.html",revision:"c00162c14a2b6571815a6790a813f973"},{url:"2021/12/11/测试四/index.html",revision:"c32262355d9ab813e7a2a2a020a9f15d"},{url:"2021/12/14/随记/index.html",revision:"3211d77e573b3ffcb455c7f8bd2106d9"},{url:"2021/12/23/PHP/index.html",revision:"5c5599cde3e1c3b983e21d9c9f165d31"},{url:"2022/12/19/数据结构/index.html",revision:"fd361d13daa4bda9b8c99a6a27d7f9d6"},{url:"2023/01/05/记录/index.html",revision:"bd5fe716e8f6758bbf5e7ab911e8e445"},{url:"2023/01/18/Linux学习笔记/index.html",revision:"373c5efabe85a1e0743b7530e03fb93c"},{url:"2023/01/18/简历/index.html",revision:"3f8f28370e792fe38b55783fbdbe4533"},{url:"archives/2021/11/index.html",revision:"17ee3645d2e42bcf9ae0a7649ae7daf9"},{url:"archives/2021/12/index.html",revision:"4163d1dd06ab3c94d484ae914fdd3d8d"},{url:"archives/2021/index.html",revision:"79e518bd4e0e2d303d36c27ad43d9624"},{url:"archives/2021/page/2/index.html",revision:"e299bb5830368d0749de3beeb9805896"},{url:"archives/2022/12/index.html",revision:"4dba46710ca48fb419f25d51a5adab06"},{url:"archives/2022/index.html",revision:"e4e0ce86468a8133b50ce4132b2b10f4"},{url:"archives/2023/01/index.html",revision:"cc9e45430f34774590f1dd643a4f0a34"},{url:"archives/2023/index.html",revision:"b4b86b027b6b06b6898335cccc6ea6ed"},{url:"archives/index.html",revision:"fbace9d435ea41fe4260cc5150bbd36c"},{url:"archives/page/2/index.html",revision:"7d7845b0420929e440c72c2453c6523b"},{url:"categories/index.html",revision:"8caf0436c8f84c5c8793e2133adf042c"},{url:"categories/Linux/index.html",revision:"1639298c95321a9ef4d05ab7faa546da"},{url:"categories/test/index.html",revision:"e80a7620526f7a231e69fedc9293d893"},{url:"categories/学习/index.html",revision:"f5da7b021bfa3e10d05bb1aca28a979c"},{url:"categories/测试/index.html",revision:"77e4e53262e4d14c132f68da13b8d52c"},{url:"categories/简历/index.html",revision:"8b85295f07e28b483c43f7f430f840a5"},{url:"categories/记录/index.html",revision:"55de50cfc07b7deb45a258791666189b"},{url:"categories/随记/index.html",revision:"f1e97d4c0978802035e5df6720b8e3ba"},{url:"css/index.css",revision:"74da870677b41809ea6da2c6f6891181"},{url:"css/mycss.css",revision:"c5eb8b70df112f62e17bfdcc1d9e34f5"},{url:"css/var.css",revision:"d9967998aa0cbdc94d69ee6cfc9f9ca6"},{url:"image/article20230118-2.jpg",revision:"86637da83b2a5303ccb6f61af62bddbe"},{url:"image/article20230118.jpg",revision:"fc86fded0f7bd27e4f7d2657a4342810"},{url:"image/article20230124.png",revision:"ed256386db153628d2eec7404fa674df"},{url:"image/bg_biaoqian.jpg",revision:"7a23cf1a517a007b4d52e975b72fc4cc"},{url:"image/bg_leixing.jpg",revision:"86f337937a6f0317b90420255c1547e5"},{url:"image/bg_shijian.jpg",revision:"9f8e0f50301ec50f848477290606961c"},{url:"image/bg_youlian.jpg",revision:"e3019c049ca399f65fafe5605135dd17"},{url:"image/bg.jpg",revision:"42a5bea226b7f472974dd9549f9c371c"},{url:"image/bg004.jpg",revision:"f0f01f6c1981d9d0029b0eed717d7571"},{url:"image/bg01.jpg",revision:"67fb8b85c304c9395fd6fb7afb8ea139"},{url:"image/index01.jpg",revision:"9f8e0f50301ec50f848477290606961c"},{url:"image/index02.png",revision:"350410220073308a8904e5a19ffd4a3c"},{url:"image/index03.jpg",revision:"5c6ba63c746b7d7cd4a9707a4a84cf96"},{url:"image/index04.jpg",revision:"54e380ed4ca7a16554db3178d148139c"},{url:"image/index05.jpg",revision:"4b28b772473a223b8848d14307074b82"},{url:"image/index06.jpg",revision:"d3487bd2ff50f5d3a6cb4d328804b7c5"},{url:"image/index07.jpg",revision:"d55adf4a710c97ae43f8dd639773d8da"},{url:"image/index08.jpg",revision:"08f1d0cbc7ae4ca40843b556c1187055"},{url:"image/index09.jpg",revision:"7da81e902badb3352ccf0e4d62543aed"},{url:"image/index10.jpg",revision:"8cadf8f91ce34b1f628aaf7516308463"},{url:"image/index11.jpg",revision:"27499b654984c3004bc4f668eb66a9d2"},{url:"image/index12.jpg",revision:"b4ef25d559ab3a40ec7e627a4c7fa27a"},{url:"image/index13.jpg",revision:"dd9e8fb6772a33c6d7099de6ece3f8e4"},{url:"image/index14.jpg",revision:"8cadf8f91ce34b1f628aaf7516308463"},{url:"image/index15.jpg",revision:"c7a9e25b2b782c0ea571e2b841439687"},{url:"image/index16.jpg",revision:"f9b186cf337bacfb5135f330cb576048"},{url:"image/index17.jpg",revision:"5e4fdbb952294ae56978f4639b4aa848"},{url:"image/index18.jpg",revision:"99c183bdf925f9cb8e0c7c319bb2145c"},{url:"image/index19.jpg",revision:"199b7d8421fc6ae924546b543b82620d"},{url:"image/index20.jpg",revision:"06825c8e883e710396f643502babd5f0"},{url:"image/index21.jpg",revision:"b2eb53533365a51ae211a68f4c51de74"},{url:"image/index22.jpg",revision:"7efd254030c239a6d83e66d61589f07a"},{url:"image/test_01.jpg",revision:"1426e3611a759c6d6663f76b9dab8ff5"},{url:"image/test_02.jpg",revision:"3a098ff29a4aba5e1337d86da24fc0e1"},{url:"image/wallhaven-3z2jrd_1920x1080.png",revision:"f9b186cf337bacfb5135f330cb576048"},{url:"image/wallhaven-l3d1gq_1920x1080.png",revision:"ee370062eeaeb37d89098787407c5059"},{url:"image/wallhaven-oxxw29_1920x1080.png",revision:"998bb0bde6db63d375514204390156ff"},{url:"image/wallhaven-r7zm17_1920x1080.png",revision:"43996070802fd7db50bc558c339f4a2c"},{url:"image/wallhaven-y89ok7_1920x1080.png",revision:"4c521fb5114cb93ebd8cc9ee464b56de"},{url:"image/wallhaven-ymz61d_1920x1080.png",revision:"7efd254030c239a6d83e66d61589f07a"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg_04.jpg",revision:"0b8ade4bbcc959677da86de533e8a2b2"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/test_03.jpg",revision:"b948daac0ffc7c85af31c4f20cd391db"},{url:"index.html",revision:"ae6e765982cdf0b5da0d95c7aab0032b"},{url:"js/DigitalRain.js",revision:"aa35f030ededaf99961d899f092fe611"},{url:"js/main.js",revision:"f5a7eac4a4b480329429a544ad1940cc"},{url:"js/search/algolia.js",revision:"5b3baea0c4ecb567c3e88c0fb635cc6d"},{url:"js/search/local-search.js",revision:"6e15c3089177950a627a1b496d9d5729"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"67b70ee8d0cf84790d33cc55a502d8f5"},{url:"link/index.html",revision:"ef1fd4a8d4aab1c6a80089eeb711a7bd"},{url:"page/2/index.html",revision:"5dbc8f82301b4fe4a39eb7386255221d"},{url:"page/3/index.html",revision:"fba9bce0f4681ab6e536489a328cab64"},{url:"tags/index.html",revision:"ffba8af66628baadd14a77dc9b9c204f"},{url:"tags/PHP/index.html",revision:"6cc8f87d51c68ec5e1845a4866074c21"},{url:"tags/Python/index.html",revision:"dddebe9edad2ba217c0b23af48c28c98"},{url:"tags/学习/index.html",revision:"101f6f6e3922a29955eb066e1cbc3854"},{url:"tags/学习计划/index.html",revision:"87c40f87251957b3372b9bcc9aa5a443"},{url:"tags/数据结构/index.html",revision:"be1cc8ebdee3a5b1f08424dff0dcdd5f"},{url:"tags/测试/index.html",revision:"b951391b77b78b91f958210389694e91"},{url:"tags/简历/index.html",revision:"bc04346c6886fbf150ca2ae439a14491"},{url:"tags/记录/index.html",revision:"248d43243795f25002697c6e2ed8edd6"},{url:"tags/随记/index.html",revision:"5534425c964d86db16fd0612991128a7"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
