import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { notification } from "antd";
import axios from "axios";

export class Request {
  instance: AxiosInstance;
  baseConfig: AxiosRequestConfig = {
    baseURL: import.meta.env.PUBLIC_BASE_REQUEST_URL,
    timeout: 30000,
  };

  constructor(config?: AxiosRequestConfig) {
    this.instance = axios.create(Object.assign(this.baseConfig, config));

    // 请求发送前
    this.instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      if (config.url?.includes("http")) {
        return config;
      }

      // 代理标识
      // if (process.env.NODE_ENV === "development") {
      //   config.url = `/proxy${config.url}`;
      // }

      return config;
    });

    // 请求返回后
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res.data;
      },
      (err: AxiosError) => {
        notification.error({ message: `网络连接弱，请检查网络环境` });
        throw err;
      }
    );
  }

  async send<T>(url: string, method = "get", data?: any, config?: AxiosRequestConfig): Promise<AxiosRes<T>> {
    const axiosConfig = { ...config };
    axiosConfig.url = url;
    axiosConfig.method = method;

    if (method.toLocaleLowerCase() === "get") {
      axiosConfig.params = data;
    }
    else {
      axiosConfig.data = data;
    }

    return this.instance.request(axiosConfig);
  }
}

export default new Request();
