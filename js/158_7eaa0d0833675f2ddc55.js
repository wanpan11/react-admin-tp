"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[158,989],{6158:(e,s,a)=>{a.r(s),a.d(s,{default:()=>h});var t=a(79),n=a(8825),r=a(7414),l=a(4402),o=a(5477),c=a(3872),i=a(3772),d=a(2463),u=a(6942),m=a(7989),g=a(5250);const h=()=>{const e=(0,i.s0)(),[s,a]=(0,t.useState)(!1);return(0,g.jsx)(n.Z,{className:m.default.content,children:(0,g.jsxs)(r.Z,{className:m.default.login_box,children:[(0,g.jsx)("div",{className:m.default.box}),(0,g.jsx)("h1",{className:"mb-9 text-center text-2xl",children:"欢迎登录"}),(0,g.jsxs)(l.Z,{name:"basic",layout:"vertical",onFinish:async s=>{a(!0);const t=await(n=s,d.ZP.send("/login","post",n));var n;a(!1),localStorage.setItem("token",t.data.token),localStorage.setItem("userInfo",JSON.stringify(t.data.userInfo)),u.Z.setLogin(!0,t.data.userInfo),e("/")},requiredMark:"optional",initialValues:{account:"管理小明",password:"123"},className:"w-80",children:[(0,g.jsx)(l.Z.Item,{label:"账号",name:"account",rules:[{required:!0,message:"请输入你的账号!"}],children:(0,g.jsx)(o.Z,{className:m.default.login_input,placeholder:"请输入你的账号"})}),(0,g.jsx)(l.Z.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入你的密码！"}],children:(0,g.jsx)(o.Z.Password,{className:m.default.login_input,placeholder:"请输入你的密码"})}),(0,g.jsx)("div",{className:"flex cursor-pointer justify-between text-neutral-400",children:(0,g.jsx)("div",{children:"联系管理员"})}),(0,g.jsx)(c.ZP,{block:!0,size:"large",type:"primary",htmlType:"submit",className:"mb-4 mt-9",loading:s,children:"登录"})]})]})})}},2463:(e,s,a)=>{a.d(s,{ZP:()=>r});var t=a(3785),n=a(7150);const r=new class{baseConfig={baseURL:"",timeout:3e4};constructor(e){this.instance=t.Z.create(Object.assign(this.baseConfig,e)),this.instance.interceptors.request.use((e=>e)),this.instance.interceptors.response.use((e=>e.data),(e=>(console.error("请求异常 ===> ",e.message),n.Z.error({message:`请求异常 ===> ${e.message}`}),{code:911,data:{}})))}send(e,s="get",a,t){const n={...t};return n.url=e,n.method=s,"get"===s.toLocaleLowerCase()?n.params=a:n.data=a,this.instance.request(n)}}({})},7989:(e,s,a)=>{a.r(s),a.d(s,{default:()=>t});const t={content:"K1CsKynxnUkgrTUlnOg9",login_box:"lHkv7XYB9CsC8EompYzJ",box:"AWhXdE0cSvRqapOmrHIy",login_input:"Wna9IQF_mtFAMSL1p6GE"}}}]);