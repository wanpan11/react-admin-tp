import { makeAutoObservable } from "mobx";
import routers from "@src/router/config";
import { getPathRecord } from "@src/utils/index";
import { transformRouter } from "@src/utils/index";

export class MobxStore {
  darkMode = false;
  isLogin = localStorage.getItem("token") ? true : false;
  userInfo: { account: string } | undefined = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo") as string) : undefined;

  constructor() {
    makeAutoObservable(this);
  }

  // 获取菜单、路由
  get getRouteMenu() {
    return transformRouter(routers);
  }

  // 获取面包屑
  get routerPath() {
    return getPathRecord(this.getRouteMenu.router[0].childrenList!);
  }

  setTheme(boolean: boolean) {
    this.darkMode = boolean;
  }

  setLogin(val: boolean, userInfo?: { account: string }) {
    this.isLogin = val;
    this.userInfo = userInfo;
  }
}

const store = new MobxStore();

export default store;
