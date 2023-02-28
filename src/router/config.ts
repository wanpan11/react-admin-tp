import { lazy } from "react";
import { getRouterMap } from "@src/utils/index";

const getLazyLoad = (url: string) => lazy(() => import(`@src/pages${url}`));

/**
 *
 * @description 嵌套路由配置 react-router-dom V6 参考：https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
 * @param {path} * 表示无匹配时 渲染此项
 * @param {title} 每个对应组件会接受到 title
 * @param {component} 对应组件 采用 lazy 懒加载模式
 * @param {childrenList} 嵌套路由 可以在父路由组件内嵌 渲染
 *
 */
const routers: Routers = [
  {
    path: "*",
    title: "登录",
    component: getLazyLoad("/login"),
  },
  {
    path: "register",
    title: "登录",
    component: getLazyLoad("/register"),
  },
  {
    path: "game",
    title: "",
    component: getLazyLoad("/game"),
    childrenList: [
      {
        path: "",
        index: true,
        title: "首页",
        component: getLazyLoad("/game/home"),
      },
      {
        path: "projectManage",
        title: "游戏接入 / 项目发行",
        component: getLazyLoad("/game/gameAccess/projectManage"),
      },
      {
        path: "releaseManage",
        title: "游戏接入 / 发行管理",
        component: getLazyLoad("/game/gameAccess/releaseManage"),
      },
    ],
  },
];

export const routerMap = getRouterMap(routers);

console.log("routerMap ===> ", routerMap);

export default routers;
