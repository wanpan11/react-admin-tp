/**
 * 浏览器环境类型
 */
export type BrowserEnv = "pc" | "mobile" | "ios" | "android" | "wechat" | "unknown";

/**
 * 检测浏览器环境
 * @returns {BrowserEnv} 当前浏览器环境
 */
export function detectBrowserEnv(): BrowserEnv {
  const userAgent = navigator.userAgent.toLowerCase();

  const patterns = {
    wechat: /micromessenger/i,
    ios: /iphone|ipad|ipod/i,
    android: /android/i,
    mobile: /mobile|android|iphone|ipad|phone|tablet/i
  };

  if (patterns.wechat.test(userAgent))
    return "wechat";
  if (patterns.ios.test(userAgent))
    return "ios";
  if (patterns.android.test(userAgent))
    return "android";
  if (patterns.mobile.test(userAgent))
    return "mobile";
  if (!patterns.mobile.test(userAgent))
    return "pc";

  return "unknown";
}

interface DeviceInfo {
  userAgent: string;
  browserEnv: BrowserEnv;
  isPC: boolean;
  isIOS: boolean;
  isAndroid: boolean;
  isWeChat: boolean;
  isMobile: boolean;
  screenWidth: number;
  screenHeight: number;
  viewportWidth: number;
  viewportHeight: number;
}

/**
 * 获取设备详细信息
 * @returns {DeviceInfo} 设备信息对象
 */
export function getDeviceInfo(): DeviceInfo {
  const userAgent = navigator.userAgent;
  const browserEnv = detectBrowserEnv();

  return {
    userAgent,
    browserEnv,
    isPC: browserEnv === "pc",
    isIOS: browserEnv === "ios",
    isAndroid: browserEnv === "android",
    isWeChat: browserEnv === "wechat",
    isMobile: ["mobile", "ios", "android", "wechat"].includes(browserEnv),
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
  };
}

/**
 * 将对象转换为 FormData
 * @param {Record<string, any>} obj - 要转换的对象
 * @returns {FormData} 转换后的 FormData 对象
 */
export function getFormData(obj: Record<string, any>): FormData {
  const formData = new FormData();

  Object.entries(obj).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      if (value instanceof File) {
        formData.append(key, value);
      }
      else if (Array.isArray(value)) {
        value.forEach((item, index) => {
          formData.append(`${key}[${index}]`, item);
        });
      }
      else if (typeof value === "object") {
        formData.append(key, JSON.stringify(value));
      }
      else {
        formData.append(key, String(value));
      }
    }
  });

  return formData;
}

/**
 * 获取 URL 查询参数
 */
export function getParam(): Record<string, string> | undefined;
export function getParam(name: string): string | undefined;
export function getParam(name?: string) {
  try {
    const searchParams = new URLSearchParams(window.location.search);

    // 如果指定了参数名，返回该参数值
    if (name) {
      const value = searchParams.get(name);
      return value ? decodeURIComponent(value) : undefined;
    }

    // 如果没有任何参数，返回 undefined
    if (searchParams.toString() === "") {
      return undefined;
    }

    // 返回所有参数的对象
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      // 处理特殊字符和空值
      if (value) {
        try {
          params[key] = decodeURIComponent(value);
        }
        catch {
          params[key] = value;
        }
      }
    });

    return Object.keys(params).length ? params : undefined;
  }
  catch (e) {
    console.warn("解析 URL 参数时出错:", e);
    return undefined;
  }
}

/**
 * 获取指定 Cookie 值
 * @param {string} key - Cookie 键名
 * @returns {string} Cookie 值，不存在时返回空字符串
 */
export function getCookie(key: string): string {
  try {
    const cookieRegex = new RegExp(`(?:^|;\\s*)${encodeURIComponent(key)}=([^;]*)`);
    const match = document.cookie.match(cookieRegex);
    return match ? decodeURIComponent(match[1]) : "";
  }
  catch {
    return "";
  }
}

/**
 * 验证手机号码格式
 * @param {string} num - 手机号码
 * @returns {boolean} 是否为有效的手机号码
 */
export function checkPhoneNum(num: string): boolean {
  if (!num || typeof num !== "string") {
    return false;
  }
  const reg = /^(?:13\d|14[014-9]|15[0-35-9]|16[2567]|17[0-8]|18\d|19[0-35-9])\d{8}$/;
  return reg.test(num);
}

/**
 * 将二进制数据转换为下载文件
 * @param {Blob} res - 二进制数据
 * @param {string} fileName - 下载文件名
 */
export function resolveBlob(res: Blob, fileName: string): void {
  if (!(res instanceof Blob)) {
    console.warn("Invalid blob data");
    return;
  }

  const blob = new Blob([res], {
    type: "application/octet-stream",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  try {
    a.style.display = "none";
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
  }
  catch (e) {
    console.warn("下载文件失败:", e);
  }
  finally {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}

/**
 * 下载指定 URL 的文件
 * @param {string} url - 文件 URL
 * @param {string} [fileName] - 下载文件名
 */
export function downloadFile(url: string, fileName?: string): void {
  if (!url) {
    console.warn("下载 URL 不能为空");
    return;
  }

  const a = document.createElement("a");

  try {
    a.style.display = "none";
    a.href = `${url}${url.includes("?") ? "&" : "?"}response-content-type=application/octet-stream`;
    a.download = fileName || "";
    document.body.appendChild(a);
    a.click();
  }
  catch (e) {
    console.warn("下载文件失败:", e);
  }
  finally {
    // 延迟移除元素，确保下载开始
    window.setTimeout(() => {
      document.body.removeChild(a);
    }, 100);
  }
}

/**
 * 数字转本地化字符串
 * @param {number} num - 要转换的数字
 * @returns {string} 本地化后的字符串
 */
export function toLocaleString(num: number): string {
  return typeof num === "number" && !Number.isNaN(num) ? num.toLocaleString() : "0";
}

/**
 * 数字转中文表示（支持到万亿）
 * @param {number} num - 要转换的数字
 * @returns {string} 中文表示的数字
 */
export function number2Chn(num: number): string {
  if (typeof num !== "number" || Number.isNaN(num) || !Number.isFinite(num)) {
    return "-";
  }

  if (num === 0)
    return "0";
  if (num < 0)
    return `-${number2Chn(-num)}`;

  const k = 10000;
  const sizes = ["", "万", "亿", "万亿"];

  if (num < k) {
    return num.toString();
  }

  const i = Math.min(Math.floor(Math.log(num) / Math.log(k)), sizes.length - 1);
  const value = (num / (k ** i)).toFixed(2).replace(/\.?0+$/, "");

  return value + sizes[i];
}

interface TreeNode {
  id: string | number;
  children: TreeNode[];
  [key: string]: any;
}

/**
 * 将树形结构转换为扁平数组
 * @param {TreeNode[]} tree - 树形结构数据
 * @returns {(string | number)[]} 扁平化后的ID数组
 */
export function tree2flat(tree: TreeNode[]): (string | number)[] {
  if (!Array.isArray(tree)) {
    console.warn("输入必须是数组");
    return [];
  }

  const result: (string | number)[] = [];

  const traverse = (nodes: TreeNode[]) => {
    nodes.forEach((node) => {
      if (node && "id" in node) {
        result.push(node.id);
        if (Array.isArray(node.children) && node.children.length > 0) {
          traverse(node.children);
        }
      }
    });
  };

  traverse(tree);
  return result;
}

/**
 * 获取指定范围内的随机整数
 * @param {number} min - 最小值（包含）
 * @param {number} max - 最大值（包含）
 * @returns {number} 随机整数
 */
export function getRandomNumber(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * 时间转换结果接口
 */
interface TimeConversion {
  days: number;
  hours: number;
  minutes: number;
}

/**
 * 处理 AVIF 图片 URL
 * @param {string} url - 图片 URL
 * @returns {string} 处理后的 URL
 */
export function proxyImgPreview(url: string): string {
  return url.includes(".avif") ? `/api/market/seo/select/img?url=${url}` : url;
}

/**
 * 将分钟转换为天、小时、分钟
 * @param {number} minutes - 分钟数
 * @returns {TimeConversion} 转换结果
 */
export function convertMinutesToHoursMinutesAndDays(minutes: number): TimeConversion {
  if (!Number.isFinite(minutes) || minutes < 0) {
    return { days: 0, hours: 0, minutes: 0 };
  }

  const days = Math.floor(minutes / (60 * 24));
  const hours = Math.floor((minutes % (60 * 24)) / 60);
  const remainingMinutes = Math.floor(minutes % 60);

  return { days, hours, minutes: remainingMinutes };
}

/**
 * 从 URL 获取文件名
 * @param {string} url - URL 地址
 * @returns {string} 文件名
 */
export function getUrlName(url = ""): string {
  return url.split("/").pop() || "";
}

/**
 * 从 localStorage 获取数据
 * @param {string} key - 存储键名
 * @param {"json"} [type] - 数据类型
 * @returns {any} 存储的数据
 */
export function getLocalStorage(key: string, type?: "json"): any {
  try {
    const data = localStorage.getItem(key);
    if (!data)
      return undefined;
    return type === "json" ? JSON.parse(data) : data;
  }
  catch (e) {
    console.warn("读取 localStorage 失败:", e);
    return undefined;
  }
}

/**
 * 获取格式化的序号（1-9 前补0）
 * @param {number} idx - 索引
 * @returns {string | number} 格式化后的序号
 */
export function getSerialNumber(idx: number): string | number {
  if (typeof idx !== "number" || Number.isNaN(idx) || idx < 0) {
    return "00";
  }
  return idx < 9 ? `0${idx + 1}` : idx + 1;
}
