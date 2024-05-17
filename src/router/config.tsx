import { nanoid } from "nanoid";
import { ComponentType, ReactNode, Suspense, lazy } from "react";
import { BarChartOutlined, BoxPlotOutlined, OneToOneOutlined, RadarChartOutlined } from "@ant-design/icons";
import Redirect from "@src/components/Redirect";
import Loading from "@src/components/Loading";
import { Outlet, Route } from "react-router-dom";

const modules = import.meta.glob<{ default: ComponentType<any> }>("../pages/**/*.tsx");
const getLazyLoad = (url: string) => lazy(modules[`../pages${url}.tsx`]);

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
const GLOBAL_ROUTERS = {
  // 登录页
  LOGIN_PAGE: {
    path: "/login",
    title: "登录",
    component: getLazyLoad("/login/index"),
  } as Route,

  // 动态路由页面
  APP_PAGE: [
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
    arr.forEach(element => {
      const id = nanoid();
      const { path, index, title, childrenList, notMenu, icon } = element;

      let newPath = path as string;

      // 多级嵌套 补全 /
      if (path?.startsWith("/") && childrenList?.length) {
        newPath = (path + "/").replace(/\/\/+/g, "/");
      }

      const routeObj = {
        ...element,
        id,
        path: index ? partePath : newPath,
        childrenList: [],
      };

      const menuObj = {
        key: id,
        path: index ? partePath : (path as string),
        label: title ? title : "",
        icon: icon,
        children: [],
      };

      router.push(routeObj);
      if (!notMenu) {
        menu.push(menuObj);
      }

      if (childrenList?.length) {
        transform(childrenList, routeObj.childrenList, menuObj.children, newPath);
      }
    });
  }
  transform(routers, router, routerMenu);

  return { router, routerMenu: routerMenu[0]?.children as MenuItem[] };
}

/**
 * 获取路由面包屑路径
 */
export const getPathRecord = (routes: Route[]) => {
  const obj: { [key: string]: string } = {};

  const getBreadCrumbConf = (arr: Route[], parentTitle = "") => {
    arr.forEach(e => {
      let newTitle = "";
      const { path, title = "", childrenList = [] } = e;

      newTitle = parentTitle ? `${parentTitle}${title ? " / " + title : ""}` : title;

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
};

/**
 * 获取 <Route/> 组件
 */
export const getRoute = (routers: Route[] | Route) => {
  const list = Array.isArray(routers) ? routers : [routers];
  return list.map(e => {
    const { id = nanoid(), path, title, index, redirect, component: Component, childrenList = [] } = e;

    let element: ReactNode = null;

    if (Component || redirect) {
      element = redirect ? (
        <Redirect redirect={redirect}></Redirect>
      ) : (
        <Suspense fallback={<Loading full />}>
          <Component title={title}>{childrenList.length ? <Outlet /> : null}</Component>
        </Suspense>
      );
    }

    const jsx = index ? (
      <Route key={id} element={element} index></Route>
    ) : (
      <Route key={id} element={element} path={path}>
        {childrenList.length ? getRoute(childrenList) : undefined}
      </Route>
    );

    return jsx;
  });
};

export default GLOBAL_ROUTERS;
