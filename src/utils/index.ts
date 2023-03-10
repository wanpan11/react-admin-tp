export const getRouterMap = (routes: Router) => {
  const obj: { [prop: string]: string } = {};

  const getBreadCrumbConf = (
    arr: Router,
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
