import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Layout, Menu, ConfigProvider } from "antd";
import BreadCrumb from "@src/components/BreadCrumb";
import { Link } from "react-router-dom";
import MobxContext from "@src/store/context";
import store from "@src/store/store";
import { colorPrimary } from "@src/config/index";
import { routerMap } from "@src/router/config";
import MenuHeader from "./header";
import { TabInfo, MenuItem } from "@src/types/index";
import { observer } from "mobx-react-lite";

const { Content, Sider } = Layout;

const AppLayout = observer(({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const { tabList } = store;

  const { topKey, leftKey } = useMemo(() => {
    let topKey = "";
    let leftKey = "";

    const getTabId = (arr: TabInfo[], deep = 0) => {
      arr.forEach((e: TabInfo) => {
        const { childrenList = [], path, id } = e;

        if (path === pathname) {
          if (deep === 0) {
            topKey = id;
          }

          leftKey = id;
        }

        if (childrenList.length) {
          getTabId(childrenList, deep + 1);
        }
      });
    };
    getTabId(tabList);

    return { topKey, leftKey };
  }, [pathname, tabList]);

  const menuList = useMemo(() => {
    if (!topKey) return [];

    const getMenuList = (arr: TabInfo[]): MenuItem[] => {
      return arr.map(e => ({
        label: e.childrenList ? e.label : <Link to={e.path}>{e.label}</Link>,
        path: e.path,
        key: e.id,
        children: e.childrenList ? getMenuList(e.childrenList) : undefined,
      }));
    };

    return getMenuList(
      tabList.filter(e => e.id === topKey)?.[0]?.childrenList || []
    );
  }, [topKey, tabList]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary,
        },
      }}
    >
      <MenuHeader tabId={topKey} tabList={tabList}></MenuHeader>

      <Layout style={{ minHeight: "calc(100vh - 58px)" }}>
        {leftKey ? (
          <Sider theme="light">
            <div style={{ height: "28px" }}></div>

            <Menu selectedKeys={[leftKey]} mode="inline" items={menuList} />
          </Sider>
        ) : null}

        <Layout>
          <Content style={{ margin: "0 16px" }}>
            <BreadCrumb routerMap={routerMap} />

            <MobxContext.Provider value={store}>
              {children}
            </MobxContext.Provider>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
});

export default AppLayout;
