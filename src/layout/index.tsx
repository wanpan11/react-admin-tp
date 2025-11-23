import BreadCrumb from "&src/components/BreadCrumb";
import { COLOR_PRIMARY, SPLIT_FLAG } from "&src/config";
import useRootStore, { useGetRouterConfig } from "&src/store";
import { ConfigProvider, Layout, theme } from "antd";
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuHeader from "./header";
import SiderCom from "./sider";

const { Content } = Layout;

/**
 * 处理路由菜单，根据当前路径匹配菜单项，并生成对应的tabId、menuId和侧边菜单。
 * @param routerMenu 路由菜单数组，包含所有菜单项。
 * @param pathname 当前页面的路径。
 * @returns 返回一个包含tabId、menuId和侧边菜单的数组。
 */
function menuHandle(routerMenu: MenuItem[] = [], pathname: string): [string, string, MenuItem[]] {
  let menuId = "";
  let parentStr = "";

  function getCurrentPathId(arr: MenuItem[], parent?: string) {
    if (arr.length < 0)
      return;

    arr.forEach((e) => {
      if (pathname.startsWith(e.path)) {
        parentStr = parent || `${e.key}`;

        if (!e.children?.length) {
          menuId = parent ? `${e.key}` : "";
        }
      }

      let newParentStr = "";
      if (e.children?.length) {
        if (parent) {
          newParentStr = `${parent + SPLIT_FLAG + e.key}`;
        }
        else {
          newParentStr = `${e.key}`;
        }

        getCurrentPathId(e.children, newParentStr);
      }
    });
  }
  getCurrentPathId(routerMenu);

  const tabId = parentStr.split(SPLIT_FLAG)?.[0] || `${routerMenu[0]?.key}`;
  const sider = routerMenu.filter(e => e.key === tabId)[0]?.children || [];

  function getSideMenu(arr: MenuItem[]): MenuItem[] {
    return arr.map((ele) => {
      const { path, children } = ele;

      return {
        ...ele,
        label: children?.length
          ? ele.label
          : (
              <Link to={path}>
                {" "}
                {ele.label}
              </Link>
            ),
        children: children?.length ? getSideMenu(children) : undefined,
      };
    });
  }
  const sideMenu = getSideMenu(sider);

  return [tabId, menuId, sideMenu];
}

function AppLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const darkMode = useRootStore(store => store.darkMode);
  const { routerMenu, routerPathMapping } = useGetRouterConfig();

  // 获取当前选中 menu ID
  const [tabId, menuId, sideMenu] = useMemo(() => {
    return menuHandle(routerMenu, pathname);
  }, [pathname, routerMenu]);

  const currentThem = {
    algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: { colorPrimary: COLOR_PRIMARY },
  };

  return (
    <ConfigProvider theme={currentThem}>
      <Layout className={darkMode ? "dark" : ""}>
        <MenuHeader tabId={tabId} tabList={routerMenu} />

        <Layout className="h-[calc(100vh-3.5rem)] overflow-hidden">
          {sideMenu.length ? <SiderCom selectKey={menuId} menu={sideMenu} /> : null}

          <Layout>
            <Content className="mx-3">
              <BreadCrumb routerPath={routerPathMapping} />

              <div className="h-[calc(100%-4.5rem)] overflow-auto">{children}</div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

if (process.env.PUBLIC_ENV === "development") {
  AppLayout.displayName = "AppLayout";
}

export default AppLayout;
