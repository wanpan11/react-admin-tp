import { makeAutoObservable } from "mobx";
import { getPathRecord, transformRouter } from "@src/router/config";
import { LOCAL_DYNAMIC_ROUTER, LOCAL_TOKEN, LOCAL_USER_INFO } from "@src/config";
import { getLocalStorage } from "@src/utils";

export class MobxStore {
  darkMode = false;

  isLogin = !!getLocalStorage(LOCAL_TOKEN);

  userInfo = getLocalStorage(LOCAL_USER_INFO, "json");

  // 动态路由数据
  dynamicRoutes: Route[] = getLocalStorage(LOCAL_DYNAMIC_ROUTER, "json") || [];

  constructor() {
    makeAutoObservable(this);
  }

  // 获取动态路由、路由菜单
  get routeAndMenu() {
    return transformRouter(this.dynamicRoutes);
  }

  // 获取页面路由地址
  get routerPathMapping() {
    return getPathRecord(this.routeAndMenu.router);
  }

  setDarkMode = (boolean: boolean) => {
    this.darkMode = boolean;
  };

  setLogin = ({ login, userInfo }: { login: boolean; userInfo?: any }) => {
    this.isLogin = login;
    this.userInfo = userInfo;
  };

  setDynamicRoutes = (routes: Route[]) => {
    this.dynamicRoutes = routes;
  };
}

const store = new MobxStore();

export default store;
