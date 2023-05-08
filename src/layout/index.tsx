import { useEffect, useMemo } from "react";
import { Layout } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import BreadCrumb from "@src/components/BreadCrumb";
import MobxContext from "@src/store/context";
import { MenuItem } from "@src/types/index";
import store from "@src/store/store";
import MenuHeader from "./header";
import SiderCom from "./sider";
import lessStyle from "./index.module.less";

const { Content } = Layout;

const AppLayout = observer(({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { menuConf, routerMap, isLogin } = store;

  // 获取当前选中 menu ID
  const [topKey, leftKey] = useMemo(() => {
    if (!menuConf.length) return ["", ""];

    let menuId = "";
    let parentStr = "";

    function getCurrentPathId(arr: MenuItem[], parent?: string) {
      if (arr.length < 0) return;

      arr.forEach(e => {
        if (pathname.includes(e.path)) {
          parentStr = parent ? parent : `${e.key}`;

          if (!e.children?.length) {
            menuId = parent ? `${e.key}` : "";
          }
        }

        let newParentStr = "";
        if (e.children?.length) {
          if (parent) {
            newParentStr = `${parent}_${e.key}`;
          } else {
            newParentStr = `${e.key}`;
          }

          getCurrentPathId(e.children, newParentStr);
        }
      });
    }
    getCurrentPathId(menuConf);

    const tabId = parentStr?.split("_")?.[0] || `${menuConf[0]?.key}`;

    return [tabId, `${menuId}`];
  }, [pathname, menuConf]);

  const currentMenuList = useMemo(() => {
    if (!topKey) return [];

    const current = menuConf.filter(e => e.key === topKey)?.[0]?.children || [];

    function getFullRouter(arr: MenuItem[]): MenuItem[] {
      return arr.map(ele => {
        const { path, children } = ele;

        return {
          ...ele,
          label: children?.length ? (
            ele.label
          ) : (
            <Link to={path}> {ele.label}</Link>
          ),
          children: children?.length ? getFullRouter(children) : undefined,
        };
      });
    }
    return getFullRouter(current);
  }, [topKey, menuConf]);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  return (
    <>
      <MenuHeader tabId={topKey} tabList={menuConf}></MenuHeader>

      <Layout className={lessStyle.container}>
        {currentMenuList.length ? (
          <SiderCom menu={currentMenuList} selectKey={leftKey} />
        ) : null}

        <Layout>
          <Content style={{ margin: "0 16px" }}>
            <BreadCrumb routerMap={routerMap} />

            <div className={lessStyle.content}>
              <MobxContext.Provider value={{ isLogin: store.isLogin }}>
                {children}
              </MobxContext.Provider>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
});

export default AppLayout;
