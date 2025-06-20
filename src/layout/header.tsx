import type { MenuProps } from "antd";
import dark_img from "&src/assets/images/dark.svg";
import light_img from "&src/assets/images/light.svg";
import useRootStore from "&src/store";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Layout } from "antd";

import classnames from "classnames";
import { useNavigate } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";
import lessStyle from "./index.module.less";

const { Header } = Layout;

interface MenuHeaderProps {
  tabId: string;
  tabList: MenuItem[];
}

function MenuHeader({ tabId, tabList }: MenuHeaderProps) {
  const navigate = useNavigate();
  const { userInfo, darkMode, setLogin, setDarkMode } = useRootStore(
    useShallow(store => ({
      darkMode: store.darkMode,
      userInfo: store.userInfo,
      setLogin: store.setLogin,
      setDarkMode: store.setDarkMode,
    })),
  );

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          className="p-3 py-1"
          onClick={() => {
            localStorage.clear();
            setLogin({ login: false });
            setDarkMode(false);
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
    <Header className={`relative z-[999] box-border flex h-14 items-center justify-between p-7 py-3 shadow-ch ${darkMode ? "bg-slate-900" : "bg-white"} `}>
      <div className="flex items-center">
        <h1 className="mr-28 flex items-center text-lg">
          <img alt="logo" className="mr-2 w-8" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
          管理系统
        </h1>

        {tabList.map((e) => {
          return (
            <div
              key={e.key}
              onClick={() => {
                itemClick(e.path);
              }}
              className={classnames("relative mx-4 h-14 cursor-pointer select-none px-3 text-base leading-[56px]", {
                [`${lessStyle.tabItem_active} text-primary`]: e.key === tabId,
              })}
            >
              {e.label}

              <div className={lessStyle.line}></div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center">
        <div className="mr-10 flex w-5 cursor-pointer items-center">
          {darkMode
            ? (
                <img
                  src={dark_img}
                  className="w-full"
                  alt="暗黑模式"
                  onClick={() => {
                    setDarkMode(false);
                  }}
                />
              )
            : (
                <img
                  src={light_img}
                  className="w-full"
                  alt="明亮模式"
                  onClick={() => {
                    setDarkMode(true);
                  }}
                />
              )}
        </div>

        <Dropdown menu={{ items }} placement="bottomRight" className="cursor-pointer" arrow={{ pointAtCenter: false }}>
          <div className="flex items-center leading-[32px]">
            <div className="mr-3">{userInfo?.account}</div>

            <Avatar icon={<UserOutlined />} />
          </div>
        </Dropdown>
      </div>
    </Header>
  );
}

export default MenuHeader;
