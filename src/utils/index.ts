import { nanoid } from "nanoid";

export function transformRouter(routers: Route[]) {
  const router: Route[] = [];
  const routerMenu: MenuItem[] = [];

  function transform(arr: Route[], router: Route[], menu: MenuItem[], partePath = "") {
    arr.forEach(element => {
      const id = nanoid();
      const { path, index, title, childrenList, notMenu, icon } = element;

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
        icon: icon,
        children: [],
      };

      router.push(routeObj);
      if (!notMenu) {
        menu.push(menuObj);
      }

      if (childrenList?.length) {
        transform(childrenList, routeObj.childrenList, menuObj.children, newPath);
      }
    });
  }
  transform(routers, router, routerMenu);

  return { router, routerMenu: routerMenu[0].children as MenuItem[] };
}

export const getPathRecord = (routes: Route[]) => {
  const obj: { [key: string]: string } = {};

  const getBreadCrumbConf = (arr: Route[], parentTitle = "") => {
    arr.forEach(e => {
      let newTitle = "";
      const { path, title = "", childrenList = [] } = e;

      newTitle = parentTitle ? `${parentTitle}${title ? " / " + title : ""}` : title;

      if (path) {
        if (!obj[path] || obj[path].split("/").length < newTitle.split("/").length) {
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
      document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(key).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")
    ) || ""
  );
}

export function getRoutesPath(title: string, routes: Route[] = []): Route | null {
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
  const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;

  return reg.test(num);
}

export function resolveBlob(res: any, fileName: string) {
  const blob = new Blob([res], {
    type: "application/octet-stream",
  });
  const aLink = document.createElement("a");

  aLink.href = URL.createObjectURL(blob);
  aLink.setAttribute("download", fileName);
  aLink.click();
}

export function downloadFile(url: string, fileName?: string) {
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url + "?response-content-type=application/octet-stream";
  a.download = fileName ? fileName : "";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function toLocaleString(num: number) {
  if (typeof num === "number") {
    return num.toLocaleString();
  } else {
    return "0";
  }
}

export function number2Chn(num: number) {
  if (!num) return "-";

  const param: { value: string | number; unit: string } = { value: num, unit: "" };
  const k = 10000;
  const sizes = ["", "万", "亿", "万亿"];
  let i = 0;

  if (num < k) {
    param.value = num;
    param.unit = "";
  } else {
    i = Math.floor(Math.log(num) / Math.log(k));
    param.value = (num / Math.pow(k, i)).toFixed(2);
    param.unit = sizes[i];
  }
  return param.value + param.unit;
}

export function tree2flat(tree: object[]) {
  const arr: any[] = [];

  const transform = (list: any[]) => {
    list.forEach((ele: any) => {
      const { id, children } = ele;
      arr.push(id);

      if (children.length) {
        transform(children);
      }
    });
  };
  transform(tree);

  return arr;
}

// [min, max]，包括min、max
export function getRandomNumber(min: number, max: number) {
  // 计算范围内的随机数
  const random = Math.random() * (max - min + 1) + min;
  // 向下取整得到整数
  const randomNumber = Math.floor(random);
  // 返回随机数
  return randomNumber;
}

// 图片的代理
export function proxyImgPreview(url: string) {
  // return `${(url as string).includes(".avif") ? "http://m.sky.test/api/market/seo/select/img?url=" + url : url}`;
  return `${(url as string).includes(".avif") ? "/api/market/seo/select/img?url=" + url : url}`;
}

export function convertMinutesToHoursMinutesAndDays(minutes: number) {
  if (isNaN(minutes) || minutes < 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
    };
  }

  const days = Math.floor(minutes / (60 * 24));
  const hours = Math.floor((minutes % (60 * 24)) / 60);
  const remainingMinutes = Math.floor(minutes % 60);

  return {
    days: days,
    hours: hours,
    minutes: remainingMinutes,
  };
}

// 获取url的文件名
export const getUrlName = (url = "") => {
  const arr = url.split("/");
  return arr[arr.length - 1];
};
