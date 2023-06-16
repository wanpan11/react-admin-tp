import { lazy } from "react";
import { nanoid } from "nanoid";

const getLazyLoad = (url: string) => lazy(() => import(`@src/pages${url}`));

/**
 *
 * @description 嵌套路由配置 react-router-dom V6
 * @param {id} 唯一标识
 * @param {path} * 表示无匹配时渲染此项 多层嵌套时父级路由需要 / 结尾（react-router-dom 会以相对路径拼接默认拼接xx/xx 不手动添加/会导致报错）
 * @param {index} 默认渲染此项 index path 不能同时存在
 * @param {title} 每个对应组件会接收到 title
 * @param {notMenu} 非菜单项
 * @param {redirect} 重定向地址
 * @param {component} 对应组件 采用 lazy 懒加载模式
 * @param {childrenList} 嵌套路由 可以在父路由组件内嵌 渲染
 *
 */
const routers: Route[] = [
  {
    id: nanoid(),
    path: "/",
    title: "",
    component: getLazyLoad("/system"),
    childrenList: [
      {
        id: nanoid(),
        index: true,
        title: "首页",
        component: getLazyLoad("/system/home"),
      },
      {
        id: nanoid(),
        path: "/data",
        title: "数据报表",
        childrenList: [
          {
            id: nanoid(),
            index: true,
            title: "销售数据",
            component: getLazyLoad("/system/data/report"),
          },
        ],
      },
      {
        id: nanoid(),
        path: "/setting/",
        title: "系统设置",
        childrenList: [
          {
            id: nanoid(),
            path: "/setting/",
            title: "开发管理",
            childrenList: [
              {
                id: nanoid(),
                path: "/setting/",
                title: "参数配置",
                childrenList: [
                  {
                    id: nanoid(),
                    index: true,
                    notMenu: true,
                    title: "",
                    component: getLazyLoad("/system/setting/params"),
                  },
                  {
                    id: nanoid(),
                    path: "/setting/detail",
                    notMenu: true,
                    title: "详情",
                    component: getLazyLoad("/system/setting/detail"),
                  },
                ],
              },
              {
                id: nanoid(),
                path: "/setting/api",
                title: "接口配置",
                component: getLazyLoad("/system/setting/api"),
              },
            ],
          },
          {
            id: nanoid(),
            path: "/setting/company",
            title: "厂商管理",
            component: getLazyLoad("/system/setting/company"),
          },
        ],
      },
    ],
  },
  {
    id: nanoid(),
    path: "/login",
    title: "登录",
    component: getLazyLoad("/login"),
  },
  {
    id: nanoid(),
    path: "*",
    title: "登录",
    component: getLazyLoad("/login"),
  },
];

export default routers;
