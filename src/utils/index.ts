import type { TabInfo } from "@src/types/index";

export const getRouterMap = (routes: TabInfo[]) => {
  const obj: { [key: string]: string } = {};

  const getBreadCrumbConf = (arr: TabInfo[], parentTitle = "") => {
    arr.forEach(e => {
      let newTitle = "";
      const { path, label, childrenList = [] } = e;

      newTitle = parentTitle + label;
      obj[path] = newTitle;

      if (childrenList.length) {
        getBreadCrumbConf(childrenList, label ? newTitle + " / " : "");
      }
    });
  };

  getBreadCrumbConf(routes);

  return obj;
};
