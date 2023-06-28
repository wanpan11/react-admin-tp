import { makeAutoObservable } from "mobx";
import { nanoid } from "nanoid";
import routers from "@src/router/config";
import { getRouterMap } from "@src/utils/index";

export class MobxStore {
  isLogin = localStorage.getItem("token") ? true : false;
  userInfo: { account: string } | undefined = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo") as string)
    : undefined;

  constructor() {
    makeAutoObservable(this);
  }

  // 获取菜单、路由
  get getRouteMenu() {
    const router: Route[] = [];
    const menu: MenuItem[] = [];

    function getFullRouter(
      arr: Route[],
      router: Route[],
      menu: MenuItem[],
      partePath = ""
    ) {
      arr.forEach(element => {
        const id = nanoid();
        const { path, index, title, childrenList, notMenu } = element;

        let newPath = path as string;
        // 多级嵌套 补全 /
        if (path?.startsWith("/") && childrenList?.length) {
          newPath = (path + "/").replace(/\/\/+/g, "/");
        }

        const routeObj = {
          ...element,
          id,
          path: index ? partePath : newPath,
          childrenList: [],
        };
        const menuObj = {
          key: id,
          path: index ? partePath : (path as string),
          label: title ? title : "",
          children: [],
        };

        router.push(routeObj);
        if (!notMenu) {
          menu.push(menuObj);
        }

        if (childrenList?.length) {
          getFullRouter(
            childrenList,
            routeObj.childrenList,
            menuObj.children,
            newPath
          );
        }
      });
    }
    getFullRouter(routers, router, menu);

    return { router, menu: menu[0].children as MenuItem[] };
  }

  // 获取面包屑
  get routerMap() {
    return getRouterMap(this.getRouteMenu.router[0].childrenList as Route[]);
  }

  setLogin(val: boolean, userInfo?: { account: string }) {
    this.isLogin = val;
    this.userInfo = userInfo;
  }
}

const store = new MobxStore();

export default store;
