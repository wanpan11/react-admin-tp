import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError,
} from "axios";
import type { AxiosRes } from "../types/api";

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
        // const isHttp = config.url?.indexOf("http");

        // if (process.env.ENV === "DEV" && !isHttp) {
        //   config.url = "/proxy" + config.url;
        // }

        return config;
      },
      (err: AxiosError) => {
        console.error("interceptors.request ===> ", err.message);
      }
    );

    // 请求返回后
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res.data;
      },
      (err: AxiosError) => {
        console.error("interceptors.response ===> ", err.message);
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
