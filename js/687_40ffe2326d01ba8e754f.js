"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[687],{3687:(e,n,t)=>{t.r(n),t.d(n,{default:()=>H});var r=t(1470),i=t(7231),c=(t(5036),t(7698),t(90),t(1127),t(7766),t(2349),t(8633),t(7528),t(6067),t(882),t(4762),t(1172),t(887),t(3699),t(2947),t(79)),s=t(8825),l=t(3772),o=t(9006),a=t(9617),u=(t(8003),t(5199),t(5491),t(6372)),d=t.n(u),h=t(5250),p=function(e){var n=e.routerMap,t=void 0===n?{}:n,r=(0,l.TH)().pathname,i=(0,l.s0)(),s=t[Object.keys(t).find((function(e){return e.startsWith(r)}))||""],o=(0,c.useMemo)((function(){var e={};return Object.keys(t).map((function(n){var r=t[n].split("/");e[r[r.length-1].trim()]=n})),e}),[t]);return(0,h.jsx)("div",{className:"h-58px",flex:"~ items-center",text:"14px neutral-400",children:s.split("/").map((function(e,n,t){var r=t.length-1===n,c=o[e.trim()];return(0,h.jsxs)("span",{children:[(0,h.jsx)("span",{className:d()({"cursor-pointer text-primary":!r&&c}),onClick:function(){i(c)},children:e}),r?null:(0,h.jsx)("span",{m:"t-0 b-0 6px",children:"/"})]},e)}))})};const v=(0,c.memo)(p);var f=t(8858),m=(0,c.createContext)({isLogin:f.Z.isLogin});m.displayName="MobxContext";const j=m;var x=t(9925),g=t(5323),b=t(7191),y=t(6187);var k=s.Z.Header;const O=function(e){var n=e.tabId,t=e.tabList,i=(0,l.s0)(),c=[{key:"1",label:(0,h.jsx)("div",{className:"EdF97wikBKSjUm5eOYcW",onClick:function(){localStorage.clear(),f.Z.setLogin(!1),i("/login")},children:"退出登录"})}];return(0,h.jsxs)(k,{className:"BBocqG8ga8REKXScIPgO",children:[(0,h.jsxs)("div",{className:"ja9HtPYs2pWHDtUwExiV",children:[(0,h.jsxs)("h1",{className:"OzUSkI_K7wZkE6azDnJr",children:[(0,h.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",alt:"logo"}),"管理系统"]}),t.map((function(e){return(0,h.jsxs)("div",{className:d()("r6PsesT1Swk8B0YJFYCP",(0,r.Z)({},"KbmCdHtUH4JIgWrPTlto",e.key===n)),children:[(0,h.jsx)("div",{onClick:function(){var n;n=e.path,i(n)},children:e.label}),(0,h.jsx)("div",{className:"Ir3LKO1ONJpH8AzpilYv"})]},e.key)}))]}),(0,h.jsx)("div",{className:"Plb73jE99IZSQ0M8LYaH",children:(0,h.jsx)(g.Z,{menu:{items:c},placement:"bottomLeft",arrow:{pointAtCenter:!0},children:(0,h.jsx)(b.C,{icon:(0,h.jsx)(y.Z,{})})})})]})};var Z=t(3121),P=s.Z.Sider;const w=function(e){var n=e.menu,t=e.selectKey,r=(0,c.useState)([]),s=(0,i.Z)(r,2),l=s[0],o=s[1],a=(0,c.useMemo)((function(){var e;return t||(n[0].children?null===(e=n[0].children[0])||void 0===e?void 0:e.key:n[0].key)}),[n,t]);return(0,c.useEffect)((function(){var e=[];n.forEach((function(n){var t;null!==(t=n.children)&&void 0!==t&&t.length&&e.push("".concat(n.key))})),o(e)}),[n]),(0,h.jsxs)(P,{theme:"light",width:160,children:[(0,h.jsx)("div",{h:"28px"}),(0,h.jsx)(Z.Z,{mode:"inline",openKeys:l,selectedKeys:["".concat(a)],items:n,onOpenChange:function(e){o(e)}})]})};function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var E=s.Z.Content;const K=(0,a.Pi)((function(e){var n=e.children,t=(0,l.TH)().pathname,r=(0,l.s0)(),a=f.Z.routerMap,u=f.Z.isLogin,d=f.Z.getRouteMenu.menu,p=(0,c.useMemo)((function(){var e,n,r;if(!d.length)return["",""];var i="",c="";return function e(n,r){n.length<0||n.forEach((function(n){var s,l;t.includes(n.path)&&(c=r||"".concat(n.key),null!==(l=n.children)&&void 0!==l&&l.length||(i=r?"".concat(n.key):""));var o="";null!==(s=n.children)&&void 0!==s&&s.length&&(o="".concat(r?r+x.Q5+n.key:n.key),e(n.children,o))}))}(d),[(null===(e=c)||void 0===e||null===(n=e.split(x.Q5))||void 0===n?void 0:n[0])||"".concat(null===(r=d[0])||void 0===r?void 0:r.key),"".concat(i)]}),[t,d]),m=(0,i.Z)(p,2),g=m[0],b=m[1],y=(0,c.useMemo)((function(){var e,n;return g?function e(n){return n.map((function(n){var t=n.path,r=n.children;return N(N({},n),{},{label:null!=r&&r.length?n.label:(0,h.jsxs)(o.rU,{to:t,children:[" ",n.label]}),children:null!=r&&r.length?e(r):void 0})}))}((null===(e=d.filter((function(e){return e.key===g})))||void 0===e||null===(n=e[0])||void 0===n?void 0:n.children)||[]):[]}),[g,d]);return(0,c.useEffect)((function(){u||r("/login")}),[u,r]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(O,{tabId:g,tabList:d}),(0,h.jsxs)(s.Z,{className:"iFx9QWuN3rkDbruHxKnd",children:[y.length?(0,h.jsx)(w,{menu:y,selectKey:b}):null,(0,h.jsx)(s.Z,{children:(0,h.jsxs)(E,{m:"t-0 b-0 16px",children:[(0,h.jsx)(v,{routerMap:a}),(0,h.jsx)("div",{className:"BGCUdPTE8t2U1QxX0Q91",children:(0,h.jsx)(j.Provider,{value:{isLogin:f.Z.isLogin},children:n})})]})})]})]})})),H=function(e){var n=e.children;return(0,h.jsx)(K,{children:n})}}}]);