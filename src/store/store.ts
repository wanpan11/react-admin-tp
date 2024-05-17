import { makeAutoObservable } from "mobx";
import { getPathRecord, transformRouter } from "@src/router/config";
import { LOCAL_DYNAMIC_ROUTER, LOCAL_TOKEN, LOCAL_USER_INFO } from "@src/config";
import { getLocalStorage } from "@src/utils";

export class MobxStore {
  darkMode = false;

  isLogin = getLocalStorage(LOCAL_TOKEN) ? true : false;

  userInfo = getLocalStorage(LOCAL_USER_INFO);

  dynamicRoutes: Route[] = getLocalStorage(LOCAL_DYNAMIC_ROUTER, "json") || [];

  constructor() {
    makeAutoObservable(this);
  }

  // 获取菜单、路由
  get getRouteAndMenu() {
    console.log("getRouteMenu");

    return transformRouter(this.dynamicRoutes);
  }

  // 获取面包屑
  get routerPathMapping() {
    return getPathRecord(this.getRouteAndMenu.router);
  }

  setTheme(boolean: boolean) {
    this.darkMode = boolean;
  }

  setLogin({ login, userInfo, router = [] }: { login: boolean; userInfo?: any; router?: Route[] }) {
    this.isLogin = login;
    this.userInfo = userInfo;
    this.dynamicRoutes = router;
  }
}

const store = new MobxStore();

export default store;
