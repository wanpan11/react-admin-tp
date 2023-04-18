import { lazy } from "react";

const getLazyLoad = (url: string) => lazy(() => import(`@src/pages${url}`));

/**
 *
 * @description 嵌套路由配置 react-router-dom V6
 * @param {id} 唯一标识
 * @param {path} * 表示无匹配时 渲染此项
 * @param {index} 默认渲染此项 index path 不能同时存在
 * @param {title} 每个对应组件会接收到 title
 * @param {component} 对应组件 采用 lazy 懒加载模式
 * @param {childrenList} 嵌套路由 可以在父路由组件内嵌 渲染
 *
 */
const routers: Route[] = [
  {
    id: "0",
    path: "/",
    title: "",
    component: getLazyLoad("/system"),
    childrenList: [
      {
        id: "11",
        index: true,
        title: "首页",
        component: getLazyLoad("/system/home"),
      },
      {
        id: "12",
        path: "/data",
        title: "数据报表",
        childrenList: [
          {
            id: "121",
            title: "销售数据",
            index: true,
            component: getLazyLoad("/system/data/report"),
          },
        ],
      },
      {
        id: "13",
        path: "/setting",
        title: "系统设置",
        childrenList: [
          {
            id: "131",
            title: "厂商管理",
            index: true,
            component: getLazyLoad("/system/setting/company"),
          },
          {
            id: "132",
            title: "开发管理",
            path: "/setting/dev",
            component: getLazyLoad("/system/setting/dev"),
          },
        ],
      },
    ],
  },
  {
    id: "1",
    path: "/login",
    title: "登录",
    component: getLazyLoad("/login"),
  },
  {
    id: "2",
    path: "*",
    title: "登录",
    component: getLazyLoad("/login"),
  },
];

export default routers;
