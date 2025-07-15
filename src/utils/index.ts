export function getFormData(obj: any) {
  const formData = new FormData();

  Object.keys(obj).forEach((e) => {
    formData.append(e, obj[e]);
  });

  return formData;
}

export function getParam(): Record<string, string | undefined>;
export function getParam(name: string): string;
export function getParam(name?: string) {
  const query = window.location.search.substring(1);
  const vars = query ? query.split("&") : [];

  const value: any = {};
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split("=");
    value[pair[0]] = pair[1] + (pair[2] ? `=${pair[2]}` : "");
  }

  if (name) {
    return value[name];
  }
  else {
    return value;
  }
}

export function getCookie(key: string) {
  return decodeURIComponent(document.cookie.replace(new RegExp(`(?:(?:^|.*;)\\s*${encodeURIComponent(key).replace(/[-.+*]/g, "\\$&")}\\s*\\=\\s*([^;]*).*$)|^.*$`), "$1")) || "";
}

export function checkPhoneNum(num: string) {
  const reg = /^(?:13\d|14[014-9]|15[0-35-9]|16[2567]|17[0-8]|18\d|19[0-35-9])\d{8}$/;

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
  a.href = `${url}?response-content-type=application/octet-stream`;
  a.download = fileName || "";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function downloadVideo(url: string, fileName?: string) {
  fetch(url)
    .then(async res => res.blob())
    .then((blob) => {
      const a = document.createElement("a");
      const objectUrl = window.URL.createObjectURL(blob);
      a.download = fileName || "";
      a.href = objectUrl;
      a.click();
      window.URL.revokeObjectURL(objectUrl);
      a.remove();
    });
}

export function toLocaleString(num: number) {
  if (typeof num === "number") {
    return num.toLocaleString();
  }
  else {
    return "0";
  }
}

export function number2Chn(num: number) {
  if (num === undefined || num === null)
    return "-";

  const param: { value: string | number; unit: string } = { value: num, unit: "" };
  const k = 10000;
  const sizes = ["", "万", "亿", "万亿"];
  let i = 0;

  if (num < k) {
    param.value = num;
    param.unit = "";
  }
  else {
    i = Math.floor(Math.log(num) / Math.log(k));
    param.value = (num / k ** i).toFixed(2);
    param.unit = sizes[i];
  }
  return param.value + param.unit;
}

export function tree2flat(tree: { id: string | number; children: any[] }[]) {
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
  return `${(url).includes(".avif") ? `/api/market/seo/select/img?url=${url}` : url}`;
}

export function convertMinutesToHoursMinutesAndDays(minutes: number) {
  if (Number.isNaN(minutes) || minutes < 0) {
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
    days,
    hours,
    minutes: remainingMinutes,
  };
}

// 获取url的文件名
export function getUrlName(url = "") {
  const arr = url.split("/");
  return arr[arr.length - 1];
}

export function getLocalStorage(key: string, type?: "json") {
  const data = localStorage.getItem(key) || undefined;
  return data && type ? JSON.parse(data) : data;
}

export function videoPlay(ref: HTMLVideoElement | null) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 元素进入可视区域
        ref?.play();
      }
      else {
        // 元素移出可视区域
        ref?.pause();
      }
    });
  });

  ref && observer.observe(ref);
}

/**
 * 隐藏字符串中间部分，保留首尾各visibleChars个字符，其余用*替换。
 */
export function hideMiddlePart(str: string, visibleChars = 4): string {
  const strLength = str.length;
  if (strLength <= 2 * visibleChars) {
    // 如果字符串长度小于或等于两倍的可见字符数，直接返回原字符串
    return str;
  }

  // 构建隐藏部分
  const hiddenPart = "*".repeat(strLength - 2 * visibleChars);

  // 返回处理后的字符串
  return str.slice(0, visibleChars) + hiddenPart + str.slice(-visibleChars);
}

// 获取序号
export function getSerialNumber(idx: number) {
  return idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
}
