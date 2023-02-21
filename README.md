## react-project

---

> 项目概览

- axios 请求模块 src/api
- 路由模块 src/router (lazy 懒加载模式)
- mobx store 模块 src/store
- 基于 antd 的 UI 框架
- 支持 less、css modules

> 注意

- 需要安装 ESLint、Prettier 插件
- 安装完项目依赖后再提交代码，保持项目整洁

---

> 安装依赖

```
// 没有pnpm的话先安装pnpm
npm i pnpm -g

// 安装依赖
pnpm i
```

> 项目启动

```
// dev
pnpm start

// pro
pnpm build
```

> 打包配置

- webpack.config.js
- 请求代理 devServer.proxy (基于 http-proxy-middleware)

> 嵌套路由

- src/router/config.js 路由表
- src/router/index.jsx 嵌套路由组件
