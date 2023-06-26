"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[564],{564:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L}),n(6067),n(882),n(8633),n(5036),n(4762),n(1172),n(7698),n(887),n(3699),n(2947);var r=n(270),a=n(1470),i=n(7231),l=n(366),o=n.n(l),s=n(79),c=(n(7528),n(4402)),u=n(3872),d=n(9724),p=n(5827),b=n(1372),m=n(5477),f=n(8526),h=n(2080),y=n(5250),x=d.Z.RangePicker,j=function(e,t){switch(e){case"radio":return(0,y.jsx)(p.ZP.Group,{options:t.options,optionType:"button",buttonStyle:"solid",disabled:t.disable});case"node":return t.leftNode;case"switch":return(0,y.jsx)(b.Z,{disabled:t.disable});case"input":return(0,y.jsx)(m.Z,{placeholder:t.placeholder,disabled:t.disable});case"numberInput":return(0,y.jsx)(f.Z,{placeholder:t.placeholder,disabled:t.disable});case"select":return(0,y.jsx)(h.Z,{placeholder:t.placeholder,disabled:t.disable,options:t.options,className:"min-w-150px"});case"date":return(0,y.jsx)(x,{disabled:t.disable,placeholder:["开始时间","结束时间"]});case"textArea":return(0,y.jsx)(m.Z.TextArea,{placeholder:t.placeholder,disabled:t.disable,showCount:!0,maxLength:500,className:"m-b-24px h-120px"})}},g=function(e){var t=e.filterInfo,n=e.initialValues,r=e.onSubmit,a=e.reset,l=e.loading,o=e.compact,d=void 0!==o&&o,p=c.Z.useForm(),b=(0,i.Z)(p,1)[0];return(0,s.useEffect)((function(){n&&b.setFieldsValue(n)}),[]),(0,y.jsx)("div",{className:"box-border border-r-24px bg-white p-24px",children:(0,y.jsxs)(c.Z,{form:b,colon:!1,layout:"inline",onFinish:function(e){r&&r(e)},className:"relative p-r-200px",children:[t.length>0?t.map((function(e){return(0,y.jsx)(c.Z.Item,{name:e.name,label:e.label,children:j(e.type,e)},e.name)})):null,(0,y.jsxs)("div",{className:d?"":"absolute right-24px bottom-0",children:[a?(0,y.jsx)(u.ZP,{htmlType:"reset",children:"重置"}):null,(0,y.jsx)(u.ZP,{htmlType:"submit",type:"primary",loading:l,m:"l-24px",children:"查询"})]})]})})};const v=(0,s.memo)(g);var Z=n(609),O=function(e){var t=e.open,n=e.title,r=e.editInfo,a=e.initialValues,l=e.onCancel,o=e.onOk,u=e.noFooter,d=c.Z.useForm(),p=(0,i.Z)(d,1)[0];return(0,s.useEffect)((function(){t&&r.length&&(a?p.setFieldsValue(a):r.forEach((function(e){e.initialValue&&p.setFieldValue(e.name,e.initialValue)})))}),[t,a,p,r]),(0,y.jsx)(Z.Z,{open:t,title:n,okText:"确定",cancelText:"取消",width:800,closable:!!u,destroyOnClose:!0,maskClosable:!1,onCancel:l,onOk:function(){p.submit()},afterClose:function(){p.resetFields()},footer:u?null:void 0,children:(0,y.jsx)("div",{className:"min-h-300px p-32px p-l-0 p-r-0",children:(0,y.jsx)(c.Z,{form:p,labelCol:{span:5},labelAlign:"right",onFinish:o,children:r.map((function(e){var t;return e.hide?null:"blockNode"===e.type?(0,y.jsxs)("span",{children:[" ",e.label," "]},e.name):(0,y.jsx)(c.Z.Item,{wrapperCol:{span:"select"===e.type?8:12},name:e.name,label:e.label,rules:[e.rule],initialValue:"radio"===e.type?null===(t=e.options)||void 0===t?void 0:t[0].value:void 0,children:j(e.type,e)},e.name)}))})})})};const P=(0,s.memo)(O);var w=n(7150),k=n(7414),C=n(664),I=n(3151),S=n(666),D=function(e){return S.ZP.send("/company/insert","post",e,{headers:{"Content-Type":"application/json"}})},F=function(e){return S.ZP.send("/company/list","get",e)},N=n(9925);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=[{name:"projectName",type:"input",label:"厂商名称"}],q=[{name:"category",label:"类型",type:"radio",rule:{required:!0,message:"请选择厂商类型！"},options:[{label:"研发",value:1},{label:"发行",value:2},{label:"研发一体",value:3}]},{label:"厂商名称",name:"name",type:"input",rule:{required:!0,message:"请输入厂商名称！"}},{label:"联系人",name:"contact",type:"input",rule:{required:!0,message:"请输入厂商类型联系人！"}},{label:"联系电话",name:"mobile",type:"input",rule:{required:!0,message:"请输入正确的厂商联系电话！",pattern:/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/}}];const L=function(){var e=(0,s.useState)(!1),t=(0,i.Z)(e,2),n=t[0],a=t[1],l=(0,s.useState)({}),c=(0,i.Z)(l,2),d=c[0],p=c[1],b=(0,s.useState)(N.rX),m=(0,i.Z)(b,2),f=m[0],h=(m[1],(0,s.useState)(null)),x=(0,i.Z)(h,2),j=x[0],g=x[1],Z=(0,I.Z)(F,{defaultParams:[T(T({},f),d)],loadingDelay:300}),O=Z.data,S=Z.error,V=Z.loading,L=Z.run;S&&console.error("companyService.list ===> ",S);var A=function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D(t);case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),w.Z.error({message:"companyService.insert ===> "+e.t0.message});case 9:a(!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),R=[{title:"ID",dataIndex:"id"},{title:"类型",dataIndex:"category"},{title:"厂商名称",dataIndex:"name"},{title:"联系人",dataIndex:"contact"},{title:"联系电话",dataIndex:"mobile"},{title:"创建时间",dataIndex:"updateTime"},{title:"编辑",key:"edit",render:function(e){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(u.ZP,{type:"link",children:"删除"}),(0,y.jsx)(u.ZP,{type:"link",onClick:function(){a(!0),g(e)},children:"编辑"})]})}}];return(0,y.jsxs)("div",{children:[(0,y.jsx)(v,{loading:V,filterInfo:E,onSubmit:function(e){L(T(T({},N.rX),e)),p(e)},reset:!0}),(0,y.jsxs)(k.Z,{m:"t-12px",children:[(0,y.jsx)("div",{m:"b-12px",children:(0,y.jsx)(u.ZP,{type:"primary",onClick:function(){a(!0)},children:"新建厂商"})}),(0,y.jsx)(C.Z,{dataSource:null==O?void 0:O.data.list,columns:R,rowKey:"id",loading:V})]}),(0,y.jsx)(P,{open:n,title:"厂商编辑",editInfo:q,onCancel:function(){a(!1),g(null)},onOk:function(e){A(e)},initialValues:j})]})}},666:(e,t,n)=>{n.d(t,{ZP:()=>u});var r=n(319),a=n(8024),i=n(1470),l=(n(249),n(6067),n(882),n(8633),n(5036),n(4762),n(1172),n(7698),n(887),n(3699),n(2947),n(3785)),o=n(7150);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var c=911;const u=new(function(){function e(t){(0,r.Z)(this,e),(0,i.Z)(this,"baseConfig",{baseURL:"",timeout:3e4}),this.instance=l.Z.create(Object.assign(this.baseConfig,t)),this.instance.interceptors.request.use((function(e){return e})),this.instance.interceptors.response.use((function(e){return e.data}),(function(e){return console.error("请求异常 ===> ",e.message),o.Z.error({message:"请求异常 ===> ".concat(e.message)}),{code:c,data:{}}}))}return(0,a.Z)(e,[{key:"send",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",n=arguments.length>2?arguments[2]:void 0,r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},arguments.length>3?arguments[3]:void 0);return r.url=e,r.method=t,"get"===t.toLocaleLowerCase()?r.params=n:r.data=n,this.instance.request(r)}}]),e}())({})}}]);