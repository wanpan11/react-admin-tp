import React from "react";
import { Layout, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./index.module.less";
import { tabInfo } from "@src/config/index";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";

const { Header } = Layout;

const MenuHeader = ({ currentTab }: { currentTab: string }) => {
  const navigate = useNavigate();

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

      <div
        className={styles.right}
        onClick={() => {
          navigate("/");
        }}
      >
        <Avatar icon={<UserOutlined />} />
      </div>
    </Header>
  );
};

export default MenuHeader;
