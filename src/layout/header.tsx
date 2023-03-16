import { Layout, Avatar, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./index.module.less";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import type { MenuProps } from "antd";
import type { TabInfo } from "@src/types/index";

const { Header } = Layout;

const MenuHeader = ({
  tabId,
  tabList,
}: {
  tabId: string;
  tabList: TabInfo[];
}) => {
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
          管理系统
        </h1>

        {tabList.map(e => {
          return (
            <div
              key={e.id}
              className={classnames(styles.tabItem, {
                [styles.tabItem_active]: e.id === tabId,
              })}
            >
              <div
                onClick={() => {
                  itemClick(e.path);
                }}
              >
                {e.label}
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
