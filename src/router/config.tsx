import type { ReactNode } from "react";
import Loading from "&src/components/Loading";
import Redirect from "&src/components/Redirect";
import { BarChartOutlined, BoxPlotOutlined, OneToOneOutlined, RadarChartOutlined } from "@ant-design/icons";
import { nanoid } from "nanoid";

import { lazy, Suspense } from "react";
import { Outlet, Route } from "react-router-dom";

const getLazyLoad = (url: string) => lazy(async () => import(`&src/pages${url}`));

// 菜单图标映射
const iconMapping: Record<string, ReactNode> = {
  report: <BarChartOutlined />,
  setting: <RadarChartOutlined />,
  api: <BoxPlotOutlined />,
  company: <OneToOneOutlined />,
};

/**
 *
 * @description 嵌套路由配置 react-router-dom V6
 * @param {path} * 表示无匹配时渲染此项 嵌套路由 path 同父级即可
 * @param {title} 每个对应组件会接收到 title
 * @param {index} 默认渲染此项 index path 不能同时存在
 * @param {icon} 菜单图标 key
 * @param {notMenu} 非菜单项
 * @param {redirect} 重定向地址
 * @param {component} 对应组件路径 采用 lazy 懒加载模式
 * @param {childrenList} 嵌套路由 可以在父路由组件内嵌 渲染
 *
 */
const GLOBAL_ROUTERS = {
  // 登录页
  LOGIN_PAGE: {
    path: "/login",
    title: "登录",
    component: "/login/index",
  } as Route,

  // 动态路由页面
  APP_PAGE: [
    {
      path: "/",
      component: "/system/index",
      childrenList: [
        {
          title: "首页",
          index: true,
          component: "/system/home/index",
        },
        {
          path: "/data",
          title: "数据报表",
          childrenList: [
            {
              title: "销售数据",
              index: true,
              icon: "report",
              component: "/system/data/report",
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
                  icon: "setting",
                  childrenList: [
                    {
                      index: true,
                      notMenu: true,
                      component: "/system/setting/params",
                    },
                    {
                      path: "/setting/detail",
                      title: "详情",
                      notMenu: true,
                      component: "/system/setting/detail",
                    },
                  ],
                },
                {
                  path: "/setting/api",
                  title: "接口配置",
                  icon: "api",
                  component: "/system/setting/api",
                },
              ],
            },
            {
              path: "/setting/company",
              title: "厂商管理",
              icon: "company",
              component: "/system/setting/company",
            },
          ],
        },
      ],
    },
  ] as Route[],

  // 404
  NOT_FOUND_PAGE: {
    path: "*",
    redirect: "/login",
  } as Route,
};

/**
 * 转换 router 配置字段
 * 获取路由菜单
 */
export function transformRouter(routers: Route[]) {
  const router: Route[] = [];
  const routerMenu: MenuItem[] = [];

  function transform(arr: Route[], router: Route[], menu: MenuItem[], partePath = "") {
    arr.forEach((element) => {
      const key = nanoid();
      const { path, title, index, icon, notMenu, childrenList } = element;

      let newPath = path as string;

      // 多级嵌套 补全 /
      if (path?.startsWith("/") && childrenList?.length) {
        newPath = (`${path}/`).replace(/\/{2,}/g, "/");
      }

      const routeObj: Route = {
        ...element,
        key,
        path: index ? partePath : newPath,
        childrenList: [],
      };

      const menuObj: MenuItem = {
        key,
        path: index ? partePath : (path as string),
        label: title || "",
        icon: iconMapping[icon],
        children: [],
      };

      router.push(routeObj);
      if (!notMenu)
        menu.push(menuObj);

      if (childrenList?.length) {
        transform(childrenList, routeObj.childrenList!, menuObj.children!, newPath);
      }
    });
  }
  transform(routers, router, routerMenu);

  return { router, routerMenu: routerMenu[0]?.children as MenuItem[] };
}

/**
 * 获取路由面包屑路径
 */
export function getPathRecord(routes: Route[]) {
  const obj: Record<string, string> = {};

  const getBreadCrumbConf = (arr: Route[], parentTitle = "") => {
    arr.forEach((e) => {
      const { path, title = "", childrenList = [] } = e;
      let newTitle = title;

      if (parentTitle && title) {
        newTitle = parentTitle.includes(title) ? parentTitle : `${parentTitle} / ${title}`;
      }

      if (path) {
        if (!obj[path] || obj[path].split("/").length < newTitle.split("/").length) {
          obj[path] = newTitle;
        }
      }

      if (childrenList.length) {
        getBreadCrumbConf(childrenList, newTitle);
      }
    });
  };

  getBreadCrumbConf(routes);
  return obj;
}

/**
 * 获取 <Route/> 组件
 */
export function getRoute(routers: Route[] | Route) {
  const list = Array.isArray(routers) ? routers : [routers];
  return list.map((e) => {
    const { key = nanoid(), path, title, index, redirect, component: componentPath, childrenList = [] } = e;

    let element: ReactNode = null;
    if (redirect)
      element = <Redirect redirect={redirect}></Redirect>;
    if (componentPath) {
      const Component = getLazyLoad(componentPath);
      element = (
        <Suspense fallback={<Loading full />}>
          <Component title={title}>{childrenList.length ? <Outlet /> : null}</Component>
        </Suspense>
      );
    }

    const jsx = index
      ? (
          <Route key={key} element={element} index></Route>
        )
      : (
          <Route key={key} element={element} path={path}>
            {childrenList.length ? getRoute(childrenList) : undefined}
          </Route>
        );

    return jsx;
  });
}

export default GLOBAL_ROUTERS;
