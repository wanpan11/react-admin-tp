(()=>{var e,t,r,n,o={6576:(e,t,r)=>{"use strict";var n=r(79),o=r(2226),s=(r(2273),r(8424),r(7168),r(5836),r(6445),r(8666),r(5625),r(1165),r(1222),r(1470)),a=(r(8246),r(3772)),i=r(9006),d=r(2644),c=r(8825),l=r(4589);var u=r(6372),p=r.n(u),f=r(5250),m=function(e){var t=e.full;return(0,f.jsx)(c.Z,{className:p()((0,s.Z)({},"_wyNClZe2MFpYjHsxEkN",t)),children:(0,f.jsx)(l.Z,{size:"large",tip:"数据加载中..."})})};const g=(0,n.memo)(m);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function e(t){return t.map((function(t){var r=t.id,o=t.path,s=t.title,i=t.index,d=t.component,c=t.childrenList,l=void 0===c?[]:c,u={key:r};return d&&(u.element=(0,f.jsx)(n.Suspense,{fallback:(0,f.jsx)(g,{full:!0}),children:(0,f.jsx)(d,{title:s,children:l.length?(0,f.jsx)(a.j3,{}):null})})),i?(0,f.jsx)(a.AW,h(h({},u),{},{index:!0})):(0,f.jsx)(a.AW,h(h({},u),{},{path:o,children:l.length?e(l):void 0}))}))};const b=function(){return(0,f.jsx)(i.VK,{children:(0,f.jsx)(a.Z5,{children:v(d.Z)})})};var j=r(3209),O=r.n(j);O().mock(/company\/list/,(function(){return O().mock({code:1,data:{"list|5":[{"id|+1":0,category:0,name:"厂商",contact:"联系",mobile:"1235",updateTime:"updateTime"}]}})})),O().mock("/login",(function(e){return e.body}));var x=document.getElementById("root");(0,o.s)(x).render((0,f.jsx)(n.StrictMode,{children:(0,f.jsx)(b,{})}))},2644:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s}),r(5287),r(5836),r(7765),r(9336),r(475);var n=r(79),o=function(e){return(0,n.lazy)((function(){return r(5883)("./pages".concat(e))}))};const s=[{id:"0",path:"*",title:"登录",component:o("/login")},{id:"1",path:"/system",title:"",component:o("/system"),childrenList:[{id:"11",index:!0,title:"首页",component:o("/system/home")},{id:"12",path:"/system/data",title:"数据报表",childrenList:[{id:"121",title:"销售数据",index:!0,component:o("/system/data/report")}]},{id:"13",path:"/system/setting",title:"系统设置",childrenList:[{id:"131",title:"厂商管理",index:!0,component:o("/system/setting/company")},{id:"132",title:"开发管理",path:"/system/setting/dev",component:o("/system/setting/dev")}]}]}]},5883:(e,t,r)=>{var n={"./pages/login":[2402,566,414,728,476,402],"./pages/login/":[2402,566,414,728,476,402],"./pages/login/index":[2402,566,414,728,476,402],"./pages/login/index.module.less":[6913,913],"./pages/login/index.tsx":[2402,566,414,728,476,402],"./pages/system":[8419,566,728,761,261,419],"./pages/system/":[8419,566,728,761,261,419],"./pages/system/data/report":[74,566,414,74],"./pages/system/data/report.tsx":[74,566,414,74],"./pages/system/home":[718,566,414,718],"./pages/system/home/":[718,566,414,718],"./pages/system/home/index":[718,566,414,718],"./pages/system/home/index.tsx":[718,566,414,718],"./pages/system/index":[8419,566,728,761,261,419],"./pages/system/index.tsx":[8419,566,728,761,261,419],"./pages/system/setting/company":[6882,566,414,728,476,761,520,862],"./pages/system/setting/company.tsx":[6882,566,414,728,476,761,520,862],"./pages/system/setting/dev":[1382,566,414,382],"./pages/system/setting/dev.tsx":[1382,566,414,382]};function o(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r(o)))}o.keys=()=>Object.keys(n),o.id=5883,e.exports=o}},s={};function a(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}};return o[e].call(r.exports,r,r.exports,a),r.exports}a.m=o,e=[],a.O=(t,r,n,o)=>{if(!r){var s=1/0;for(l=0;l<e.length;l++){for(var[r,n,o]=e[l],i=!0,d=0;d<r.length;d++)(!1&o||s>=o)&&Object.keys(a.O).every((e=>a.O[e](r[d])))?r.splice(d--,1):(i=!1,o<s&&(s=o));if(i){e.splice(l--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,n,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);a.r(o);var s={};t=t||[null,r({}),r([]),r(r)];for(var i=2&n&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>s[t]=()=>e[t]));return s.default=()=>e,a.d(o,s),o},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>566===e?"f43aaa0e0a27820707a2.vendor.js":414===e?"20528eaf836729f9e605.vendor.js":728===e?"129c5686a6b925467922.vendor.js":476===e?"62e7b0ac4795170dc3b2.vendor.js":761===e?"8457b2fd19dfbf4bfc62.vendor.js":261===e?"6a9f85a41f9c775fa77f.vendor.js":520===e?"0af3afb1d4f7a8a3c399.vendor.js":"js/"+e+"_"+{74:"c54e001a5fea2abd54d4",382:"8216b70b9f559f5ab8a8",402:"dd49a4c0e587cd55b860",419:"80580c5db7dc5105a128",718:"4b4c842b9f5e04122af9",862:"3c356b5d4e54eb3e6bb8",913:"5377137bfc4fcc5ab752"}[e]+".js",a.miniCssF=e=>"styles/"+e+".css",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},a.l=(e,t,r,o)=>{if(n[e])n[e].push(t);else{var s,i;if(void 0!==r)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var l=d[c];if(l.getAttribute("src")==e){s=l;break}}s||(i=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=e),n[e]=[t];var u=(t,r)=>{s.onerror=s.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),i&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="/",(()=>{if("undefined"!=typeof document){var e={179:0};a.f.miniCss=(t,r)=>{e[t]?r.push(e[t]):0!==e[t]&&{402:1,419:1,862:1,913:1}[t]&&r.push(e[t]=(e=>new Promise(((t,r)=>{var n=a.miniCssF(e),o=a.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(a=r[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){var a;if((o=(a=s[n]).getAttribute("data-href"))===e||o===t)return a}})(n,o))return t();((e,t,r,n,o)=>{var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onerror=s.onload=r=>{if(s.onerror=s.onload=null,"load"===r.type)n();else{var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=a,d.request=i,s.parentNode.removeChild(s),o(d)}},s.href=t,document.head.appendChild(s)})(e,o,0,t,r)})))(t).then((()=>{e[t]=0}),(r=>{throw delete e[t],r})))}}})(),(()=>{var e={179:0};a.f.j=(t,r)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var s=a.p+a.u(t),i=new Error;a.l(s,(r=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,n[1](i)}}),"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[s,i,d]=r,c=0;if(s.some((t=>0!==e[t]))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(d)var l=d(a)}for(t&&t(r);c<s.length;c++)o=s[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(l)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i=a.O(void 0,[882],(()=>a(6576)));i=a.O(i)})();