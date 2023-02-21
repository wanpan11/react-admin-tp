import { lazy } from "react";

const getLazyLoad = (url: string) => lazy(() => import(`@src/${url}/index`));

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
    title: "",
    component: getLazyLoad("pages"),
    childrenList: [
      {
        path: "*",
        title: "类型选择",
        component: getLazyLoad("pages/scene"),
      },
      {
        path: "game",
        title: "",
        component: getLazyLoad("pages/game"),
        childrenList: [
          {
            path: "*",
            title: "首页",
            component: getLazyLoad("pages/game/home"),
          },
          {
            path: "list_1",
            title: "详情页_1",
            component: getLazyLoad("pages/game/list_1"),
          },
          {
            path: "list_2",
            title: "详情页_2",
            component: getLazyLoad("pages/game/list_2"),
          },
        ],
      },
    ],
  },
];

export default routers;
