"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[761],{6518:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(981),r=n(79),i=n(1537),l=n(6328);function a(e,t,n){return function(a){const{prefixCls:s,style:c}=a,d=r.useRef(null),[m,u]=r.useState(0),[p,g]=r.useState(0),[$,b]=(0,o.Z)(!1,{value:a.open}),{getPrefixCls:f}=r.useContext(i.E_),v=f(t||"select",s);return r.useEffect((()=>{if(b(!0),"undefined"!=typeof ResizeObserver){const e=new ResizeObserver((e=>{const t=e[0].target;u(t.offsetHeight+8),g(t.offsetWidth)})),t=setInterval((()=>{var o;const r=n?`.${n(v)}`:`.${v}-dropdown`,i=null===(o=d.current)||void 0===o?void 0:o.querySelector(r);i&&(clearInterval(t),e.observe(i))}),10);return()=>{clearInterval(t),e.disconnect()}}}),[]),r.createElement(l.ZP,{theme:{token:{motionDurationFast:"0.01s",motionDurationMid:"0.01s",motionDurationSlow:"0.01s"}}},r.createElement("div",{ref:d,style:{paddingBottom:m,position:"relative",width:"fit-content",minWidth:p}},r.createElement(e,Object.assign({},a,{style:Object.assign(Object.assign({},c),{margin:0}),open:$,visible:$,getPopupContainer:()=>d.current}))))}}},8091:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(79);function r(){const[,e]=o.useReducer((e=>e+1),0);return e}},5323:(e,t,n)=>{n.d(t,{Z:()=>_});var o=n(2262),r=n(6372),i=n.n(r),l=n(5717),a=n(2244),s=n(981),c=n(7133),d=n(79),m=n(1537),u=n(3121),p=n(7494),g=n(2748),$=n(686),b=n(6518),f=n(2586),v=n(888),h=n(3872),y=n(3868),w=n(1661);function x(e){let{className:t,direction:n,index:o,marginDirection:r,children:i,split:l,wrap:a}=e;const{horizontalSize:s,verticalSize:c,latestIndex:m,supportFlexGap:u}=d.useContext(C);let p={};return u||("vertical"===n?o<m&&(p={marginBottom:s/(l?2:1)}):p=Object.assign(Object.assign({},o<m&&{[r]:s/(l?2:1)}),a&&{paddingBottom:c})),null==i?null:d.createElement(d.Fragment,null,d.createElement("div",{className:t,style:p},i),o<m&&l&&d.createElement("span",{className:`${t}-split`,style:p},l))}var O=n(9193);const C=d.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),S={small:8,middle:16,large:24},I=e=>{const{getPrefixCls:t,space:n,direction:o}=d.useContext(m.E_),{size:r=(null==n?void 0:n.size)||"small",align:l,className:a,rootClassName:s,children:c,direction:u="horizontal",prefixCls:p,split:g,style:$,wrap:b=!1}=e,f=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap"]),v=(0,w.Z)(),[h,I]=d.useMemo((()=>(Array.isArray(r)?r:[r,r]).map((e=>function(e){return"string"==typeof e?S[e]:e||0}(e)))),[r]),E=(0,y.Z)(c,{keepEmpty:!0}),j=void 0===l&&"horizontal"===u?"center":l,P=t("space",p),[z,k]=(0,O.Z)(P),B=i()(P,k,`${P}-${u}`,{[`${P}-rtl`]:"rtl"===o,[`${P}-align-${j}`]:j},a,s),T=`${P}-item`,N="rtl"===o?"marginLeft":"marginRight";let D=0;const H=E.map(((e,t)=>{null!=e&&(D=t);const n=e&&e.key||`${T}-${t}`;return d.createElement(x,{className:T,key:n,direction:u,index:t,marginDirection:N,split:g,wrap:b},e)})),R=d.useMemo((()=>({horizontalSize:h,verticalSize:I,latestIndex:D,supportFlexGap:v})),[h,I,D,v]);if(0===E.length)return null;const A={};return b&&(A.flexWrap="wrap",v||(A.marginBottom=-I)),v&&(A.columnGap=h,A.rowGap=I),z(d.createElement("div",Object.assign({className:B,style:Object.assign(Object.assign({},A),$)},f),d.createElement(C.Provider,{value:R},H)))};I.Compact=g.ZP;const E=I;var j=n(5817),P=n(6037),z=n(7204),k=n(6079),B=n(1431),T=n(8320),N=n(5738);const D=e=>{const{componentCls:t,antCls:n,paddingXS:o,opacityLoading:r}=e;return{[`${t}-button`]:{whiteSpace:"nowrap",[`&${n}-btn-group > ${n}-btn`]:{[`&-loading, &-loading + ${n}-btn`]:{cursor:"default",pointerEvents:"none",opacity:r},[`&:last-child:not(:first-child):not(${n}-btn-icon-only)`]:{paddingInline:o}}}}},H=e=>{const{componentCls:t,menuCls:n,colorError:o,colorTextLightSolid:r}=e,i=`${n}-item`;return{[`${t}, ${t}-menu-submenu`]:{[`${n} ${i}`]:{[`&${i}-danger:not(${i}-disabled)`]:{color:o,"&:hover":{color:r,backgroundColor:o}}}}}},R=e=>{const{componentCls:t,menuCls:n,zIndexPopup:o,dropdownArrowDistance:r,sizePopupArrow:i,antCls:l,iconCls:a,motionDurationMid:s,dropdownPaddingVertical:c,fontSize:d,dropdownEdgeChildPadding:m,colorTextDisabled:u,fontSizeIcon:p,controlPaddingHorizontal:g,colorBgElevated:$}=e;return[{[t]:Object.assign(Object.assign({},(0,j.Wf)(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:o,display:"block","&::before":{position:"absolute",insetBlock:i/2-r,zIndex:-9999,opacity:1e-4,content:'""'},[`${t}-wrap`]:{position:"relative",[`${l}-btn > ${a}-down`]:{fontSize:p},[`${a}-down::before`]:{transition:`transform ${s}`}},[`${t}-wrap-open`]:{[`${a}-down::before`]:{transform:"rotate(180deg)"}},"\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ":{display:"none"},[`&${l}-slide-down-enter${l}-slide-down-enter-active${t}-placement-bottomLeft,\n          &${l}-slide-down-appear${l}-slide-down-appear-active${t}-placement-bottomLeft,\n          &${l}-slide-down-enter${l}-slide-down-enter-active${t}-placement-bottom,\n          &${l}-slide-down-appear${l}-slide-down-appear-active${t}-placement-bottom,\n          &${l}-slide-down-enter${l}-slide-down-enter-active${t}-placement-bottomRight,\n          &${l}-slide-down-appear${l}-slide-down-appear-active${t}-placement-bottomRight`]:{animationName:P.fJ},[`&${l}-slide-up-enter${l}-slide-up-enter-active${t}-placement-topLeft,\n          &${l}-slide-up-appear${l}-slide-up-appear-active${t}-placement-topLeft,\n          &${l}-slide-up-enter${l}-slide-up-enter-active${t}-placement-top,\n          &${l}-slide-up-appear${l}-slide-up-appear-active${t}-placement-top,\n          &${l}-slide-up-enter${l}-slide-up-enter-active${t}-placement-topRight,\n          &${l}-slide-up-appear${l}-slide-up-appear-active${t}-placement-topRight`]:{animationName:P.Qt},[`&${l}-slide-down-leave${l}-slide-down-leave-active${t}-placement-bottomLeft,\n          &${l}-slide-down-leave${l}-slide-down-leave-active${t}-placement-bottom,\n          &${l}-slide-down-leave${l}-slide-down-leave-active${t}-placement-bottomRight`]:{animationName:P.Uw},[`&${l}-slide-up-leave${l}-slide-up-leave-active${t}-placement-topLeft,\n          &${l}-slide-up-leave${l}-slide-up-leave-active${t}-placement-top,\n          &${l}-slide-up-leave${l}-slide-up-leave-active${t}-placement-topRight`]:{animationName:P.ly}})},(0,B.ZP)(e,{colorBg:$,limitVerticalRadius:!0,arrowPlacement:{top:!0,bottom:!0}}),{[`${t} ${n}`]:{position:"relative",margin:0},[`${n}-submenu-popup`]:{position:"absolute",zIndex:o,background:"transparent",boxShadow:"none",transformOrigin:"0 0","ul, li":{listStyle:"none",margin:0}},[`${t}, ${t}-menu-submenu`]:{[n]:Object.assign(Object.assign({padding:m,listStyleType:"none",backgroundColor:$,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary},(0,j.Qy)(e)),{[`${n}-item-group-title`]:{padding:`${c}px ${g}px`,color:e.colorTextDescription,transition:`all ${s}`},[`${n}-item`]:{position:"relative",display:"flex",alignItems:"center"},[`${n}-item-icon`]:{minWidth:d,marginInlineEnd:e.marginXS,fontSize:e.fontSizeSM},[`${n}-title-content`]:{flex:"auto","> a":{color:"inherit",transition:`all ${s}`,"&:hover":{color:"inherit"},"&::after":{position:"absolute",inset:0,content:'""'}}},[`${n}-item, ${n}-submenu-title`]:Object.assign(Object.assign({clear:"both",margin:0,padding:`${c}px ${g}px`,color:e.colorText,fontWeight:"normal",fontSize:d,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${s}`,borderRadius:e.borderRadiusSM,"&:hover, &-active":{backgroundColor:e.controlItemBgHover}},(0,j.Qy)(e)),{"&-selected":{color:e.colorPrimary,backgroundColor:e.controlItemBgActive,"&:hover, &-active":{backgroundColor:e.controlItemBgActiveHover}},"&-disabled":{color:u,cursor:"not-allowed","&:hover":{color:u,backgroundColor:$,cursor:"not-allowed"},a:{pointerEvents:"none"}},"&-divider":{height:1,margin:`${e.marginXXS}px 0`,overflow:"hidden",lineHeight:0,backgroundColor:e.colorSplit},[`${t}-menu-submenu-expand-icon`]:{position:"absolute",insetInlineEnd:e.paddingXS,[`${t}-menu-submenu-arrow-icon`]:{marginInlineEnd:"0 !important",color:e.colorTextDescription,fontSize:p,fontStyle:"normal"}}}),[`${n}-item-group-list`]:{margin:`0 ${e.marginXS}px`,padding:0,listStyle:"none"},[`${n}-submenu-title`]:{paddingInlineEnd:g+e.fontSizeSM},[`${n}-submenu-vertical`]:{position:"relative"},[`${n}-submenu${n}-submenu-disabled ${t}-menu-submenu-title`]:{[`&, ${t}-menu-submenu-arrow-icon`]:{color:u,backgroundColor:$,cursor:"not-allowed"}},[`${n}-submenu-selected ${t}-menu-submenu-title`]:{color:e.colorPrimary}})}},[(0,P.oN)(e,"slide-up"),(0,P.oN)(e,"slide-down"),(0,z.Fm)(e,"move-up"),(0,z.Fm)(e,"move-down"),(0,k._y)(e,"zoom-big")]]},A=(0,T.Z)("Dropdown",((e,t)=>{let{rootPrefixCls:n}=t;const{marginXXS:o,sizePopupArrow:r,controlHeight:i,fontSize:l,lineHeight:a,paddingXXS:s,componentCls:c,borderRadiusLG:d}=e,m=(i-l*a)/2,{dropdownArrowOffset:u}=(0,B.fS)({contentRadius:d}),p=(0,N.TS)(e,{menuCls:`${c}-menu`,rootPrefixCls:n,dropdownArrowDistance:r/2+o,dropdownArrowOffset:u,dropdownPaddingVertical:m,dropdownEdgeChildPadding:s});return[R(p),D(p),H(p)]}),(e=>({zIndexPopup:e.zIndexPopupBase+50})));const M=e=>{const{getPopupContainer:t,getPrefixCls:n,direction:o}=d.useContext(m.E_),{prefixCls:r,type:l="default",danger:a,disabled:s,loading:c,onClick:u,htmlType:p,children:$,className:b,menu:f,arrow:y,autoFocus:w,overlay:x,trigger:O,align:C,open:S,onOpenChange:I,placement:j,getPopupContainer:P,href:z,icon:k=d.createElement(v.Z,null),title:B,buttonsRender:T=(e=>e),mouseEnterDelay:N,mouseLeaveDelay:D,overlayClassName:H,overlayStyle:R,destroyPopupOnHide:M,dropdownRender:Z}=e,L=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(e,["prefixCls","type","danger","disabled","loading","onClick","htmlType","children","className","menu","arrow","autoFocus","overlay","trigger","align","open","onOpenChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide","dropdownRender"]),W=n("dropdown",r),X=`${W}-button`,[_,G]=A(W),K={menu:f,arrow:y,autoFocus:w,align:C,disabled:s,trigger:s?[]:O,onOpenChange:I,getPopupContainer:P||t,mouseEnterDelay:N,mouseLeaveDelay:D,overlayClassName:H,overlayStyle:R,destroyPopupOnHide:M,dropdownRender:Z},{compactSize:Y,compactItemClassnames:U}=(0,g.ri)(W,o),V=i()(X,U,b,G);"overlay"in e&&(K.overlay=x),"open"in e&&(K.open=S),K.placement="placement"in e?j:"rtl"===o?"bottomLeft":"bottomRight";const J=d.createElement(h.ZP,{type:l,danger:a,disabled:s,loading:c,onClick:u,htmlType:p,href:z,title:B},$),Q=d.createElement(h.ZP,{type:l,danger:a,icon:k}),[q,ee]=T([J,Q]);return _(d.createElement(E.Compact,Object.assign({className:V,size:Y,block:!0},L),q,d.createElement(F,Object.assign({},K),ee)))};M.__ANT_BUTTON=!0;const Z=M;var L=n(1797);const W=e=>{const{getPopupContainer:t,getPrefixCls:n,direction:r}=d.useContext(m.E_),{menu:b,arrow:v,prefixCls:h,children:y,trigger:w,disabled:x,dropdownRender:O,getPopupContainer:C,overlayClassName:S,rootClassName:I,open:E,onOpenChange:j,visible:P,onVisibleChange:z,mouseEnterDelay:k=.15,mouseLeaveDelay:B=.1,autoAdjustOverflow:T=!0}=e,N=n("dropdown",h),[D,H]=A(N),{token:R}=L.Z.useToken(),M=d.Children.only(y),Z=(0,f.Tm)(M,{className:i()(`${N}-trigger`,{[`${N}-rtl`]:"rtl"===r},M.props.className),disabled:x}),W=x?[]:w;let X;W&&W.includes("contextMenu")&&(X=!0);const[F,_]=(0,s.Z)(!1,{value:null!=E?E:P}),G=(0,a.Z)((e=>{null==j||j(e),null==z||z(e),_(e)})),K=i()(S,I,H,{[`${N}-rtl`]:"rtl"===r}),Y=(0,$.Z)({arrowPointAtCenter:"object"==typeof v&&v.pointAtCenter,autoAdjustOverflow:T,offset:R.marginXXS,arrowWidth:v?R.sizePopupArrow:0}),U=d.useCallback((()=>{_(!1)}),[]);return D(d.createElement(l.Z,Object.assign({alignPoint:X},(0,c.Z)(e,["rootClassName"]),{mouseEnterDelay:k,mouseLeaveDelay:B,visible:F,builtinPlacements:Y,arrow:!!v,overlayClassName:K,prefixCls:N,getPopupContainer:C||t,transitionName:(()=>{const t=n(),{placement:o="",transitionName:r}=e;return void 0!==r?r:o.includes("top")?`${t}-slide-down`:`${t}-slide-up`})(),trigger:W,overlay:()=>{const{overlay:t}=e;let n;return n=(null==b?void 0:b.items)?d.createElement(u.Z,Object.assign({},b)):"function"==typeof t?t():t,O&&(n=O(n)),n=d.Children.only("string"==typeof n?d.createElement("span",null,n):n),d.createElement(p.J,{prefixCls:`${N}-menu`,expandIcon:d.createElement("span",{className:`${N}-menu-submenu-arrow`},d.createElement(o.Z,{className:`${N}-menu-submenu-arrow-icon`})),mode:"vertical",selectable:!1,onClick:U,validator:e=>{let{mode:t}=e}},d.createElement(g.BR,null,n))},placement:(()=>{const{placement:t}=e;return t?t.includes("Center")?t.slice(0,t.indexOf("Center")):t:"rtl"===r?"bottomRight":"bottomLeft"})(),onVisibleChange:G}),Z))};W.Button=Z;const X=(0,b.Z)(W,"dropdown",(e=>e));W._InternalPanelDoNotUseOrYouWillBeFired=e=>d.createElement(X,Object.assign({},e),d.createElement("span",null));const F=W,_=W},5062:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(79),r=n(8091),i=n(2278);const l=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=(0,o.useRef)({}),n=(0,r.Z)(),l=(0,i.Z)();return(0,o.useEffect)((()=>{const o=l.subscribe((o=>{t.current=o,e&&n()}));return()=>l.unsubscribe(o)}),[]),t.current}},7494:(e,t,n)=>{n.d(t,{J:()=>i,Z:()=>l});var o=n(79);const r=o.createContext(null),i=e=>{const{children:t}=e,n=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(e,["children"]),i=o.useContext(r),l=o.useMemo((()=>Object.assign(Object.assign({},i),n)),[i,n.prefixCls,n.mode,n.selectable]);return o.createElement(r.Provider,{value:l},t)},l=r},3121:(e,t,n)=>{n.d(t,{Z:()=>F});var o=n(5340),r=n(79),i=n(7133),l=n(2244),a=n(6372),s=n.n(a),c=n(888),d=n(240),m=n(2586),u=n(1537),p=n(83),g=n(8574),$=n(6037),b=n(6079),f=n(8320),v=n(5738);const h=e=>{const{componentCls:t,motionDurationSlow:n,menuHorizontalHeight:o,colorSplit:r,lineWidth:i,lineType:l,menuItemPaddingInline:a}=e;return{[`${t}-horizontal`]:{lineHeight:`${o}px`,border:0,borderBottom:`${i}px ${l} ${r}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${t}-item, ${t}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:a},[`> ${t}-item:hover,\n        > ${t}-item-active,\n        > ${t}-submenu ${t}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${t}-item, ${t}-submenu-title`]:{transition:[`border-color ${n}`,`background ${n}`].join(",")},[`${t}-submenu-arrow`]:{display:"none"}}}},y=e=>{let{componentCls:t,menuArrowOffset:n}=e;return{[`${t}-rtl`]:{direction:"rtl"},[`${t}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${t}-rtl${t}-vertical,\n    ${t}-submenu-rtl ${t}-vertical`]:{[`${t}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(-${n})`},"&::after":{transform:`rotate(45deg) translateY(${n})`}}}}};var w=n(5817);const x=e=>Object.assign({},(0,w.oN)(e)),O=(e,t)=>{const{componentCls:n,colorItemText:o,colorItemTextSelected:r,colorGroupTitle:i,colorItemBg:l,colorSubItemBg:a,colorItemBgSelected:s,colorActiveBarHeight:c,colorActiveBarWidth:d,colorActiveBarBorderSize:m,motionDurationSlow:u,motionEaseInOut:p,motionEaseOut:g,menuItemPaddingInline:$,motionDurationMid:b,colorItemTextHover:f,lineType:v,colorSplit:h,colorItemTextDisabled:y,colorDangerItemText:w,colorDangerItemTextHover:O,colorDangerItemTextSelected:C,colorDangerItemBgActive:S,colorDangerItemBgSelected:I,colorItemBgHover:E,menuSubMenuBg:j,colorItemTextSelectedHorizontal:P,colorItemBgSelectedHorizontal:z}=e;return{[`${n}-${t}`]:{color:o,background:l,[`&${n}-root:focus-visible`]:Object.assign({},x(e)),[`${n}-item-group-title`]:{color:i},[`${n}-submenu-selected`]:{[`> ${n}-submenu-title`]:{color:r}},[`${n}-item-disabled, ${n}-submenu-disabled`]:{color:`${y} !important`},[`${n}-item:hover, ${n}-submenu-title:hover`]:{[`&:not(${n}-item-selected):not(${n}-submenu-selected)`]:{color:f}},[`&:not(${n}-horizontal)`]:{[`${n}-item:not(${n}-item-selected)`]:{"&:hover":{backgroundColor:E},"&:active":{backgroundColor:s}},[`${n}-submenu-title`]:{"&:hover":{backgroundColor:E},"&:active":{backgroundColor:s}}},[`${n}-item-danger`]:{color:w,[`&${n}-item:hover`]:{[`&:not(${n}-item-selected):not(${n}-submenu-selected)`]:{color:O}},[`&${n}-item:active`]:{background:S}},[`${n}-item a`]:{"&, &:hover":{color:"inherit"}},[`${n}-item-selected`]:{color:r,[`&${n}-item-danger`]:{color:C},"a, a:hover":{color:"inherit"}},[`& ${n}-item-selected`]:{backgroundColor:s,[`&${n}-item-danger`]:{backgroundColor:I}},[`${n}-item, ${n}-submenu-title`]:{[`&:not(${n}-item-disabled):focus-visible`]:Object.assign({},x(e))},[`&${n}-submenu > ${n}`]:{backgroundColor:j},[`&${n}-popup > ${n}`]:{backgroundColor:l},[`&${n}-horizontal`]:Object.assign(Object.assign({},"dark"===t?{borderBottom:0}:{}),{[`> ${n}-item, > ${n}-submenu`]:{top:m,marginTop:-m,marginBottom:0,borderRadius:0,"&::after":{position:"absolute",insetInline:$,bottom:0,borderBottom:`${c}px solid transparent`,transition:`border-color ${u} ${p}`,content:'""'},"&:hover, &-active, &-open":{"&::after":{borderBottomWidth:c,borderBottomColor:P}},"&-selected":{color:P,backgroundColor:z,"&::after":{borderBottomWidth:c,borderBottomColor:P}}}}),[`&${n}-root`]:{[`&${n}-inline, &${n}-vertical`]:{borderInlineEnd:`${m}px ${v} ${h}`}},[`&${n}-inline`]:{[`${n}-sub${n}-inline`]:{background:a},[`${n}-item, ${n}-submenu-title`]:m&&d?{width:`calc(100% + ${m}px)`}:{},[`${n}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${d}px solid ${r}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${b} ${g}`,`opacity ${b} ${g}`].join(","),content:'""'},[`&${n}-item-danger`]:{"&::after":{borderInlineEndColor:C}}},[`${n}-selected, ${n}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${b} ${p}`,`opacity ${b} ${p}`].join(",")}}}}}},C=e=>{const{componentCls:t,menuItemHeight:n,itemMarginInline:o,padding:r,menuArrowSize:i,marginXS:l,marginXXS:a}=e;return{[`${t}-item`]:{position:"relative"},[`${t}-item, ${t}-submenu-title`]:{height:n,lineHeight:`${n}px`,paddingInline:r,overflow:"hidden",textOverflow:"ellipsis",marginInline:o,marginBlock:a,width:`calc(100% - ${2*o}px)`},[`${t}-submenu`]:{paddingBottom:.02},[`> ${t}-item,\n            > ${t}-submenu > ${t}-submenu-title`]:{height:n,lineHeight:`${n}px`},[`${t}-item-group-list ${t}-submenu-title,\n            ${t}-submenu-title`]:{paddingInlineEnd:r+i+l}}},S=e=>{const{componentCls:t,iconCls:n,menuItemHeight:o,colorTextLightSolid:r,dropdownWidth:i,controlHeightLG:l,motionDurationMid:a,motionEaseOut:s,paddingXL:c,fontSizeSM:d,fontSizeLG:m,motionDurationSlow:u,paddingXS:p,boxShadowSecondary:g}=e,$={height:o,lineHeight:`${o}px`,listStylePosition:"inside",listStyleType:"disc"};return[{[t]:{"&-inline, &-vertical":Object.assign({[`&${t}-root`]:{boxShadow:"none"}},C(e))},[`${t}-submenu-popup`]:{[`${t}-vertical`]:Object.assign(Object.assign({},C(e)),{boxShadow:g})}},{[`${t}-submenu-popup ${t}-vertical${t}-sub`]:{minWidth:i,maxHeight:`calc(100vh - ${2.5*l}px)`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${t}-inline`]:{width:"100%",[`&${t}-root`]:{[`${t}-item, ${t}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${u}`,`background ${u}`,`padding ${a} ${s}`].join(","),[`> ${t}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${t}-sub${t}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${t}-submenu > ${t}-submenu-title`]:$,[`& ${t}-item-group-title`]:{paddingInlineStart:c}},[`${t}-item`]:$}},{[`${t}-inline-collapsed`]:{width:2*o,[`&${t}-root`]:{[`${t}-item, ${t}-submenu ${t}-submenu-title`]:{[`> ${t}-inline-collapsed-noicon`]:{fontSize:m,textAlign:"center"}}},[`> ${t}-item,\n          > ${t}-item-group > ${t}-item-group-list > ${t}-item,\n          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,\n          > ${t}-submenu > ${t}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${d}px)`,textOverflow:"clip",[`\n            ${t}-submenu-arrow,\n            ${t}-submenu-expand-icon\n          `]:{opacity:0},[`${t}-item-icon, ${n}`]:{margin:0,fontSize:m,lineHeight:`${o}px`,"+ span":{display:"inline-block",opacity:0}}},[`${t}-item-icon, ${n}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${t}-item-icon, ${n}`]:{display:"none"},"a, a:hover":{color:r}},[`${t}-item-group-title`]:Object.assign(Object.assign({},w.vS),{paddingInline:p})}}]},I=e=>{const{componentCls:t,fontSize:n,motionDurationSlow:o,motionDurationMid:r,motionEaseInOut:i,motionEaseOut:l,iconCls:a,controlHeightSM:s}=e;return{[`${t}-item, ${t}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${o}`,`background ${o}`,`padding ${o} ${i}`].join(","),[`${t}-item-icon, ${a}`]:{minWidth:n,fontSize:n,transition:[`font-size ${r} ${l}`,`margin ${o} ${i}`,`color ${o}`].join(","),"+ span":{marginInlineStart:s-n,opacity:1,transition:[`opacity ${o} ${i}`,`margin ${o}`,`color ${o}`].join(",")}},[`${t}-item-icon`]:Object.assign({},(0,w.Ro)()),[`&${t}-item-only-child`]:{[`> ${a}, > ${t}-item-icon`]:{marginInlineEnd:0}}},[`${t}-item-disabled, ${t}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${t}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},E=e=>{const{componentCls:t,motionDurationSlow:n,motionEaseInOut:o,borderRadius:r,menuArrowSize:i,menuArrowOffset:l}=e;return{[`${t}-submenu`]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:e.margin,width:i,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${n} ${o}, opacity ${n}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:.6*i,height:.15*i,backgroundColor:"currentcolor",borderRadius:r,transition:[`background ${n} ${o}`,`transform ${n} ${o}`,`top ${n} ${o}`,`color ${n} ${o}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(-${l})`},"&::after":{transform:`rotate(-45deg) translateY(${l})`}}}}},j=e=>{const{antCls:t,componentCls:n,fontSize:o,motionDurationSlow:r,motionDurationMid:i,motionEaseInOut:l,lineHeight:a,paddingXS:s,padding:c,colorSplit:d,lineWidth:m,zIndexPopup:u,borderRadiusLG:p,radiusSubMenuItem:g,menuArrowSize:$,menuArrowOffset:b,lineType:f,menuPanelMaskInset:v}=e;return[{"":{[`${n}`]:Object.assign(Object.assign({},(0,w.dF)()),{"&-hidden":{display:"none"}})},[`${n}-submenu-hidden`]:{display:"none"}},{[n]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(0,w.Wf)(e)),(0,w.dF)()),{marginBottom:0,paddingInlineStart:0,fontSize:o,lineHeight:0,listStyle:"none",outline:"none",transition:[`background ${r}`,`width ${r} cubic-bezier(0.2, 0, 0, 1) 0s`].join(","),"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",[`${n}-item`]:{flex:"none"}},[`${n}-item, ${n}-submenu, ${n}-submenu-title`]:{borderRadius:e.radiusItem},[`${n}-item-group-title`]:{padding:`${s}px ${c}px`,fontSize:o,lineHeight:a,transition:`all ${r}`},[`&-horizontal ${n}-submenu`]:{transition:[`border-color ${r} ${l}`,`background ${r} ${l}`].join(",")},[`${n}-submenu, ${n}-submenu-inline`]:{transition:[`border-color ${r} ${l}`,`background ${r} ${l}`,`padding ${i} ${l}`].join(",")},[`${n}-submenu ${n}-sub`]:{cursor:"initial",transition:[`background ${r} ${l}`,`padding ${r} ${l}`].join(",")},[`${n}-title-content`]:{transition:`color ${r}`},[`${n}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${n}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:d,borderStyle:f,borderWidth:0,borderTopWidth:m,marginBlock:m,padding:0,"&-dashed":{borderStyle:"dashed"}}}),I(e)),{[`${n}-item-group`]:{[`${n}-item-group-list`]:{margin:0,padding:0,[`${n}-item, ${n}-submenu-title`]:{paddingInline:`${2*o}px ${c}px`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:u,background:"transparent",borderRadius:p,boxShadow:"none",transformOrigin:"0 0","&::before":{position:"absolute",inset:`${v}px 0 0`,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'}},"&-placement-rightTop::before":{top:0,insetInlineStart:v},[`> ${n}`]:Object.assign(Object.assign(Object.assign({borderRadius:p},I(e)),E(e)),{[`${n}-item, ${n}-submenu > ${n}-submenu-title`]:{borderRadius:g},[`${n}-submenu-title::after`]:{transition:`transform ${r} ${l}`}})}}),E(e)),{[`&-inline-collapsed ${n}-submenu-arrow,\n        &-inline ${n}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${b})`},"&::after":{transform:`rotate(45deg) translateX(-${b})`}},[`${n}-submenu-open${n}-submenu-inline > ${n}-submenu-title > ${n}-submenu-arrow`]:{transform:`translateY(-${.2*$}px)`,"&::after":{transform:`rotate(-45deg) translateX(-${b})`},"&::before":{transform:`rotate(45deg) translateX(${b})`}}})},{[`${t}-layout-header`]:{[n]:{lineHeight:"inherit"}}}]},P=(e,t)=>(0,f.Z)("Menu",((e,n)=>{let{overrideComponentToken:o}=n;if(!1===t)return[];const{colorBgElevated:r,colorPrimary:i,colorError:l,colorErrorHover:a,colorTextLightSolid:s}=e,{controlHeightLG:c,fontSize:d}=e,m=d/7*5,u=(0,v.TS)(e,{menuItemHeight:c,menuItemPaddingInline:e.margin,menuArrowSize:m,menuHorizontalHeight:1.15*c,menuArrowOffset:.25*m+"px",menuPanelMaskInset:-7,menuSubMenuBg:r}),f=new p.C(s).setAlpha(.65).toRgbString(),w=(0,v.TS)(u,{colorItemText:f,colorItemTextHover:s,colorGroupTitle:f,colorItemTextSelected:s,colorItemBg:"#001529",colorSubItemBg:"#000c17",colorItemBgActive:"transparent",colorItemBgSelected:i,colorActiveBarWidth:0,colorActiveBarHeight:0,colorActiveBarBorderSize:0,colorItemTextDisabled:new p.C(s).setAlpha(.25).toRgbString(),colorDangerItemText:l,colorDangerItemTextHover:a,colorDangerItemTextSelected:s,colorDangerItemBgActive:l,colorDangerItemBgSelected:l,menuSubMenuBg:"#001529",colorItemTextSelectedHorizontal:s,colorItemBgSelectedHorizontal:i},Object.assign({},o));return[j(u),h(u),S(u),O(u,"light"),O(w,"dark"),y(u),(0,g.Z)(u),(0,$.oN)(u,"slide-up"),(0,$.oN)(u,"slide-down"),(0,b._y)(u,"zoom-big")]}),(e=>{const{colorPrimary:t,colorError:n,colorTextDisabled:o,colorErrorBg:r,colorText:i,colorTextDescription:l,colorBgContainer:a,colorFillAlter:s,colorFillContent:c,lineWidth:d,lineWidthBold:m,controlItemBgActive:u,colorBgTextHover:p}=e;return{dropdownWidth:160,zIndexPopup:e.zIndexPopupBase+50,radiusItem:e.borderRadiusLG,radiusSubMenuItem:e.borderRadiusSM,colorItemText:i,colorItemTextHover:i,colorItemTextHoverHorizontal:t,colorGroupTitle:l,colorItemTextSelected:t,colorItemTextSelectedHorizontal:t,colorItemBg:a,colorItemBgHover:p,colorItemBgActive:c,colorSubItemBg:s,colorItemBgSelected:u,colorItemBgSelectedHorizontal:"transparent",colorActiveBarWidth:0,colorActiveBarHeight:m,colorActiveBarBorderSize:d,colorItemTextDisabled:o,colorDangerItemText:n,colorDangerItemTextHover:n,colorDangerItemTextSelected:n,colorDangerItemBgActive:r,colorDangerItemBgSelected:r,itemMarginInline:e.marginXXS}}))(e);var z=n(7494);const k=e=>{const{prefixCls:t,className:n,dashed:i}=e,l=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(e,["prefixCls","className","dashed"]),{getPrefixCls:a}=r.useContext(u.E_),c=a("menu",t),d=s()({[`${c}-item-divider-dashed`]:!!i},n);return r.createElement(o.iz,Object.assign({className:d},l))};var B=n(3868),T=n(1048),N=n(8557);const D=(0,r.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),H=e=>{var t;const{className:n,children:l,icon:a,title:c,danger:d}=e,{prefixCls:u,firstLevel:p,direction:g,disableMenuItemTitleTooltip:$,inlineCollapsed:b}=r.useContext(D),{siderCollapsed:f}=r.useContext(T.D);let v=c;void 0===c?v=p?l:"":!1===c&&(v="");const h={title:v};f||b||(h.title=null,h.open=!1);const y=(0,B.Z)(l).length;let w=r.createElement(o.ck,Object.assign({},(0,i.Z)(e,["title","icon","danger"]),{className:s()({[`${u}-item-danger`]:d,[`${u}-item-only-child`]:1===(a?y+1:y)},n),title:"string"==typeof c?c:void 0}),(0,m.Tm)(a,{className:s()((0,m.l$)(a)?null===(t=a.props)||void 0===t?void 0:t.className:"",`${u}-item-icon`)}),(e=>{const t=r.createElement("span",{className:`${u}-title-content`},l);return(!a||(0,m.l$)(l)&&"span"===l.type)&&l&&e&&p&&"string"==typeof l?r.createElement("div",{className:`${u}-inline-collapsed-noicon`},l.charAt(0)):t})(b));return $||(w=r.createElement(N.Z,Object.assign({},h,{placement:"rtl"===g?"left":"right",overlayClassName:`${u}-inline-collapsed-tooltip`}),w)),w},R=e=>{var t;const{popupClassName:n,icon:l,title:a,theme:c}=e,d=r.useContext(D),{prefixCls:u,inlineCollapsed:p,theme:g,mode:$}=d,b=(0,o.Xl)();let f;if(l){const e=(0,m.l$)(a)&&"span"===a.type;f=r.createElement(r.Fragment,null,(0,m.Tm)(l,{className:s()((0,m.l$)(l)?null===(t=l.props)||void 0===t?void 0:t.className:"",`${u}-item-icon`)}),e?a:r.createElement("span",{className:`${u}-title-content`},a))}else f=p&&!b.length&&a&&"string"==typeof a?r.createElement("div",{className:`${u}-inline-collapsed-noicon`},a.charAt(0)):r.createElement("span",{className:`${u}-title-content`},a);const v=r.useMemo((()=>Object.assign(Object.assign({},d),{firstLevel:!1})),[d]),h="horizontal"===$?[0,8]:[10,0];return r.createElement(D.Provider,{value:v},r.createElement(o.Wd,Object.assign({popupOffset:h},(0,i.Z)(e,["icon"]),{title:f,popupClassName:s()(u,n,`${u}-${c||g}`)})))};var A=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};function M(e){return(e||[]).map(((e,t)=>{if(e&&"object"==typeof e){const n=e,{label:i,children:l,key:a,type:s}=n,c=A(n,["label","children","key","type"]),d=null!=a?a:`tmp-${t}`;return l||"group"===s?"group"===s?r.createElement(o.BW,Object.assign({key:d},c,{title:i}),M(l)):r.createElement(R,Object.assign({key:d},c,{title:i}),M(l)):"divider"===s?r.createElement(k,Object.assign({key:d},c)):r.createElement(H,Object.assign({key:d},c),i)}return null})).filter((e=>e))}function Z(e){return r.useMemo((()=>e?M(e):e),[e])}const L=(0,r.forwardRef)(((e,t)=>{var n,a;const p=r.useContext(z.Z),g=p||{},{getPrefixCls:$,getPopupContainer:b,direction:f}=r.useContext(u.E_),v=$(),{prefixCls:h,className:y,theme:w="light",expandIcon:x,_internalDisableMenuItemTitleTooltip:O,inlineCollapsed:C,siderCollapsed:S,items:I,children:E,rootClassName:j,mode:k,selectable:B,onClick:T}=e,N=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(e,["prefixCls","className","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children","rootClassName","mode","selectable","onClick"]),H=(0,i.Z)(N,["collapsedWidth"]),R=Z(I)||E;null===(n=g.validator)||void 0===n||n.call(g,{mode:k});const A=(0,l.Z)((function(){var e;null==T||T.apply(void 0,arguments),null===(e=g.onClick)||void 0===e||e.call(g)})),M=g.mode||k,L=null!=B?B:g.selectable,W=r.useMemo((()=>void 0!==S?S:C),[C,S]),X={horizontal:{motionName:`${v}-slide-up`},inline:(0,d.ZP)(v),other:{motionName:`${v}-zoom-big`}},F=$("menu",h||g.prefixCls),[_,G]=P(F,!p),K=s()(`${F}-${w}`,y);let Y;if("function"==typeof x)Y=x;else{const e=x||g.expandIcon;Y=(0,m.Tm)(e,{className:s()(`${F}-submenu-expand-icon`,null===(a=null==e?void 0:e.props)||void 0===a?void 0:a.className)})}const U=r.useMemo((()=>({prefixCls:F,inlineCollapsed:W||!1,direction:f,firstLevel:!0,theme:w,mode:M,disableMenuItemTitleTooltip:O})),[F,W,f,O,w]);return _(r.createElement(z.Z.Provider,{value:null},r.createElement(D.Provider,{value:U},r.createElement(o.ZP,Object.assign({getPopupContainer:b,overflowedIndicator:r.createElement(c.Z,null),overflowedIndicatorPopupClassName:`${F}-${w}`,mode:M,selectable:L,onClick:A},H,{inlineCollapsed:W,className:K,prefixCls:F,direction:f,defaultMotions:X,expandIcon:Y,ref:t,rootClassName:s()(j,G)}),R))))})),W=L,X=(0,r.forwardRef)(((e,t)=>{const n=(0,r.useRef)(null),o=r.useContext(T.D);return(0,r.useImperativeHandle)(t,(()=>({menu:n.current,focus:e=>{var t;null===(t=n.current)||void 0===t||t.focus(e)}}))),r.createElement(W,Object.assign({ref:n},e,o))}));X.Item=H,X.SubMenu=R,X.Divider=k,X.ItemGroup=o.BW;const F=X},7204:(e,t,n)=>{n.d(t,{Fm:()=>u});var o=n(479),r=n(3787);const i=new o.E4("antMoveDownIn",{"0%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),l=new o.E4("antMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0}}),a=new o.E4("antMoveLeftIn",{"0%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),s=new o.E4("antMoveLeftOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),c=new o.E4("antMoveRightIn",{"0%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),d=new o.E4("antMoveRightOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),m={"move-up":{inKeyframes:new o.E4("antMoveUpIn",{"0%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),outKeyframes:new o.E4("antMoveUpOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0}})},"move-down":{inKeyframes:i,outKeyframes:l},"move-left":{inKeyframes:a,outKeyframes:s},"move-right":{inKeyframes:c,outKeyframes:d}},u=(e,t)=>{const{antCls:n}=e,o=`${n}-${t}`,{inKeyframes:i,outKeyframes:l}=m[t];return[(0,r.R)(o,i,l,e.motionDurationMid),{[`\n        ${o}-enter,\n        ${o}-appear\n      `]:{opacity:0,animationTimingFunction:e.motionEaseOutCirc},[`${o}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]}}}]);