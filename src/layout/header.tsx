import React from "react";
import { Layout, Avatar, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./index.module.less";
import { tabInfo } from "@src/config/index";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import type { MenuProps } from "antd";

const { Header } = Layout;

const MenuHeader = ({ currentTab }: { currentTab: string }) => {
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          className={styles.menu_item}
          onClick={() => {
            navigate("/");
          }}
        >
          退出登录
        </div>
      ),
    },
  ];

  const itemClick = (path: string) => {
    navigate(path);
  };

  return (
    <Header className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt="logo"
          />
          Ant Design
        </h1>

        {tabInfo.map(e => {
          return (
            <div
              key={e.id}
              className={classnames(styles.tabItem, {
                [styles.tabItem_active]: e.id === currentTab,
              })}
            >
              <div
                onClick={() => {
                  itemClick(e.path);
                }}
              >
                {e.name}
              </div>

              <div className={styles.line}></div>
            </div>
          );
        })}
      </div>

      <div className={styles.right}>
        <Dropdown
          menu={{ items }}
          placement="bottomLeft"
          arrow={{ pointAtCenter: true }}
        >
          <Avatar icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  );
};

export default MenuHeader;
