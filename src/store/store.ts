import { makeAutoObservable } from "mobx";
import routers from "@src/router/config";
import { getRouterMap } from "@src/utils/index";
import type { MenuItem } from "@src/types/index";

export class MobxStore {
  isLogin = localStorage.getItem("token") ? true : false;

  constructor() {
    makeAutoObservable(this);
  }

  get menuConf() {
    if (!routers?.[0]?.childrenList) return [];

    const menu: MenuItem[] = [];
    // 过滤 notMenu
    (function filterNotMenu(arr: Route[], temp: MenuItem[], partePath = "") {
      arr.forEach(element => {
        const { title, path, id, index, notMenu, childrenList } = element;
        if (notMenu) return;

        const obj = {
          key: id,
          path: index ? partePath : path || "",
          label: title ? title : "",
          children: [],
        };

        temp.push(obj);

        if (childrenList?.length) {
          filterNotMenu(childrenList, obj.children, path);
        }
      });
    })(routers[0].childrenList, menu);

    return menu;
  }

  get fullRouter() {
    function getFullRouter(arr: Route[], partePath = ""): Route[] {
      return arr.map(element => {
        const { path, index, childrenList } = element;

        return {
          ...element,
          path: index ? partePath : path || "",
          childrenList: childrenList?.length
            ? getFullRouter(childrenList, path)
            : undefined,
        };
      });
    }
    return getFullRouter(routers);
  }

  get routerMap() {
    return getRouterMap(this.fullRouter);
  }

  setLogin(val: boolean) {
    this.isLogin = val;
  }
}

const store = new MobxStore();

export default store;
