import { makeAutoObservable } from "mobx";
import routers from "@src/router/config";
import { getRouterMap } from "@src/utils/index";
import type { TabInfo } from "@src/types/index";

export class MobxStore {
  isLogin = localStorage.getItem("token") ? true : false;

  constructor() {
    makeAutoObservable(this);
  }

  get tabList() {
    function getTab(arr: Route[], partePath = "") {
      return arr.map((e): TabInfo => {
        const { title, path, id, index, childrenList = [] } = e;

        return {
          id,
          path: index ? partePath : (path as string),
          label: title ? title : "",
          childrenList: childrenList.length
            ? getTab(childrenList, path)
            : undefined,
        };
      });
    }

    return getTab([routers[0]])[0].childrenList as TabInfo[];
  }

  get routerMap() {
    const { tabList } = this;

    return getRouterMap(tabList);
  }

  setLogin(val: boolean) {
    this.isLogin = val;
  }
}

const store = new MobxStore();

export default store;
