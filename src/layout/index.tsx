import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRequest } from "ahooks";
import { Layout, Menu, theme, Card, Spin } from "antd";
import { PieChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import BreadCrumb from "@src/components/BreadCrumb";
import routers from "@src/router/config";
import { routesMap } from "@src/utils/index";
import { getSiderInfoReq } from "@src/api/game";
import MobxContext from "@src/store/context";
import store from "@src/store/store";

const { Header, Content, Footer, Sider } = Layout;
const map = routesMap(routers);

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { data, loading } = useRequest(getSiderInfoReq);

  const items = useMemo(() => {
    if (!data) return [];

    const { data: arr = [] } = data;

    return arr.map(e => ({
      label: <Link to={e.path}>{e.label}</Link>,
      key: e.id,
      icon: <PieChartOutlined />,
      path: e.path,
    }));
  }, [data]);

  const defaultKey = items.filter(e => e.path === pathname)?.[0]?.key || "0";

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />

        {!loading ? (
          <Menu
            theme="dark"
            defaultSelectedKeys={[defaultKey]}
            mode="inline"
            items={items}
          />
        ) : (
          <Spin />
        )}
      </Sider>

      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />

        <Content style={{ margin: "0 16px" }}>
          <BreadCrumb routesMap={map} />

          <MobxContext.Provider value={store}>
            <Card>{children}</Card>
          </MobxContext.Provider>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
