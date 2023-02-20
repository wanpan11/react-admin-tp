import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu, theme, Card } from "antd";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import BreadCrumb from "@src/components/BreadCrumb";
import routers from "@src/router/config";
import { routesMap } from "@src/utils/index";

type MenuItem = Required<MenuProps>["items"][number];
const { Header, Content, Footer, Sider } = Layout;
const map = routesMap(routers);

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    label,
    key,
    icon,
    children,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to="">list_1</Link>, "1", <PieChartOutlined />),
  getItem(<Link to="list_2">list_2</Link>, "2", <DesktopOutlined />),
];

const App = ({ children }: PageProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

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

        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>

      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />

        <Content style={{ margin: "0 16px" }}>
          <BreadCrumb routesMap={map} />

          <Card>{children}</Card>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
