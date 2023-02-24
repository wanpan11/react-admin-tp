import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
// import { useRequest } from "ahooks";
import { Layout, Menu, Card, ConfigProvider } from "antd";
import BreadCrumb from "@src/components/BreadCrumb";
import { Link } from "react-router-dom";
// import { getSiderInfoReq } from "@src/api/game";
import MobxContext from "@src/store/context";
import store from "@src/store/store";
import { colorPrimary } from "@src/config/index";
import { routerMap } from "@src/router/config";
import MenuHeader from "./header";
import { tabInfo } from "@src/config/index";
import { TabInfo, MenuItem } from "@src/types/index";

const { Content, /* Footer */ Sider } = Layout;

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  // const { data, loading } = useRequest(getSiderInfoReq);

  // /* 当前路由对应的menu */
  // const defaultKey = useMemo(() => {
  //   let key = "";
  //   const getKey = (items: SiderItem[]): boolean => {
  //     return items.some((e: SiderItem) => {
  //       if (pathname === e.path) {
  //         key = e.key;
  //         return true;
  //       }
  //       if (e.children) {
  //         return getKey(e.children);
  //       }
  //     });
  //   };

  //   getKey(items);

  //   return key || "0";
  // }, [pathname, items]);

  const { topKey, leftKey } = useMemo(() => {
    let topKey = "";
    let leftKey = "";

    const getItemsArr = (arr: TabInfo[], parentKay: string): boolean => {
      return arr.some((e: TabInfo) => {
        const { childrenList, index, path, id } = e;

        if (childrenList) {
          return getItemsArr(childrenList, id);
        } else {
          topKey = parentKay || id;
          leftKey = parentKay ? id : "";
          return index ? pathname === path : ~pathname.indexOf(path);
        }
      });
    };
    getItemsArr(tabInfo, "");

    return { topKey, leftKey };
  }, [pathname]);

  const items = useMemo(() => {
    if (!topKey) return [];

    const getItemsArr = (arr: TabInfo[]): MenuItem[] => {
      return arr.map(e => ({
        label: e.childrenList ? e.name : <Link to={e.path}>{e.name}</Link>,
        path: e.path,
        key: e.id,
        children: e.childrenList ? getItemsArr(e.childrenList) : null,
      }));
    };

    return getItemsArr(
      tabInfo.filter(e => e.id === topKey)?.[0]?.childrenList || []
    );
  }, [topKey]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary,
        },
      }}
    >
      <MenuHeader currentTab={topKey}></MenuHeader>

      <Layout style={{ minHeight: "calc(100vh - 58px)" }}>
        {leftKey ? (
          <Sider theme="light">
            <div style={{ height: "28px" }}></div>

            <Menu defaultSelectedKeys={[leftKey]} mode="inline" items={items} />
          </Sider>
        ) : null}

        <Layout>
          <Content style={{ margin: "0 16px" }}>
            <BreadCrumb routerMap={routerMap} />

            <MobxContext.Provider value={store}>
              <Card>{children}</Card>
            </MobxContext.Provider>
          </Content>

          {/* <Footer style={{ textAlign: "center" }}>
            Ant Design ©2023 Created by Ant UED
          </Footer> */}
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default AppLayout;
