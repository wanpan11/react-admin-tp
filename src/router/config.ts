import { lazy } from "react";
import { getRouterMap } from "@src/utils/index";

const getLazyLoad = (url: string) => lazy(() => import(`@src/pages${url}`));

/**
 *
 * @description 嵌套路由配置 react-router-dom V6 参考：https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
 * @param {path} * 表示无匹配时 渲染此项
 * @param {index} 默认渲染此项
 * @param {title} 每个对应组件会接收到 title
 * @param {component} 对应组件 采用 lazy 懒加载模式
 * @param {childrenList} 嵌套路由 可以在父路由组件内嵌 渲染
 *
 */
const routers: Router = [
  {
    path: "*",
    title: "登录",
    component: getLazyLoad("/login"),
  },
  {
    path: "system",
    title: "",
    component: getLazyLoad("/system"),
    childrenList: [
      {
        path: "",
        index: true,
        title: "首页",
        component: getLazyLoad("/system/home"),
      },
      {
        path: "companyManage",
        title: "系统设置 / 厂商管理",
        component: getLazyLoad("/system/setting/companyManage"),
      },
    ],
  },
];

export const routerMap = getRouterMap(routers);
export default routers;
