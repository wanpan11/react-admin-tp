export const routesMap = (routes: Route[]) => {
  const obj: { [prop: string]: string } = {};

  const getBreadCrumbConf = (
    arr: Routers,
    parentPath = "",
    parentTitle = ""
  ) => {
    arr.forEach(e => {
      const { path, title, childrenList = [] } = e;

      let newPath = "/";
      let newTitle = "";

      if (parentPath) {
        if (parentPath === "/") {
          newPath = `${parentPath}${path === "*" ? "" : path}`;
        } else {
          newPath = `${parentPath}${"/" + path}`;
        }

        newTitle = parentTitle + title;
        obj[newPath] = newTitle;
      }

      if (childrenList.length) {
        getBreadCrumbConf(childrenList, newPath, title ? newTitle + " / " : "");
      }
    });
  };

  getBreadCrumbConf(routes);

  return obj;
};
