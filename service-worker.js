if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,d,r)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return a;case"module":return c;default:return e(i)}}))).then((e=>{const i=r(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/11/12/My-Gallery/index.html",revision:"f3117661b837a044f8e114db6a222c34"},{url:"2021/11/13/第一篇文章/index.html",revision:"afa4d05f686a87ab9d6d583a09ee0877"},{url:"2021/11/13/第一篇文章/test_01.jpg",revision:"1426e3611a759c6d6663f76b9dab8ff5"},{url:"2021/11/29/3-全国汽车销量可视化/index.html",revision:"bf0cdf4249e5e2487629b5c21d8da8d3"},{url:"2021/11/29/4-运营商流失用户的分析与预测/index.html",revision:"96aab5b234cc175ddc8c24c48ab817d8"},{url:"2021/11/29/航空公司客户价值分析/index.html",revision:"68d8f6857a4e46365abdda30a31610ae"},{url:"2021/11/29/财政收入预测分析/image-20211129125338196.jpg",revision:"436f13d45dd55c6577cc74cb976ff1e5"},{url:"2021/11/29/财政收入预测分析/image-20211129125657821.png",revision:"3fd0803c257216a3304725f8c83e9b26"},{url:"2021/11/29/财政收入预测分析/image-20211129213021543.png",revision:"2e4c87373fe53a421ec81b693647d31a"},{url:"2021/11/29/财政收入预测分析/index.html",revision:"e38757b5d9a5f7640f0d108f7c00c002"},{url:"2021/11/30/php连接数据库的增删改查/index.html",revision:"1bd2c755f13ffa8a6525d92b49fbb19e"},{url:"2021/12/07/学习计划/index.html",revision:"4cbe5066ffde51992b47a534448711fc"},{url:"2021/12/11/测试一/index.html",revision:"82fa2d416be8c520334250375ea15410"},{url:"2021/12/11/测试三/index.html",revision:"7c704fabe0f8bcdec38d1fb89f63bd06"},{url:"2021/12/11/测试二/index.html",revision:"e6adec454d73aac5b1a2333777146dfd"},{url:"2021/12/11/测试四/index.html",revision:"67f9a7858cce0abb78e16b973df4db0a"},{url:"2021/12/14/随记/index.html",revision:"f6dc61cf161f37c5697f2ddc317665d0"},{url:"2021/12/23/PHP/index.html",revision:"cd17de593b657dc4e99c0f1689f401ea"},{url:"2022/12/19/数据结构/index.html",revision:"1c24488d0c6e53949764a9592795bf55"},{url:"2023/01/05/记录/index.html",revision:"ca8ccf2773b2c38d572161f22a3007e0"},{url:"2023/01/18/Linux学习笔记/index.html",revision:"3403dd976c4854fa63f7f64178a8498d"},{url:"2023/01/18/简历/index.html",revision:"92572e26730f507b8826d447d969bd1c"},{url:"archives/2021/11/index.html",revision:"14a43e81da2946e9e588780de44e62a8"},{url:"archives/2021/12/index.html",revision:"977e56fdb9796c320d97220144612c80"},{url:"archives/2021/index.html",revision:"e5272dca0ea6592dae4eb298c694c71d"},{url:"archives/2021/page/2/index.html",revision:"ba93b7a9e89253a0feb48922e5c85c6a"},{url:"archives/2022/12/index.html",revision:"e888865301d2db0e8e3b15b744f6408e"},{url:"archives/2022/index.html",revision:"e9f246e3dc864ecdcaaeeca55a64a3aa"},{url:"archives/2023/01/index.html",revision:"39ffaad0bd754e0059d1ff5cea05e878"},{url:"archives/2023/index.html",revision:"07866f4649893a6fd763df86a581d8b3"},{url:"archives/index.html",revision:"64a900bd915ae0b4361d9330e4d60274"},{url:"archives/page/2/index.html",revision:"f3c9f4535b5c0199c2b0adb497d6781d"},{url:"categories/index.html",revision:"0f22469ab919333949ac0ef4312c55fa"},{url:"categories/test/index.html",revision:"18dac2c2a9e7f532bf7f4d127b4a7304"},{url:"categories/学习/index.html",revision:"984de6102ca07cd488cab2dafbb5c3a4"},{url:"categories/测试/index.html",revision:"8239c4a88ebd6d852322d3440dc675ad"},{url:"categories/记录/index.html",revision:"f0fd14aeb8bb0fcb3867c33f6df14994"},{url:"categories/随记/index.html",revision:"402bfe18470714dd9235f240da5e036c"},{url:"css/index.css",revision:"74da870677b41809ea6da2c6f6891181"},{url:"css/mycss.css",revision:"c5eb8b70df112f62e17bfdcc1d9e34f5"},{url:"css/var.css",revision:"d9967998aa0cbdc94d69ee6cfc9f9ca6"},{url:"image/article20230118-2.jpg",revision:"86637da83b2a5303ccb6f61af62bddbe"},{url:"image/article20230118.jpg",revision:"fc86fded0f7bd27e4f7d2657a4342810"},{url:"image/bg_biaoqian.jpg",revision:"7a23cf1a517a007b4d52e975b72fc4cc"},{url:"image/bg_leixing.jpg",revision:"86f337937a6f0317b90420255c1547e5"},{url:"image/bg_shijian.jpg",revision:"9f8e0f50301ec50f848477290606961c"},{url:"image/bg_youlian.jpg",revision:"e3019c049ca399f65fafe5605135dd17"},{url:"image/bg.jpg",revision:"42a5bea226b7f472974dd9549f9c371c"},{url:"image/bg004.jpg",revision:"f0f01f6c1981d9d0029b0eed717d7571"},{url:"image/bg01.jpg",revision:"67fb8b85c304c9395fd6fb7afb8ea139"},{url:"image/index01.jpg",revision:"9f8e0f50301ec50f848477290606961c"},{url:"image/index02.png",revision:"350410220073308a8904e5a19ffd4a3c"},{url:"image/index03.jpg",revision:"5c6ba63c746b7d7cd4a9707a4a84cf96"},{url:"image/index04.jpg",revision:"54e380ed4ca7a16554db3178d148139c"},{url:"image/index05.jpg",revision:"4b28b772473a223b8848d14307074b82"},{url:"image/index06.jpg",revision:"d3487bd2ff50f5d3a6cb4d328804b7c5"},{url:"image/index07.jpg",revision:"d55adf4a710c97ae43f8dd639773d8da"},{url:"image/index08.jpg",revision:"08f1d0cbc7ae4ca40843b556c1187055"},{url:"image/index09.jpg",revision:"7da81e902badb3352ccf0e4d62543aed"},{url:"image/index10.jpg",revision:"8cadf8f91ce34b1f628aaf7516308463"},{url:"image/index11.jpg",revision:"27499b654984c3004bc4f668eb66a9d2"},{url:"image/index12.jpg",revision:"b4ef25d559ab3a40ec7e627a4c7fa27a"},{url:"image/index13.jpg",revision:"dd9e8fb6772a33c6d7099de6ece3f8e4"},{url:"image/index14.jpg",revision:"8cadf8f91ce34b1f628aaf7516308463"},{url:"image/index15.jpg",revision:"c7a9e25b2b782c0ea571e2b841439687"},{url:"image/index16.jpg",revision:"f9b186cf337bacfb5135f330cb576048"},{url:"image/index17.jpg",revision:"5e4fdbb952294ae56978f4639b4aa848"},{url:"image/index18.jpg",revision:"99c183bdf925f9cb8e0c7c319bb2145c"},{url:"image/index19.jpg",revision:"199b7d8421fc6ae924546b543b82620d"},{url:"image/index20.jpg",revision:"06825c8e883e710396f643502babd5f0"},{url:"image/index21.jpg",revision:"b2eb53533365a51ae211a68f4c51de74"},{url:"image/index22.jpg",revision:"7efd254030c239a6d83e66d61589f07a"},{url:"image/test_01.jpg",revision:"1426e3611a759c6d6663f76b9dab8ff5"},{url:"image/test_02.jpg",revision:"3a098ff29a4aba5e1337d86da24fc0e1"},{url:"image/wallhaven-3z2jrd_1920x1080.png",revision:"f9b186cf337bacfb5135f330cb576048"},{url:"image/wallhaven-l3d1gq_1920x1080.png",revision:"ee370062eeaeb37d89098787407c5059"},{url:"image/wallhaven-oxxw29_1920x1080.png",revision:"998bb0bde6db63d375514204390156ff"},{url:"image/wallhaven-r7zm17_1920x1080.png",revision:"43996070802fd7db50bc558c339f4a2c"},{url:"image/wallhaven-y89ok7_1920x1080.png",revision:"4c521fb5114cb93ebd8cc9ee464b56de"},{url:"image/wallhaven-yjk6ml_1920x1080.png",revision:"ed256386db153628d2eec7404fa674df"},{url:"image/wallhaven-ymz61d_1920x1080.png",revision:"7efd254030c239a6d83e66d61589f07a"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg_04.jpg",revision:"0b8ade4bbcc959677da86de533e8a2b2"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/test_03.jpg",revision:"b948daac0ffc7c85af31c4f20cd391db"},{url:"index.html",revision:"f6e03dd96b1b4563e2ce296aae3f3620"},{url:"js/DigitalRain.js",revision:"aa35f030ededaf99961d899f092fe611"},{url:"js/main.js",revision:"f5a7eac4a4b480329429a544ad1940cc"},{url:"js/search/algolia.js",revision:"5b3baea0c4ecb567c3e88c0fb635cc6d"},{url:"js/search/local-search.js",revision:"6e15c3089177950a627a1b496d9d5729"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"67b70ee8d0cf84790d33cc55a502d8f5"},{url:"link/index.html",revision:"56b2b3aac2108a9161858fffad95f81c"},{url:"page/2/index.html",revision:"8d7a1c53875adc2198c0e6ff74429909"},{url:"page/3/index.html",revision:"6acbf5ee9438858be7720d1c53351971"},{url:"tags/index.html",revision:"2cfbc8bfcbe6dd3c6fe0b765af96c0f7"},{url:"tags/PHP/index.html",revision:"039f2b41db24fa1fbde137a4237663ce"},{url:"tags/Python/index.html",revision:"17858e656e12608e83ee309283300f35"},{url:"tags/学习/index.html",revision:"2f8e05947b5e835dc80d9b92e19d48e6"},{url:"tags/学习计划/index.html",revision:"fdf22528b92f8f29f0fd2fdca78c0c1a"},{url:"tags/数据结构/index.html",revision:"beff929fc24c87af1de100085cc827a1"},{url:"tags/测试/index.html",revision:"e4c36385dadb4aa346ad88d9054b0de5"},{url:"tags/记录/index.html",revision:"bc7e8e20354717e3e335727f0886c183"},{url:"tags/随记/index.html",revision:"9079d076cc77b39bd330e09d4e75148d"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
