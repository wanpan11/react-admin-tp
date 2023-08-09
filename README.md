## 📊 react-admin-tp 后台管理系统项目模版

react-typescript 后台管理系统项目模版、内置动态嵌套路由、数据 mock、tailwindcss、🌙 暗夜模式、动态面包屑、自定义 form 组件。<br/>

[![Security Status](https://www.murphysec.com/platform3/v31/badge/1673294894238294016.svg)](https://www.murphysec.com/console/report/1673294894200545280/1673294894238294016)<br/>
![Static Badge](https://img.shields.io/badge/react-black?logo=react&style=for-the-badge)
![Static Badge](https://img.shields.io/badge/tailwindcss-black?logo=tailwindcss&style=for-the-badge)
![Static Badge](https://img.shields.io/badge/antdesign-black?logo=antdesign&style=for-the-badge)
![Static Badge](https://img.shields.io/badge/mobx-black?logo=mobx&style=for-the-badge)
![Static Badge](https://img.shields.io/badge/webpack-black?logo=webpack&style=for-the-badge)
![Static Badge](https://img.shields.io/badge/vite-black?logo=vite&style=for-the-badge)

<image src='./src/assets/images/admin.png' style='border-radius:10px' >

### 🏠 项目概览

#### 构建工具任选 webpack vite

![Static Badge](https://img.shields.io/badge/webpack-black?logo=webpack&style=for-the-badge)
![Static Badge](https://img.shields.io/badge/vite-black?logo=vite&style=for-the-badge)

> 推荐使用脚手架安装模版 [react-tp-cli](https://github.com/wanpan11/react-template-cli)

#### 主要依赖库

- axios
- ahooks
- tailwindcss
- ant-design
- mobx (轻微使用)

#### scripts 打包相关

- 打包入口文件
  - webpack.config.js
  - vite.config.ts
- xxxx.config.js 不同环境打包配置

#### env 环境变量

- .env 全局环境变量
- .env.xxxx 动态环境变量

```
新增环境需要在 scripts 里配置相应指令 cross-env NODE_ENV=(你的环境名)
环境变量文件 你的环境名.config.js .env.你的环境名 即可自动加载
```

---

### 项目结构

#### src

- api 接口相关
- assets 资源文件
- components 公用组件
- config 公用参数
- layout 公用布局
- mock 模拟数据
- pages 路由页面
- router 路由表 嵌套路由组件
- store
- types
- utils

---

> 注意

- 需要安装 ESLint、Prettier、Tailwind CSS IntelliSense
  插件（墙裂推荐安装）
- 环境变量和打包配置动态加载
- 安装完项目依赖后再提交代码，保持项目整洁
- homepage 相关文件、构建指令皆可删除

安装依赖

```
// 没有pnpm的话先安装pnpm
npm i pnpm -g

// 安装依赖
pnpm i
```

项目启动

```
// dev
pnpm start

// pro
pnpm build
```

> 打包/开发相关

- 请求代理 devServer.proxy
- src\api\request.ts 可添加请求拦截相关处理逻辑

> 如有问题请提 issue

[仓库地址 issue☹ star★](https://github.com/wanpan11/react-admin-tp)
