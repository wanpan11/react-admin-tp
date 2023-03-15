export const getRouterMap = (routes: Route[]) => {
  const obj: { [key: string]: string } = {};

  const getBreadCrumbConf = (
    arr: Route[],
    parentPath = "",
    parentTitle = ""
  ) => {
    arr.forEach(e => {
      let newTitle = "";
      const { path, title, childrenList = [] } = e;
      const currentPath =
        !path || path === "*" ? (parentPath ? "" : "/") : `/${path}`;
      const newPath = `${
        parentPath !== "/" ? parentPath + currentPath : currentPath
      }`;

      newTitle = parentTitle + title;
      obj[newPath] = newTitle;

      if (childrenList.length) {
        getBreadCrumbConf(childrenList, newPath, title ? newTitle + " / " : "");
      }
    });
  };

  getBreadCrumbConf(routes);

  return obj;
};
