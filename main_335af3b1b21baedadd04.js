(()=>{var e,t,r,n,o={2821:(e,t,r)=>{"use strict";var n=r(79),o=r(2226),s=(r(2273),r(8424),r(7168),r(5836),r(6445),r(8666),r(5625),r(1165),r(1222),r(1470)),i=(r(8246),r(3772)),a=r(9006),c=r(2644),d=r(8825),l=r(4589);var p=r(6372),u=r.n(p),f=r(5250),m=function(e){var t=e.full;return(0,f.jsx)(d.Z,{className:u()((0,s.Z)({},"_wyNClZe2MFpYjHsxEkN",t)),children:(0,f.jsx)(l.Z,{size:"large",tip:"数据加载中..."})})};const g=(0,n.memo)(m);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function e(t){return t.map((function(t){var r=t.id,o=t.path,s=t.title,a=t.index,c=t.component,d=t.childrenList,l=void 0===d?[]:d,p={key:r};return c&&(p.element=(0,f.jsx)(n.Suspense,{fallback:(0,f.jsx)(g,{full:!0}),children:(0,f.jsx)(c,{title:s,children:l.length?(0,f.jsx)(i.j3,{}):null})})),a?(0,f.jsx)(i.AW,y(y({},p),{},{index:!0})):(0,f.jsx)(i.AW,y(y({},p),{},{path:o,children:l.length?e(l):void 0}))}))};const v=function(){return(0,f.jsx)(a.VK,{basename:"/react-admin-tp",children:(0,f.jsx)(i.Z5,{children:b(c.Z)})})};var j=r(3209),O=r.n(j);O().mock(/company\/list/,(function(){return O().mock({code:1,data:{"list|5":[{"id|+1":0,category:0,name:"厂商",contact:"联系",mobile:"1235",updateTime:"updateTime"}]}})})),O().mock("/login",(function(e){return{code:0,data:{token:"eqiopeuqueopqueopq2uepoueqou",userInfo:e.body}}}));var x=document.getElementById("root");(0,o.s)(x).render((0,f.jsx)(n.StrictMode,{children:(0,f.jsx)(v,{})}))},2644:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s}),r(5287),r(5836),r(7765),r(9336),r(475);var n=r(79),o=function(e){return(0,n.lazy)((function(){return r(5883)("./pages".concat(e))}))};const s=[{id:"1",path:"/",title:"",component:o("/system"),childrenList:[{id:"11",index:!0,title:"首页",component:o("/system/home")},{id:"12",path:"/data",title:"数据报表",childrenList:[{id:"121",title:"销售数据",index:!0,component:o("/system/data/report")}]},{id:"13",path:"/setting",title:"系统设置",childrenList:[{id:"131",title:"厂商管理",index:!0,component:o("/system/setting/company")},{id:"132",title:"开发管理",path:"/setting/dev",component:o("/system/setting/dev")}]}]},{id:"0",path:"/login",title:"登录",component:o("/login")},{id:"2",path:"*",title:"登录",component:o("/login")}]},5883:(e,t,r)=>{var n={"./pages/login":[4793,566,414,728,476,619,793],"./pages/login/":[4793,566,414,728,476,619,793],"./pages/login/index":[4793,566,414,728,476,619,793],"./pages/login/index.module.less":[9858,858],"./pages/login/index.tsx":[4793,566,414,728,476,619,793],"./pages/system":[9235,566,728,619,761,261,235],"./pages/system/":[9235,566,728,619,761,261,235],"./pages/system/data/report":[74,566,414,74],"./pages/system/data/report.tsx":[74,566,414,74],"./pages/system/home":[718,566,414,718],"./pages/system/home/":[718,566,414,718],"./pages/system/home/index":[718,566,414,718],"./pages/system/home/index.tsx":[718,566,414,718],"./pages/system/index":[9235,566,728,619,761,261,235],"./pages/system/index.tsx":[9235,566,728,619,761,261,235],"./pages/system/setting/company":[4255,566,414,728,476,761,91,255],"./pages/system/setting/company.tsx":[4255,566,414,728,476,761,91,255],"./pages/system/setting/dev":[1382,566,414,382],"./pages/system/setting/dev.tsx":[1382,566,414,382]};function o(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r(o)))}o.keys=()=>Object.keys(n),o.id=5883,e.exports=o}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}};return o[e].call(r.exports,r,r.exports,i),r.exports}i.m=o,e=[],i.O=(t,r,n,o)=>{if(!r){var s=1/0;for(l=0;l<e.length;l++){for(var[r,n,o]=e[l],a=!0,c=0;c<r.length;c++)(!1&o||s>=o)&&Object.keys(i.O).every((e=>i.O[e](r[c])))?r.splice(c--,1):(a=!1,o<s&&(s=o));if(a){e.splice(l--,1);var d=n();void 0!==d&&(t=d)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,n,o]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var s={};t=t||[null,r({}),r([]),r(r)];for(var a=2&n&&e;"object"==typeof a&&!~t.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach((t=>s[t]=()=>e[t]));return s.default=()=>e,i.d(o,s),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>793===e?"js/793_773db57b062bdb7cb52a.js":858===e?"js/858_dd71da405b1fb4ab97e7.js":235===e?"js/235_9ef28bfeea4930cecf31.js":74===e?"js/74_c54e001a5fea2abd54d4.js":718===e?"js/718_4b4c842b9f5e04122af9.js":255===e?"js/255_960a79fc741e01c4aa40.js":382===e?"js/382_8216b70b9f559f5ab8a8.js":{91:"f76950348a1ef91b9fae",261:"f09abb19b90084993a9c",414:"20528eaf836729f9e605",476:"4b627aac204fddf0cf83",566:"f43aaa0e0a27820707a2",619:"e7a047380ab803abc732",728:"b467a962c1e1f37a348c",761:"8457b2fd19dfbf4bfc62"}[e]+".vendor.js",i.miniCssF=e=>"styles/"+e+".css",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},i.l=(e,t,r,o)=>{if(n[e])n[e].push(t);else{var s,a;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==e){s=l;break}}s||(a=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=e),n[e]=[t];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(u);var o=n[e];if(delete n[e],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},u=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),a&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="https://wanpan11.github.io/react-admin-tp/",(()=>{if("undefined"!=typeof document){var e={179:0};i.f.miniCss=(t,r)=>{e[t]?r.push(e[t]):0!==e[t]&&{235:1,255:1,793:1,858:1}[t]&&r.push(e[t]=(e=>new Promise(((t,r)=>{var n=i.miniCssF(e),o=i.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){var i;if((o=(i=s[n]).getAttribute("data-href"))===e||o===t)return i}})(n,o))return t();((e,t,r,n,o)=>{var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onerror=s.onload=r=>{if(s.onerror=s.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=a,s.parentNode.removeChild(s),o(c)}},s.href=t,document.head.appendChild(s)})(e,o,0,t,r)})))(t).then((()=>{e[t]=0}),(r=>{throw delete e[t],r})))}}})(),(()=>{var e={179:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var s=i.p+i.u(t),a=new Error;i.l(s,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",a.name="ChunkLoadError",a.type=o,a.request=s,n[1](a)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[s,a,c]=r,d=0;if(s.some((t=>0!==e[t]))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(c)var l=c(i)}for(t&&t(r);d<s.length;d++)o=s[d],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(l)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=i.O(void 0,[882],(()=>i(2821)));a=i.O(a)})();