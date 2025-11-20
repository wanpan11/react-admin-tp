import type { MenuProps } from "antd";
import useRootStore from "&src/store";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown } from "antd";

import classnames from "classnames";
import { useNavigate } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";
import lessStyle from "./index.module.less";

interface MenuHeaderProps {
  tabId: string;
  tabList: MenuItem[];
}

const headClass = "z-[999] box-border flex h-14 items-center justify-between p-7 py-3 shadow-ch";
const tabItemClass = "relative mx-4 h-14 cursor-pointer select-none px-3 text-base leading-[3.5rem] hover:text-primary";

function MenuHeader({ tabId, tabList }: MenuHeaderProps) {
  const navigate = useNavigate();
  const { userInfo, darkMode, setLogin, setDarkMode } = useRootStore(
    useShallow(store => ({
      darkMode: store.darkMode,
      userInfo: store.userInfo,
      setLogin: store.setLogin,
      setDarkMode: store.setDarkMode,
    }))
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
    <div className={classnames(headClass, darkMode ? "bg-slate-900 text-white" : "bg-white")}>
      <div className="flex items-center">
        <h1 className="mr-28 flex items-center text-lg">
          <img alt="logo" className="mr-2 w-8" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
          <span>管理系统</span>
        </h1>

        {tabList.map((e) => {
          return (
            <ul
              key={e.key}
              onClick={() => {
                itemClick(e.path);
              }}
              className={classnames(tabItemClass, {
                [`${lessStyle.tabItem_active} text-primary`]: e.key === tabId,
              })}
            >
              <li>{e.label}</li>

              <div className={lessStyle.line}></div>
            </ul>
          );
        })}
      </div>

      <div className="flex items-center gap-10">
        <div className="flex w-5 cursor-pointer items-center">
          {darkMode
            ? (
                <img
                  alt="暗黑模式"
                  src="/dark.svg"
                  className="w-full"
                  onClick={() => {
                    setDarkMode(false);
                  }}
                />
              )
            : (
                <img
                  alt="明亮模式"
                  src="/light.svg"
                  className="w-full"
                  onClick={() => {
                    setDarkMode(true);
                  }}
                />
              )}
        </div>

        <Dropdown menu={{ items }} placement="bottomRight" arrow={{ pointAtCenter: false }}>
          <div className="flex h-8 cursor-pointer items-center gap-3">
            <div>{userInfo?.account}</div>

            <Avatar icon={<UserOutlined />} />
          </div>
        </Dropdown>
      </div>
    </div>
  );
}

export default MenuHeader;
