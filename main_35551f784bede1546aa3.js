(()=>{var e,t,r,n,o={8765:(e,t,r)=>{"use strict";r.d(t,{b:()=>n,r:()=>o});var n="#4096ff",o={pageNum:1,pageSize:10}},7751:(e,t,r)=>{"use strict";var n=r(79),o=r(2226),s=(r(6067),r(882),r(8633),r(5036),r(4762),r(1172),r(7698),r(887),r(3699),r(2947),r(1470)),a=(r(7528),r(3772)),i=r(9006),c=r(2644),d=r(8825),l=r(4589);var u=r(6372),p=r.n(u),f=r(5250),m=function(e){var t=e.full;return(0,f.jsx)(d.Z,{className:p()((0,s.Z)({},"_wyNClZe2MFpYjHsxEkN",t)),children:(0,f.jsx)(l.Z,{size:"large",tip:"数据加载中..."})})};const g=(0,n.memo)(m);var h=r(8765),y=r(6328),v=(r(1763),r(281),r(319)),b=r(8024),j=r(5353),x=r(5),O=r(8830),k=r(9809),w=(r(7044),r(7150));const E=function(e){(0,x.Z)(o,e);var t,r,n=(t=o,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,k.Z)(t);if(r){var o=(0,k.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,O.Z)(this,e)});function o(){var e;(0,v.Z)(this,o);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return e=n.call.apply(n,[this].concat(r)),(0,s.Z)((0,j.Z)(e),"state",{hasError:!1}),e}return(0,b.Z)(o,[{key:"componentDidMount",value:function(){addEventListener("error",(function(e){w.Z.error({message:"ErrorBoundary 异常报错 ===>"+e.message})}),!1)}},{key:"render",value:function(){var e=this.state.hasError,t=this.props,r=t.children,n=t.errComponent;return e?n:r}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,errMsg:e}}}]),o}(n.Component),P=r.p+"images/64370b688f48ffdab0a4.png";var C=function(){return(0,f.jsxs)("div",{className:"ugrtGuOhGdTKVA39amDg",children:[(0,f.jsx)("img",{src:P,alt:""}),(0,f.jsx)("div",{children:"系统错误！！"})]})};const Z=(0,n.memo)(C);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S=function e(t){return t.map((function(t){var r=t.id,o=t.path,s=t.title,i=t.index,c=t.redirect,d=t.component,l=t.childrenList,u=void 0===l?[]:l,p={key:r};return d&&(p.element=(0,f.jsx)(n.Suspense,{fallback:(0,f.jsx)(g,{full:!0}),children:(0,f.jsx)(d,{title:s,redirect:c,children:u.length?(0,f.jsx)(a.j3,{}):null})})),i?(0,f.jsx)(a.AW,N(N({},p),{},{index:!0})):(0,f.jsx)(a.AW,N(N({},p),{},{path:o,children:u.length?e(u):void 0}))}))};const L=function(){return(0,f.jsx)(E,{errComponent:(0,f.jsx)(Z,{}),children:(0,f.jsx)(i.VK,{basename:"/react-admin-tp",children:(0,f.jsx)(y.ZP,{theme:{token:{colorPrimary:h.b}},children:(0,f.jsx)(a.Z5,{children:S(c.Z)})})})})};var T=r(3209),A=r.n(T);A().mock(/company\/list/,(function(){return A().mock({code:1,data:{"list|5":[{"id|+1":0,category:0,name:"厂商",contact:"联系",mobile:"1235",updateTime:"updateTime"}]}})})),A().mock("/login",(function(e){return{code:0,data:{token:"eqiopeuqueopqueopq2uepoueqou",userInfo:e.body}}}));var D=document.getElementById("root");(0,o.s)(D).render((0,f.jsx)(n.StrictMode,{children:(0,f.jsx)(L,{})}))},2644:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s}),r(8924),r(5036),r(3364),r(4932),r(9284);var n=r(79),o=function(e){return(0,n.lazy)((function(){return r(5883)("./pages".concat(e))}))};const s=[{id:"0",path:"/",title:"",component:o("/system"),childrenList:[{id:"11",index:!0,title:"首页",component:o("/system/home")},{id:"12",path:"/data",title:"数据报表",childrenList:[{id:"121",index:!0,title:"销售数据",component:o("/system/data/report")}]},{id:"13",path:"/setting/",title:"系统设置",childrenList:[{id:"132",path:"/setting/",title:"开发管理",childrenList:[{id:"1321",path:"/setting/",title:"参数配置",childrenList:[{id:"13211",index:!0,notMenu:!0,title:"",component:o("/system/setting/params")},{id:"13212",path:"/setting/detail",notMenu:!0,title:"详情",component:o("/system/setting/detail")}]},{id:"1322",path:"/setting/api",title:"接口配置",component:o("/system/setting/api")}]},{id:"131",path:"/setting/company",title:"厂商管理",component:o("/system/setting/company")}]}]},{id:"1",path:"/login",title:"登录",component:o("/login")},{id:"2",path:"*",title:"登录",component:o("/login")}]},5883:(e,t,r)=>{var n={"./pages/login":[4793,204,414,947,594,374,793],"./pages/login/":[4793,204,414,947,594,374,793],"./pages/login/index":[4793,204,414,947,594,374,793],"./pages/login/index.module.less":[9858,858],"./pages/login/index.tsx":[4793,204,414,947,594,374,793],"./pages/system":[9699,204,947,374,761,181,699],"./pages/system/":[9699,204,947,374,761,181,699],"./pages/system/data/report":[74,204,414,74],"./pages/system/data/report.tsx":[74,204,414,74],"./pages/system/home":[718,204,414,718],"./pages/system/home/":[718,204,414,718],"./pages/system/home/index":[718,204,414,718],"./pages/system/home/index.tsx":[718,204,414,718],"./pages/system/index":[9699,204,947,374,761,181,699],"./pages/system/index.tsx":[9699,204,947,374,761,181,699],"./pages/system/setting/api":[2774,204,414,774],"./pages/system/setting/api.tsx":[2774,204,414,774],"./pages/system/setting/company":[4255,204,414,947,594,761,827,255],"./pages/system/setting/company.tsx":[4255,204,414,947,594,761,827,255],"./pages/system/setting/detail":[4917,204,414,917],"./pages/system/setting/detail.tsx":[4917,204,414,917],"./pages/system/setting/params":[4948,204,414,948],"./pages/system/setting/params.tsx":[4948,204,414,948]};function o(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r(o)))}o.keys=()=>Object.keys(n),o.id=5883,e.exports=o}},s={};function a(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}};return o[e].call(r.exports,r,r.exports,a),r.exports}a.m=o,e=[],a.O=(t,r,n,o)=>{if(!r){var s=1/0;for(l=0;l<e.length;l++){for(var[r,n,o]=e[l],i=!0,c=0;c<r.length;c++)(!1&o||s>=o)&&Object.keys(a.O).every((e=>a.O[e](r[c])))?r.splice(c--,1):(i=!1,o<s&&(s=o));if(i){e.splice(l--,1);var d=n();void 0!==d&&(t=d)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,n,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);a.r(o);var s={};t=t||[null,r({}),r([]),r(r)];for(var i=2&n&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>s[t]=()=>e[t]));return s.default=()=>e,a.d(o,s),o},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>204===e?"7500698f8e60cf58e2b5.vendor.js":414===e?"5acd16a691d73115209c.vendor.js":947===e?"a87956cbecde5790adab.vendor.js":594===e?"45738ded7cc444d8d54a.vendor.js":374===e?"9b828308776c2938125e.vendor.js":761===e?"0bd0d5c158fdc4ec137e.vendor.js":181===e?"f726b3c37ac91e202d8f.vendor.js":827===e?"42c018bd32060a05a4f7.vendor.js":"js/"+e+"_"+{74:"63c63b3a8066e3ce08d5",255:"f6014d4074a62c89525e",699:"66970b7a6017c4cca60e",718:"5cf4e1f8e1611ced2783",774:"a69b43ce53ac48eb45c9",793:"34b7c61a94339a925c8e",858:"dd71da405b1fb4ab97e7",917:"4e0f76cb4114a1187298",948:"c60b2f8a274eef100a05"}[e]+".js",a.miniCssF=e=>"styles/"+e+".css",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},a.l=(e,t,r,o)=>{if(n[e])n[e].push(t);else{var s,i;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==e){s=l;break}}s||(i=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=e),n[e]=[t];var u=(t,r)=>{s.onerror=s.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),i&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="https://wanpan11.github.io/react-admin-tp/",(()=>{if("undefined"!=typeof document){var e={179:0};a.f.miniCss=(t,r)=>{e[t]?r.push(e[t]):0!==e[t]&&{255:1,699:1,793:1,858:1}[t]&&r.push(e[t]=(e=>new Promise(((t,r)=>{var n=a.miniCssF(e),o=a.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(a=r[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){var a;if((o=(a=s[n]).getAttribute("data-href"))===e||o===t)return a}})(n,o))return t();((e,t,r,n,o)=>{var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onerror=s.onload=r=>{if(s.onerror=s.onload=null,"load"===r.type)n();else{var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=i,s.parentNode.removeChild(s),o(c)}},s.href=t,document.head.appendChild(s)})(e,o,0,t,r)})))(t).then((()=>{e[t]=0}),(r=>{throw delete e[t],r})))}}})(),(()=>{var e={179:0};a.f.j=(t,r)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var s=a.p+a.u(t),i=new Error;a.l(s,(r=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,n[1](i)}}),"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[s,i,c]=r,d=0;if(s.some((t=>0!==e[t]))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(c)var l=c(a)}for(t&&t(r);d<s.length;d++)o=s[d],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(l)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i=a.O(void 0,[130],(()=>a(7751)));i=a.O(i)})();