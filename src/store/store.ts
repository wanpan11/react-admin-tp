import { makeAutoObservable } from "mobx";
import { getPathRecord, transformRouter } from "@src/router/config";

export class MobxStore {
  darkMode = false;
  dynamicRoutes: Route[] = [];
  isLogin = localStorage.getItem("token") ? true : false;
  userInfo: { account: string } | undefined = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo") as string) : undefined;

  constructor() {
    makeAutoObservable(this);
  }

  // 获取菜单、路由
  get getRouteMenu() {
    console.log("getRouteMenu");

    return transformRouter(this.dynamicRoutes);
  }

  // 获取面包屑
  get routerPath() {
    return getPathRecord(this.getRouteMenu.router);
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
