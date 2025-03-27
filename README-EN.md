## 📊 react-admin-tp

React typescript backend management system project template, built-in dynamic nested routing, data mock, tailwindcss 🌙 Dark mode, dynamic breadcrumbs, custom form components。[中文](./README.md)

![Static Badge](https://img.shields.io/badge/react-black?logo=react&style=for-the-badge)
![Static Badge](https://img.shields.io/badge/tailwindcss-black?logo=tailwindcss&style=for-the-badge)
![Static Badge](https://img.shields.io/badge/antdesign-black?logo=antdesign&style=for-the-badge)
![Static Badge](https://img.shields.io/badge/mobx-black?logo=mobx&style=for-the-badge)
![Static Badge](https://img.shields.io/badge/webpack-black?logo=webpack&style=for-the-badge)
![Static Badge](https://img.shields.io/badge/vite-black?logo=vite&style=for-the-badge)

<image src='./src/assets/images/admin.png' style='border-radius:10px' >

### webpack or vite

![Static Badge](https://img.shields.io/badge/webpack-black?logo=webpack&style=for-the-badge)
![Static Badge](https://img.shields.io/badge/vite-black?logo=vite&style=for-the-badge)

> Recommend using [react-tp-cli](https://github.com/wanpan11/react-template-cli)

#### main dependency

- axios
- swr
- tailwindcss
- ant-design
- mobx

### scripts

- build entry
  - webpack.config.js
  - vite.config.ts
- xxxx.config.js (env build config)

### env

- .env (global)
- .env.xxxx (dynamic)

### src

- api
- assets
- components
- config
- layout
- mock
- pages
- router
- store
- types
- utils

### install

```
// install pnpm
npm i pnpm -g

// install dependencies
pnpm i
```

### run

```
// dev
pnpm start

// pro
pnpm build
```

### dynamic router

```ts
// Configuration reference
GLOBAL_ROUTERS.APP_PAGE;

// set your router config
store.setDynamicRoutes(routerConfig);
```

> If you have any questions, please raise them issue
> [issue☹ star★](https://github.com/wanpan11/react-admin-tp)

[![Security Status](https://www.murphysec.com/platform3/v31/badge/1673294894238294016.svg)](https://www.murphysec.com/console/report/1673294894200545280/1673294894238294016)
