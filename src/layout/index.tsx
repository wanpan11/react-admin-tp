import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Layout, Menu, ConfigProvider } from "antd";
import BreadCrumb from "@src/components/BreadCrumb";
import { Link } from "react-router-dom";
import MobxContext from "@src/store/context";
import { colorPrimary } from "@src/config/index";
import MenuHeader from "./header";
import { TabInfo, MenuItem } from "@src/types/index";
import store from "@src/store/store";
import { observer } from "mobx-react-lite";
import lessStyle from "./index.module.less";

const { Content, Sider } = Layout;

const AppLayout = observer(({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const { tabList, routerMap } = store;

  const { topKey, leftKey } = useMemo(() => {
    let parentStr = "";
    const getCurrentId = (arr: TabInfo[], parteId = "") => {
      arr.forEach((e: TabInfo) => {
        const { childrenList = [], path, id } = e;

        if (path === pathname) {
          parentStr = parteId ? parteId + "&" + id : id;
        }

        let newParentStr = "";
        if (childrenList.length) {
          if (parteId) {
            newParentStr = `${parteId}_${id}`;
          } else {
            newParentStr = `${id}`;
          }
          getCurrentId(childrenList, newParentStr);
        }
      });
    };
    getCurrentId(tabList);

    const keys = parentStr?.split("&");
    const topKey = keys[0];
    const leftKey = keys[keys.length - 1];
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

      <Layout className={lessStyle.container}>
        {menuList.length ? (
          <Sider theme="light">
            <div style={{ height: "28px" }}></div>
            <Menu selectedKeys={[leftKey]} mode="inline" items={menuList} />
          </Sider>
        ) : null}

        <Layout>
          <Content style={{ margin: "0 16px" }}>
            <BreadCrumb routerMap={routerMap} />

            <div className={lessStyle.content}>
              <MobxContext.Provider value={store}>
                {children}
              </MobxContext.Provider>
            </div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
});

export default AppLayout;
