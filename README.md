## react-project

---

> 项目概览

- scripts 打包相关
- env 环境变量
- src
  - api 接口相关
  - assets 资源文件
  - components 公用组件
  - config 公用参数
  - layout 布局
  - mock 模拟数据
  - pages 路由页面
  - store
  - types
  - utils

> 注意

- 需要安装 ESLint、Prettier 插件
- 安装完项目依赖后再提交代码，保持项目整洁
- 环境变量和打包配置动态加载

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
