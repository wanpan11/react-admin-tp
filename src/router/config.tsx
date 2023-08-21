import { lazy } from "react";
import {
  BarChartOutlined,
  BoxPlotOutlined,
  OneToOneOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";

const getLazyLoad = (url: string) =>
  lazy(() => import(/* @vite-ignore */ `../pages${url}.tsx`));

/**
 *
 * @description 嵌套路由配置 react-router-dom V6
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
    component: getLazyLoad("/system/index"),
    childrenList: [
      {
        index: true,
        title: "首页",
        component: getLazyLoad("/system/home/index"),
      },
      {
        path: "/data",
        title: "数据报表",
        childrenList: [
          {
            index: true,
            title: "销售数据",
            icon: <BarChartOutlined />,
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
                icon: <RadarChartOutlined />,
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
                icon: <BoxPlotOutlined />,
                component: getLazyLoad("/system/setting/api"),
              },
            ],
          },
          {
            path: "/setting/company",
            title: "厂商管理",
            icon: <OneToOneOutlined />,
            component: getLazyLoad("/system/setting/company"),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    title: "登录",
    component: getLazyLoad("/login/index"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

export default routers;
