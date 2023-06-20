import { lazy } from "react";

const getLazyLoad = (url: string) => lazy(() => import(`@src/pages${url}`));

/**
 *
 * @description 嵌套路由配置 react-router-dom V6
 * @param {id} 唯一标识
 * @param {path} * 表示无匹配时渲染此项
 * @param {index} 默认渲染此项 index path 不能同时存在
 * @param {title} 每个对应组件会接收到 title
 * @param {notMenu} 非菜单项
 * @param {redirect} 重定向地址
 * @param {component} 对应组件 采用 lazy 懒加载模式
 * @param {childrenList} 嵌套路由 可以在父路由组件内嵌 渲染
 * @description routers[0].childrenList 作为菜单路由起始
 */
const routers: Route[] = [
  {
    path: "/",
    component: getLazyLoad("/system"),
    childrenList: [
      {
        index: true,
        title: "首页",
        component: getLazyLoad("/system/home"),
      },
      {
        path: "/data",
        title: "数据报表",
        childrenList: [
          {
            index: true,
            title: "销售数据",
            component: getLazyLoad("/system/data/report"),
          },
        ],
      },
      {
        path: "/setting",
        title: "系统设置",
        childrenList: [
          {
            path: "/setting",
            title: "开发管理",
            childrenList: [
              {
                path: "/setting",
                title: "参数配置",
                childrenList: [
                  {
                    index: true,
                    notMenu: true,
                    component: getLazyLoad("/system/setting/params"),
                  },
                  {
                    path: "/setting/detail",
                    notMenu: true,
                    title: "详情",
                    component: getLazyLoad("/system/setting/detail"),
                  },
                ],
              },
              {
                path: "/setting/api",
                title: "接口配置",
                component: getLazyLoad("/system/setting/api"),
              },
            ],
          },
          {
            path: "/setting/company",
            title: "厂商管理",
            component: getLazyLoad("/system/setting/company"),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    title: "登录",
    component: getLazyLoad("/login"),
  },
  {
    path: "*",
    component: getLazyLoad("/login"),
  },
];

export default routers;
