import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError,
} from "axios";
import { notification } from "antd";
import type { AxiosRes } from "../types/api";

export const BAD_REQ_CODE = 911;

export class Request {
  instance: AxiosInstance;
  baseConfig: AxiosRequestConfig = {
    baseURL: process.env.BASE_REQUEST_URL,
    timeout: 30000,
  };

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(Object.assign(this.baseConfig, config));

    // 请求发送前
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // 代理标识
        // const isHttp = config.url?.includes("http");
        // if (process.env.ENV === "DEV" && !isHttp) {
        //   config.url = "/proxy" + config.url;
        // }

        return config;
      }
    );

    // 请求返回后
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res.data;
      },
      (err: AxiosError) => {
        console.error("请求异常 ===> ", err.message);
        notification.error({
          message: `请求异常 ===> ${err.message}`,
        });
        return { code: BAD_REQ_CODE, data: {} };
      }
    );
  }

  send<T>(
    url: string,
    method = "get",
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosRes<T>> {
    const axiosConfig = { ...config };
    axiosConfig.url = url;
    axiosConfig.method = method;

    if (method.toLocaleLowerCase() === "get") {
      axiosConfig.params = data;
    } else {
      axiosConfig.data = data;
    }

    return this.instance.request(axiosConfig);
  }
}

export default new Request({});
