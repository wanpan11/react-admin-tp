"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[578],{3578:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Ne});var n=r(79),M=r(8825),a=r(3772),i=r(9006),o=r(9617),s=r(6372),c=r.n(s),l=r(5250);const g=({routerMap:e={}})=>{const{pathname:t}=(0,a.TH)(),r=(0,a.s0)(),M=e[Object.keys(e).find((e=>e.startsWith(t)))||""],i=(0,n.useMemo)((()=>{const t={};return Object.keys(e).map((r=>{const n=e[r].split("/");t[n[n.length-1].trim()]=r})),t}),[e]);return(0,l.jsx)("div",{className:"flex h-14 items-center pl-2 text-neutral-400",children:M.split("/").map(((e,t,n)=>{const M=e.trim(),a=n.length-1===t,o=i[M];return(0,l.jsxs)("span",{children:[(0,l.jsx)("span",{className:c()({"cursor-pointer text-primary":!a&&o}),onClick:()=>{r(o)},children:M}),a?null:(0,l.jsx)("span",{className:"ml-2 mr-2",children:"/"})]},e)}))})},N=(0,n.memo)(g);var j=r(6942);const u=(0,n.createContext)({isLogin:j.Z.isLogin,userInfo:j.Z.userInfo});u.displayName="MobxContext";const D=u;var I=r(4716),z=r(5323),T=r(5609),d=r(6834),y=r(1537),m=r(5062),x=r(2278);const p=n.createContext("default"),A=e=>{let{children:t,size:r}=e;const M=n.useContext(p);return n.createElement(p.Provider,{value:r||M},t)},O=p;var L=r(8320),h=r(5738),C=r(5817);const E=e=>{const{antCls:t,componentCls:r,iconCls:n,avatarBg:M,avatarColor:a,avatarSizeBase:i,avatarSizeLG:o,avatarSizeSM:s,avatarFontSizeBase:c,avatarFontSizeLG:l,avatarFontSizeSM:g,borderRadius:N,borderRadiusLG:j,borderRadiusSM:u,lineWidth:D,lineType:I}=e,z=(e,t,M)=>({width:e,height:e,lineHeight:e-2*D+"px",borderRadius:"50%",[`&${r}-square`]:{borderRadius:M},[`${r}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${r}-icon`]:{fontSize:t,[`> ${n}`]:{margin:0}}});return{[r]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,C.Wf)(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:a,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:M,border:`${D}px ${I} transparent`,"&-image":{background:"transparent"},[`${t}-image-img`]:{display:"block"}}),z(i,c,N)),{"&-lg":Object.assign({},z(o,l,j)),"&-sm":Object.assign({},z(s,g,u)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},w=e=>{const{componentCls:t,avatarGroupBorderColor:r,avatarGroupSpace:n}=e;return{[`${t}-group`]:{display:"inline-flex",[`${t}`]:{borderColor:r},"> *:not(:first-child)":{marginInlineStart:n}}}},f=(0,L.Z)("Avatar",(e=>{const{colorTextLightSolid:t,controlHeight:r,controlHeightLG:n,controlHeightSM:M,fontSize:a,fontSizeLG:i,fontSizeXL:o,fontSizeHeading3:s,marginXS:c,colorBorderBg:l,colorTextPlaceholder:g}=e,N=(0,h.TS)(e,{avatarBg:g,avatarColor:t,avatarSizeBase:r,avatarSizeLG:n,avatarSizeSM:M,avatarFontSizeBase:Math.round((i+o)/2),avatarFontSizeLG:s,avatarFontSizeSM:a,avatarGroupSpace:-c,avatarGroupBorderColor:l});return[E(N),w(N)]}));const v=(e,t)=>{const r=n.useContext(O),[M,a]=n.useState(1),[i,o]=n.useState(!1),[s,l]=n.useState(!0),g=n.useRef(null),N=n.useRef(null),j=(0,d.sQ)(t,g),{getPrefixCls:u}=n.useContext(y.E_),D=()=>{if(!N.current||!g.current)return;const t=N.current.offsetWidth,r=g.current.offsetWidth;if(0!==t&&0!==r){const{gap:n=4}=e;2*n<r&&a(r-2*n<t?(r-2*n)/t:1)}};n.useEffect((()=>{o(!0)}),[]),n.useEffect((()=>{l(!0),a(1)}),[e.src]),n.useEffect((()=>{D()}),[e.gap]);const{prefixCls:I,shape:z="circle",size:p="default",src:A,srcSet:L,icon:h,className:C,rootClassName:E,alt:w,draggable:v,children:S,crossOrigin:b}=e,k=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var M=0;for(n=Object.getOwnPropertySymbols(e);M<n.length;M++)t.indexOf(n[M])<0&&Object.prototype.propertyIsEnumerable.call(e,n[M])&&(r[n[M]]=e[n[M]])}return r}(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),Q="default"===p?r:p,U=Object.keys("object"==typeof Q&&Q||{}).some((e=>["xs","sm","md","lg","xl","xxl"].includes(e))),Y=(0,m.Z)(U),$=n.useMemo((()=>{if("object"!=typeof Q)return{};const e=x.c.find((e=>Y[e])),t=Q[e];return t?{width:t,height:t,lineHeight:`${t}px`,fontSize:h?t/2:18}:{}}),[Y,Q]),Z=u("avatar",I),[B,P]=f(Z),W=c()({[`${Z}-lg`]:"large"===Q,[`${Z}-sm`]:"small"===Q}),G=n.isValidElement(A),R=c()(Z,W,{[`${Z}-${z}`]:!!z,[`${Z}-image`]:G||A&&s,[`${Z}-icon`]:!!h},C,E,P),H="number"==typeof Q?{width:Q,height:Q,lineHeight:`${Q}px`,fontSize:h?Q/2:18}:{};let F;if("string"==typeof A&&s)F=n.createElement("img",{src:A,draggable:v,srcSet:L,onError:()=>{const{onError:t}=e;!1!==(t?t():void 0)&&l(!1)},alt:w,crossOrigin:b});else if(G)F=A;else if(h)F=h;else if(i||1!==M){const e=`scale(${M}) translateX(-50%)`,t={msTransform:e,WebkitTransform:e,transform:e},r="number"==typeof Q?{lineHeight:`${Q}px`}:{};F=n.createElement(T.Z,{onResize:D},n.createElement("span",{className:`${Z}-string`,ref:N,style:Object.assign(Object.assign({},r),t)},S))}else F=n.createElement("span",{className:`${Z}-string`,style:{opacity:0},ref:N},S);return delete k.onError,delete k.gap,B(n.createElement("span",Object.assign({},k,{style:Object.assign(Object.assign(Object.assign({},H),$),k.style),className:R,ref:j}),F))},S=n.forwardRef(v);var b=r(3868),k=r(8557);const Q=e=>e?"function"==typeof e?e():e:null;var U=r(240),Y=r(595),$=r(6079),Z=r(1578),B=r(1431);const P=e=>{const{componentCls:t,popoverBg:r,popoverColor:n,width:M,fontWeightStrong:a,popoverPadding:i,boxShadowSecondary:o,colorTextHeading:s,borderRadiusLG:c,zIndexPopup:l,marginXS:g,colorBgElevated:N}=e;return[{[t]:Object.assign(Object.assign({},(0,C.Wf)(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:l,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--antd-arrow-background-color":N,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:r,backgroundClip:"padding-box",borderRadius:c,boxShadow:o,padding:i},[`${t}-title`]:{minWidth:M,marginBottom:g,color:s,fontWeight:a},[`${t}-inner-content`]:{color:n}})},(0,B.ZP)(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${t}-pure`]:{position:"relative",maxWidth:"none",[`${t}-content`]:{display:"inline-block"}}}]},W=e=>{const{componentCls:t}=e;return{[t]:Z.i.map((r=>{const n=e[`${r}-6`];return{[`&${t}-${r}`]:{"--antd-arrow-background-color":n,[`${t}-inner`]:{backgroundColor:n},[`${t}-arrow`]:{background:"transparent"}}}}))}},G=e=>{const{componentCls:t,lineWidth:r,lineType:n,colorSplit:M,paddingSM:a,controlHeight:i,fontSize:o,lineHeight:s,padding:c}=e,l=i-Math.round(o*s);return{[t]:{[`${t}-inner`]:{padding:0},[`${t}-title`]:{margin:0,padding:`${l/2}px ${c}px ${l/2-r}px`,borderBottom:`${r}px ${n} ${M}`},[`${t}-inner-content`]:{padding:`${a}px ${c}px`}}}},R=(0,L.Z)("Popover",(e=>{const{colorBgElevated:t,colorText:r,wireframe:n}=e,M=(0,h.TS)(e,{popoverBg:t,popoverColor:r,popoverPadding:12});return[P(M),W(M),n&&G(M),(0,$._y)(M,"zoom-big")]}),(e=>{let{zIndexPopupBase:t}=e;return{zIndexPopup:t+30,width:177}}));const H=(e,t,r)=>{if(t||r)return n.createElement(n.Fragment,null,t&&n.createElement("div",{className:`${e}-title`},Q(t)),n.createElement("div",{className:`${e}-inner-content`},Q(r)))};function F(e){const{hashId:t,prefixCls:r,className:M,style:a,placement:i="top",title:o,content:s,children:l}=e;return n.createElement("div",{className:c()(t,r,`${r}-pure`,`${r}-placement-${i}`,M),style:a},n.createElement(Y.G,Object.assign({},e,{className:t,prefixCls:r}),l||H(r,o,s)))}const J=e=>{let{title:t,content:r,prefixCls:M}=e;return t||r?n.createElement(n.Fragment,null,t&&n.createElement("div",{className:`${M}-title`},Q(t)),n.createElement("div",{className:`${M}-inner-content`},Q(r))):null},V=n.forwardRef(((e,t)=>{var r,M;const{prefixCls:a,title:i,content:o,overlayClassName:s,placement:l="top",trigger:g="hover",mouseEnterDelay:N=.1,mouseLeaveDelay:j=.1,overlayStyle:u={},arrowPointAtCenter:D,arrow:I}=e,z=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var M=0;for(n=Object.getOwnPropertySymbols(e);M<n.length;M++)t.indexOf(n[M])<0&&Object.prototype.propertyIsEnumerable.call(e,n[M])&&(r[n[M]]=e[n[M]])}return r}(e,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","arrowPointAtCenter","arrow"]),{getPrefixCls:T}=n.useContext(y.E_),d=T("popover",a),[m,x]=R(d),p=T(),A=c()(s,x),O=null!==(M=null!==(r="boolean"!=typeof I&&(null==I?void 0:I.arrowPointAtCenter))&&void 0!==r?r:D)&&void 0!==M&&M,L=null!=I?I:{arrowPointAtCenter:O};return m(n.createElement(k.Z,Object.assign({placement:l,arrow:L,trigger:g,mouseEnterDelay:N,mouseLeaveDelay:j,overlayStyle:u},z,{prefixCls:d,overlayClassName:A,ref:t,overlay:n.createElement(J,{prefixCls:d,title:i,content:o}),transitionName:(0,U.mL)(p,"zoom-big",z.transitionName),"data-popover-inject":!0})))}));V._InternalPanelDoNotUseOrYouWillBeFired=function(e){const{prefixCls:t}=e,r=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var M=0;for(n=Object.getOwnPropertySymbols(e);M<n.length;M++)t.indexOf(n[M])<0&&Object.prototype.propertyIsEnumerable.call(e,n[M])&&(r[n[M]]=e[n[M]])}return r}(e,["prefixCls"]),{getPrefixCls:M}=n.useContext(y.E_),a=M("popover",t),[i,o]=R(a);return i(n.createElement(F,Object.assign({},r,{prefixCls:a,hashId:o})))};const _=V;var X=r(2586);const K=S;K.Group=e=>{const{getPrefixCls:t,direction:r}=n.useContext(y.E_),{prefixCls:M,className:a,rootClassName:i,maxCount:o,maxStyle:s,size:l}=e,g=t("avatar",M),N=`${g}-group`,[j,u]=f(g),D=c()(N,{[`${N}-rtl`]:"rtl"===r},a,i,u),{children:I,maxPopoverPlacement:z="top",maxPopoverTrigger:T="hover"}=e,d=(0,b.Z)(I).map(((e,t)=>(0,X.Tm)(e,{key:`avatar-key-${t}`}))),m=d.length;if(o&&o<m){const t=d.slice(0,o),r=d.slice(o,m);return t.push(n.createElement(_,{key:"avatar-popover-key",content:r,trigger:T,placement:z,overlayClassName:`${N}-popover`},n.createElement(S,{style:s},"+"+(m-o)))),j(n.createElement(A,{size:l},n.createElement("div",{className:D,style:e.style},t)))}return j(n.createElement(A,{size:l},n.createElement("div",{className:D,style:e.style},d)))};const q=K;var ee=r(7666);const te={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};var re=r(4101),ne=function(e,t){return n.createElement(re.Z,(0,ee.Z)((0,ee.Z)({},e),{},{ref:t,icon:te}))};ne.displayName="UserOutlined";const Me=n.forwardRef(ne),{Header:ae}=M.Z,ie=(0,o.Pi)((({tabId:e,tabList:t})=>{const{darkMode:r}=j.Z,n=(0,a.s0)(),M=[{key:"1",label:(0,l.jsx)("div",{className:"p-3 pb-1 pt-1",onClick:()=>{localStorage.clear(),j.Z.setLogin(!1),j.Z.setTheme(!1),n("/login")},children:"退出登录"})}];return(0,l.jsxs)(ae,{className:`relative z-[999] box-border flex h-14 items-center justify-between p-7 pb-3 pt-3 shadow-ch ${r?"bg-slate-900":"bg-white"} `,children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsxs)("h1",{className:"mr-28 flex items-center text-lg",children:[(0,l.jsx)("img",{alt:"logo",className:"mr-2 w-8",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"}),"管理系统"]}),t.map((t=>(0,l.jsxs)("div",{onClick:()=>{var e;e=t.path,n(e)},className:c()("relative ml-4 mr-4 h-14 cursor-pointer select-none pl-3 pr-3 text-base leading-[56px]",{"KbmCdHtUH4JIgWrPTlto text-primary":t.key===e}),children:[t.label,(0,l.jsx)("div",{className:"Ir3LKO1ONJpH8AzpilYv"})]},t.key)))]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"mr-10 flex w-5 cursor-pointer items-center",children:r?(0,l.jsx)("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjg3OTMzNTUyNjI0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI5MjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTcyMC4wMjQxOTkgMzUxLjUyMTU0NWMwIDI1OS44Mjc2NDEtMjIxLjM3NzAzIDQ2OS40OTQ1ODQtNDk0LjIwMzU4NiA0NzMuMDY3OTkxIDc4LjUxMTM3NSA5MS4wNTcxNCAxOTcuMjU4ODg3IDE0NS42NjY5NDMgMzI2LjIzODE2MSAxNDUuNjY2OTQyIDIzMS42NzcwNTcgMCA0MTguMTk5MjQ2LTE3NC43NzkxNDUgNDE4LjE5OTI0Ni0zODguNDg5MTIyIDAtMTYyLjU4ODgzNy0xMDkuMDIwNjktMzA2LjY3NjIzLTI3MC4zOTEzMTktMzYzLjI0NDU3OSAxMy4zMDk2NDYgNDIuODU3MzQzIDIwLjE1NzQ5OSA4Ny41MjYxMDYgMjAuMTU3NDk4IDEzMi45OTg3Njh6TTY0My43NDMyNjEgMjE5Ljk5NTIxOGMtOS41NTM4MDItMjcuMDU1OTYzLTkuMDA3NjY5LTM3LjQ1MDE1MiAwLTQ5Ljg3MzUwOCAwIDAgMjguNzgxNDYyLTE2Ljg0ODkyIDU5LjY0NzQxMi03LjA3MTQ4NUM4ODkuNzg2OTIxIDIyMi4wOTM4MyAxMDI0LjAwMDM2NSAzODcuMjg5NzQ3IDEwMjQuMDAwMzY1IDU4MS43NjczNTYgMTAyNC4wMDAzNjUgODI1Ljk2NzgxNiA4MTIuNjY0NDIgMTAyNCA1NTIuMDU4Nzc0IDEwMjRjLTE1Ny44ODc4NTMgMC0yOTcuNTc3OTMxLTcyLjY5MzQwNy0zODMuMjIzMTcyLTE4NC4zMjgyMzktNi4xNTM0MTYtOC4wMTg5NzktOS4yNTk1NDktMTcuODcyOTItOC43ODg3NDUtMjcuODc4Njk0IDEuMTIxNjkyLTIzLjg0NjI1MyAyMS44NTIzOTUtNDIuMjkyMzc3IDQ2LjMwMzYzMi00MS4xOTc3NTcgNC40MjU1NjMgMC4xOTg5MTUgOC41NTQ1MiAwLjI5Nzc4NCAxMi4zODU2OTIgMC4yOTc3ODQgMjQ3LjEzOTQ1NyAwIDQ0Ny41NDQ0OTctMTg3Ljc4OTgzIDQ0Ny41NDQ0OTctNDE5LjM3MTU0OSAwLTQ1Ljk1MDUyOS03LjkzMTg4LTkwLjE2Mzc4OS0yMi41MzYyNC0xMzEuNTI1MTV6TTMzNy41NjAxOTkgNDk4LjYyNDQ0MWw0LjM1NjEyLTI2Ljc1MzQ3MS0xOC43MDI3MTMtMTkuNDg2NjAyYy00LjM3NDk1Mi00LjU1NzM4OS00LjI2OTAyMS0xMS44NDA3MzYgMC4yMzU0MDMtMTYuMjY2Mjk5YTExLjMxOTMyIDExLjMxOTMyIDAgMCAxIDYuMjQ2NC0zLjEyNjE0M2wyNS4zMjkyODctMy44MTM1MTcgMjAuODg5Ni00NC44ODUzMzNhMC43NTIxMSAwLjc1MjExIDAgMCAwIDAuMDUxNzg4LTAuMTU0MTg5bDAuMDE1MzAyLTAuMDY4MjY2YTAuMDQ1OTAzIDAuMDQ1OTAzIDAgMCAxIDAuMDExNzctMC4wMjIzNjQgMC4wMDk0MTYgMC4wMDk0MTYgMCAwIDEgMC4wMTUzMDEgMC4wMDM1MzJsMjAuOTM0MzI2IDQ1LjEyNjYyIDI1LjM2MTA2NyAzLjgxODIyNWM2LjIwOTkxMyAwLjkzNTcyNCAxMC40OTU0MTEgNi43ODc4MjUgOS41NzE0NTcgMTMuMDcxODlhMTEuNTU1ODk5IDExLjU1NTg5OSAwIDAgMS0zLjA4MDIzOSA2LjMxMTEzNmwtMTguNjY1MDQ4IDE5LjQ5MTMxIDQuMzU0OTQzIDI2Ljc1MzQ3MWMxLjAyMTY0NiA2LjI2ODc2My0zLjE3MzIyMyAxMi4xODc5NTQtOS4zNjkwMTIgMTMuMjIwMTkzYTExLjI1NDU4NCAxMS4yNTQ1ODQgMCAwIDEtNy4zMzc0OS0xLjI3NzA1N2wtMjEuNzU0NzAzLTEyLjEzNzM0My0yMS43NTU4OCAxMi4xMzczNDNjLTUuNDk3ODIxIDMuMDY4NDY5LTEyLjQxMjc2MyAxLjA0NTE4Ni0xNS40NDQ3NDUtNC41MTg1NDdhMTEuNjIwNjM0IDExLjYyMDYzNCAwIDAgMS0xLjI2MjkzNC03LjQyNDU4OXpNMzIuNTQ5NDQxIDE3OC4xNTI0Nmw4Ljk5MDAxNC01My42NTI4OTJMMy40MjMxMTQgODUuOTEwMDY5YTExLjc2Nzc2MSAxMS43Njc3NjEgMCAwIDEgMC4yNTE4ODEtMTYuODQwNjggMTIuMTkyNjYyIDEyLjE5MjY2MiAwIDAgMSA2LjY1NDgyMy0zLjIzNjc4Mmw1Mi4xNTkyNjQtNy42MzA1NjZDNzQuODUwMDU3IDE5LjQwMDY4IDg2LjU1Nzc5IDAgOTcuNjA5OTI4IDBjMTEuMDU0NDkyIDAgMjEuNjc1ODQ0IDE5LjQwMDY4IDMxLjg2NjQwOSA1OC4yMDIwNDFsNTIuMTkxMDQ0IDcuNjM2NDUxYzYuNjE3MTU5IDAuOTY4NjggMTEuMTgyNzg2IDcuMDI2NzU5IDEwLjE5ODgwNSAxMy41MzIxMDFhMTEuODMzNjc0IDExLjgzMzY3NCAwIDAgMS0zLjI4MTUwOCA2LjUzNDc2OGwtMzguMDMzOTUgMzguNTk0MjA3IDguOTkwMDE0IDUzLjY1Mjg5MmMxLjA4NjM4MiA2LjQ5MDA0MS0zLjM4MjczMSAxMi42MTc1NjMtOS45ODM0MTIgMTMuNjg3NDY2LTIuNjgzNTg2IDAuNDM0MzE3LTUuNDM2NjE2LTAuMDMxNzc5LTcuODE3NzEtMS4zMjI5NmwtNDUuNjk1MTE3LTI0Ljc3MzczOC00NS42OTUxMTcgMjQuNzczNzM4Yy01Ljg1Nzk4NiAzLjE3Njc1NC0xMy4yMjYwNzggMS4wODI4NTEtMTYuNDU1Nzk4LTQuNjc3NDQ0YTExLjczNzE1OSAxMS43MzcxNTkgMCAwIDEtMS4zNDUzMjQtNy42ODU4ODV6IiBmaWxsPSIjZmZmZmZmZDkiIHAtaWQ9IjI5MjUiPjwvcGF0aD48L3N2Zz4=",className:"w-full",alt:"暗黑模式",onClick:()=>{j.Z.setTheme(!1)}}):(0,l.jsx)("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjg3OTMzNTM5MTExIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI2NTgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTUxMCAxOTJhMzIgMzIgMCAwIDEtMzItMzJWODBhMzIgMzIgMCAxIDEgNjQgMHY4MGEzMiAzMiAwIDAgMS0zMiAzMnogbTIyNC44NjQgOTMuMTM2YTMyIDMyIDAgMCAxIDAtNDUuMjQ4bDU2LjU3Ni01Ni41NzZhMzIgMzIgMCAxIDEgNDUuMjQ4IDQ1LjI0OGwtNTYuNTYgNTYuNTZhMzIgMzIgMCAwIDEtNDUuMjY0IDAuMDE2eiBtOTMuMTM2IDIyNC44NjRhMzIgMzIgMCAwIDEgMzItMzJoODBhMzIgMzIgMCAxIDEgMCA2NGgtODBhMzIgMzIgMCAwIDEtMzItMzJ6IG0tOTMuMTM2IDIyNC44NjRhMzIgMzIgMCAwIDEgNDUuMjQ4IDBsNTYuNTYgNTYuNTZhMzIgMzIgMCAxIDEtNDUuMjQ4IDQ1LjI0OGwtNTYuNTc2LTU2LjU2YTMyIDMyIDAgMCAxIDAuMDE2LTQ1LjI0OHpNNTEwIDgyOGEzMiAzMiAwIDAgMSAzMiAzMnY4MGEzMiAzMiAwIDEgMS02NCAwdi04MGEzMiAzMiAwIDAgMSAzMi0zMnogbS0yMjQuODY0LTkzLjEzNmEzMiAzMiAwIDAgMSAwIDQ1LjI0OGwtNTYuNTYgNTYuNTZhMzIgMzIgMCAwIDEtNDUuMjQ4LTQ1LjI0OGw1Ni41NzYtNTYuNTZhMzIgMzIgMCAwIDEgNDUuMjMyIDB6TTE5MiA1MTBhMzIgMzIgMCAwIDEtMzIgMzJIODBhMzIgMzIgMCAxIDEgMC02NGg4MGEzMiAzMiAwIDAgMSAzMiAzMnogbTkzLjEzNi0yMjQuODY0YTMyIDMyIDAgMCAxLTQ1LjI0OCAwbC01Ni41NzYtNTYuNTZhMzIgMzIgMCAwIDEgNDUuMjQ4LTQ1LjI0OGw1Ni41NiA1Ni41NzZhMzIgMzIgMCAwIDEgMC4wMTYgNDUuMjMyek01MTAgMjcyYzEzMi41NDQgMCAyNDAgMTA3LjQ1NiAyNDAgMjQwIDAgMTMyLjU0NC0xMDcuNDU2IDI0MC0yNDAgMjQwLTEzMi41NDQgMC0yNDAtMTA3LjQ1Ni0yNDAtMjQwIDAtMTMyLjU0NCAxMDcuNDU2LTI0MCAyNDAtMjQweiBtMCA2NGMtOTcuMiAwLTE3NiA3OC44LTE3NiAxNzZzNzguOCAxNzYgMTc2IDE3NiAxNzYtNzguOCAxNzYtMTc2LTc4LjgtMTc2LTE3Ni0xNzZ6IiBmaWxsPSIjMDAwMDAwIiBwLWlkPSIyNjU5Ij48L3BhdGg+PC9zdmc+",className:"w-full",alt:"明亮模式",onClick:()=>{j.Z.setTheme(!0)}})}),(0,l.jsx)(z.Z,{menu:{items:M},placement:"bottomRight",className:"cursor-pointer",arrow:{pointAtCenter:!1},children:(0,l.jsxs)("div",{className:"flex items-center leading-[32px]",children:[(0,l.jsx)("div",{className:"mr-3",children:j.Z.userInfo?.account}),(0,l.jsx)(q,{icon:(0,l.jsx)(Me,{})})]})})]})]})}));r(1172);var oe=r(3121);const{Sider:se}=M.Z,ce=({menu:e,selectKey:t})=>{const[r,M]=(0,n.useState)([]),a=(0,n.useMemo)((()=>t||(e[0].children?e[0].children[0]?.key:e[0].key)),[e,t]);return(0,n.useEffect)((()=>{const t=[];e.forEach((e=>{e.children?.length&&t.push(`${e.key}`)})),M(t)}),[e]),(0,l.jsx)(se,{theme:"light",width:160,children:(0,l.jsx)(oe.Z,{mode:"inline",items:e,openKeys:r,selectedKeys:[`${a}`],className:"mt-5",onOpenChange:e=>{M(e)}})})},{Content:le}=M.Z,ge=(0,o.Pi)((({children:e})=>{const{pathname:t}=(0,a.TH)(),r=(0,a.s0)(),{isLogin:o,userInfo:s,routerMap:c,getRouteMenu:{menu:g}}=j.Z,[u,z]=(0,n.useMemo)((()=>{if(!g.length)return["",""];let e="",r="";return function n(M,a){M.length<0||M.forEach((M=>{t.includes(M.path)&&(r=a||`${M.key}`,M.children?.length||(e=a?`${M.key}`:""));let i="";M.children?.length&&(i=a?`${a+I.Q5+M.key}`:`${M.key}`,n(M.children,i))}))}(g),[r?.split(I.Q5)?.[0]||`${g[0]?.key}`,`${e}`]}),[t,g]),T=(0,n.useMemo)((()=>u?function e(t){return t.map((t=>{const{path:r,children:n}=t;return{...t,label:n?.length?t.label:(0,l.jsxs)(i.rU,{to:r,children:[" ",t.label]}),children:n?.length?e(n):void 0}}))}(g.filter((e=>e.key===u))?.[0]?.children||[]):[]),[u,g]);return(0,n.useEffect)((()=>{o||r("/login")}),[o,r]),(0,l.jsxs)(M.Z,{children:[(0,l.jsx)(ie,{tabId:u,tabList:g}),(0,l.jsxs)(M.Z,{className:"h-[calc(100vh-3.5rem)] overflow-hidden",children:[T.length?(0,l.jsx)(ce,{selectKey:z,menu:T}):null,(0,l.jsx)(M.Z,{children:(0,l.jsxs)(le,{className:"m-3 mb-0 mt-0",children:[(0,l.jsx)(N,{routerMap:c}),(0,l.jsx)("div",{className:"h-[calc(100%-4.5rem)] overflow-auto",children:(0,l.jsx)(D.Provider,{value:{isLogin:o,userInfo:s},children:e})})]})})]})]})})),Ne=({children:e})=>(0,l.jsx)(ge,{children:e})}}]);