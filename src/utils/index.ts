export const getRouterMap = (routes: Route[]) => {
  const obj: { [key: string]: string } = {};

  const getBreadCrumbConf = (arr: Route[], parentTitle = "") => {
    arr.forEach(e => {
      let newTitle = "";
      const { path, title, childrenList = [] } = e;

      newTitle = parentTitle
        ? `${parentTitle}${title ? " / " + title : ""}`
        : title;

      if (path) {
        if (
          !obj[path] ||
          obj[path].split("/").length < newTitle.split("/").length
        ) {
          obj[path] = newTitle;
        }
      }

      if (childrenList.length) {
        getBreadCrumbConf(childrenList, newTitle);
      }
    });
  };
  getBreadCrumbConf(routes);

  return obj;
};

export function getFormData(obj: any) {
  const formData = new FormData();

  Object.keys(obj).forEach(e => {
    formData.append(e, obj[e]);
  });

  return formData;
}

export function getParam(): Record<string, string>;
export function getParam(name: string): string;
export function getParam(name?: string) {
  const query = window.location.search.substring(1);
  const vars = query.split("&");

  const value: any = {};

  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split("=");
    value[pair[0]] = pair[1] + (pair[2] ? "=" + pair[2] : "");
  }

  if (name) {
    return value[name];
  } else {
    return value;
  }
}

export function getCookie(key: string) {
  return (
    decodeURIComponent(
      document.cookie.replace(
        new RegExp(
          "(?:(?:^|.*;)\\s*" +
            encodeURIComponent(key).replace(/[-.+*]/g, "\\$&") +
            "\\s*\\=\\s*([^;]*).*$)|^.*$"
        ),
        "$1"
      )
    ) || ""
  );
}

export function getRoutesPath(
  title: string,
  routes: Route[] = []
): Route | null {
  let info: Route | null = null;

  function find(arr: Route[]) {
    arr.some(e => {
      if (e.title === title) {
        info = e;
        return true;
      }

      if (e.childrenList?.length) {
        return find(e.childrenList);
      }
    });
  }
  find(routes);

  return info;
}

export function checkPhoneNum(num: string) {
  const reg =
    /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;

  return reg.test(num);
}
