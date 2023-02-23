import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRequest } from "ahooks";
import { Layout, Menu, Card, Spin, ConfigProvider, Divider } from "antd";
import { Link } from "react-router-dom";
import BreadCrumb from "@src/components/BreadCrumb";
import { getSiderInfoReq } from "@src/api/game";
import MobxContext from "@src/store/context";
import store from "@src/store/store";
import styles from "./index.module.less";
import { colorPrimary } from "@src/config/index";
import { SiderItem } from "@src/types/index";
import { SiderLIst } from "@src/types/api";
import { routerMap } from "@src/router/config";

const { Content, Footer, Sider, Header } = Layout;

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();
  const { data, loading } = useRequest(getSiderInfoReq);

  const items = useMemo(() => {
    if (!data) return [];

    const getItemsArr = (arr: SiderLIst): SiderItem[] => {
      return arr.map(e => ({
        label: e.children ? e.name : <Link to={e.path}>{e.name}</Link>,
        path: e.path,
        key: e.id,
        children: e.children ? getItemsArr(e.children) : null,
      }));
    };

    return getItemsArr(data.data);
  }, [data]);

  /* 当前路由对应的menu */
  const defaultKey = useMemo(() => {
    let key = "";
    const getKey = (items: SiderItem[]): boolean => {
      return items.some((e: SiderItem) => {
        if (pathname === e.path) {
          key = e.key;
          return true;
        }
        if (e.children) {
          return getKey(e.children);
        }
      });
    };

    getKey(items);

    return key || "0";
  }, [pathname, items]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary,
        },
      }}
    >
      <Header
        style={{ background: colorPrimary, width: "100%" }}
        className={styles.header}
      >
        lalalal
      </Header>

      <Layout style={{}}>
        <Sider
          theme="light"
          collapsible
          collapsed={collapsed}
          onCollapse={value => setCollapsed(value)}
        >
          <h1 className={styles.title}>管理系统</h1>
          <Divider />

          {!loading ? (
            <Menu
              defaultSelectedKeys={[defaultKey]}
              mode="inline"
              items={items}
            />
          ) : (
            <Spin />
          )}
        </Sider>

        <Layout>
          <Content style={{ margin: "0 16px" }}>
            <BreadCrumb routerMap={routerMap} />

            <MobxContext.Provider value={store}>
              <Card>{children}</Card>
            </MobxContext.Provider>
          </Content>

          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default AppLayout;
