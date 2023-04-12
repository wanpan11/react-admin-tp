"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[235],{9235:(t,e,n)=>{n.r(e),n.d(e,{default:()=>C}),n(5836),n(8666),n(5646),n(8246),n(7168);var i=n(79),r=n(3772),s=n(8825),a=n(6328),l=n(3121);var c=n(5250),o=function(t){var e=t.routerMap[(0,r.TH)().pathname];return(0,c.jsx)("div",{className:"i_RZ7OqLxtf0QtsMx9Lg",children:(0,c.jsx)("span",{children:e})})};const d=(0,i.memo)(o);var h=n(9006),u=n(2423),v=(0,i.createContext)(u.Z);v.displayName="MobxContext";const f=v;var x=n(1470),p=n(5323),m=n(7191),g=n(6187);var j=n(6372),L=n.n(j),Z=s.Z.Header;const b=function(t){var e=t.tabId,n=t.tabList,i=(0,r.s0)(),s=[{key:"1",label:(0,c.jsx)("div",{className:"EdF97wikBKSjUm5eOYcW",onClick:function(){localStorage.clear(),u.Z.setLogin(!1),i("/login")},children:"退出登录"})}];return(0,c.jsxs)(Z,{className:"BBocqG8ga8REKXScIPgO",children:[(0,c.jsxs)("div",{className:"ja9HtPYs2pWHDtUwExiV",children:[(0,c.jsxs)("h1",{className:"OzUSkI_K7wZkE6azDnJr",children:[(0,c.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",alt:"logo"}),"管理系统"]}),n.map((function(t){return(0,c.jsxs)("div",{className:L()("r6PsesT1Swk8B0YJFYCP",(0,x.Z)({},"KbmCdHtUH4JIgWrPTlto",t.id===e)),children:[(0,c.jsx)("div",{onClick:function(){var e;e=t.path,i(e)},children:t.label}),(0,c.jsx)("div",{className:"Ir3LKO1ONJpH8AzpilYv"})]},t.id)}))]}),(0,c.jsx)("div",{className:"Plb73jE99IZSQ0M8LYaH",children:(0,c.jsx)(p.Z,{menu:{items:s},placement:"bottomLeft",arrow:{pointAtCenter:!0},children:(0,c.jsx)(m.C,{icon:(0,c.jsx)(g.Z,{})})})})]})};var k=n(9617),y=s.Z.Content,K=s.Z.Sider;const N=(0,k.Pi)((function(t){var e=t.children,n=(0,r.TH)().pathname,o=(0,r.s0)(),v=u.Z.tabList,x=u.Z.routerMap,p=u.Z.isLogin,m=(0,i.useMemo)((function(){var t,e="";!function t(i){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";i.forEach((function(i){var s=i.childrenList,a=void 0===s?[]:s,l=i.path,c=i.id;l===n&&(e=r?r+"&"+c:c);var o="";a.length&&(o=r?"".concat(r,"_").concat(c):"".concat(c),t(a,o))}))}(v);var i=null===(t=e)||void 0===t?void 0:t.split("&");return{topKey:i[0],leftKey:i[i.length-1]}}),[n,v]),g=m.topKey,j=m.leftKey,L=(0,i.useMemo)((function(){var t,e;return g?function t(e){return e.map((function(e){return{label:e.childrenList?e.label:(0,c.jsx)(h.rU,{to:e.path,children:e.label}),path:e.path,key:e.id,children:e.childrenList?t(e.childrenList):void 0}}))}((null===(t=v.filter((function(t){return t.id===g})))||void 0===t||null===(e=t[0])||void 0===e?void 0:e.childrenList)||[]):[]}),[g,v]);return(0,i.useEffect)((function(){p||o("/login")}),[p,o]),(0,c.jsxs)(a.ZP,{theme:{token:{colorPrimary:"#4096ff"}},children:[(0,c.jsx)(b,{tabId:g,tabList:v}),(0,c.jsxs)(s.Z,{className:"iFx9QWuN3rkDbruHxKnd",children:[L.length?(0,c.jsxs)(K,{theme:"light",children:[(0,c.jsx)("div",{style:{height:"28px"}}),(0,c.jsx)(l.Z,{selectedKeys:[j],mode:"inline",items:L})]}):null,(0,c.jsx)(s.Z,{children:(0,c.jsxs)(y,{style:{margin:"0 16px"},children:[(0,c.jsx)(d,{routerMap:x}),(0,c.jsx)("div",{className:"BGCUdPTE8t2U1QxX0Q91",children:(0,c.jsx)(f.Provider,{value:u.Z,children:e})})]})})]})]})})),C=function(t){var e=t.children;return(0,c.jsx)(N,{children:e})}},2423:(t,e,n)=>{n.d(e,{Z:()=>c});var i=n(319),r=n(8024),s=n(1470),a=(n(8246),n(9619)),l=n(2644);n(5836),n(8666);const c=new(function(){function t(){(0,i.Z)(this,t),(0,s.Z)(this,"isLogin",!!localStorage.getItem("token")),(0,a.ky)(this)}return(0,r.Z)(t,[{key:"tabList",get:function(){return function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.map((function(e){var i=e.title,r=e.path,s=e.id,a=e.index,l=e.childrenList,c=void 0===l?[]:l;return{id:s,path:a?n:r,label:i,childrenList:c.length?t(c,r):void 0}}))}([l.Z[0]])[0].childrenList}},{key:"routerMap",get:function(){var t,e=this.tabList;return t={},function e(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";n.forEach((function(n){var r,s=n.path,a=n.label,l=n.childrenList,c=void 0===l?[]:l;r=i+a,t[s]=r,c.length&&e(c,a?r+" / ":"")}))}(e),t}},{key:"setLogin",value:function(t){this.isLogin=t}}]),t}())}}]);