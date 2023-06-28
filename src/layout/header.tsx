import { Layout, Avatar, Dropdown } from "antd";
import type { MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import { observer } from "mobx-react-lite";
import store from "@src/store/store";
import styles from "./index.module.less";

const { Header } = Layout;

const MenuHeader = observer(
  ({ tabId, tabList }: { tabId: string; tabList: MenuItem[] }) => {
    const navigate = useNavigate();

    const items: MenuProps["items"] = [
      {
        key: "1",
        label: (
          <div
            className="p-3 pb-1 pt-1"
            onClick={() => {
              localStorage.clear();
              store.setLogin(false);
              navigate("/login");
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
                key={e.key}
                className={classnames(styles.tabItem, {
                  [styles.tabItem_active]: e.key === tabId,
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
            placement="bottomRight"
            arrow={{ pointAtCenter: false }}
          >
            <div className="flex items-center">
              <span className="mr-3">{store.userInfo?.account}</span>
              <Avatar icon={<UserOutlined />} />
            </div>
          </Dropdown>
        </div>
      </Header>
    );
  }
);

export default MenuHeader;
