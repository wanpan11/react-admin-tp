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

    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config;
      },
      (err: AxiosError) => {
        return Promise.reject(err);
      }
    );

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res.data;
      },
      (err: AxiosError) => {
        return Promise.reject(err.response);
      }
    );
  }

  send<T>(
    url: string,
    method: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosRes<T>> {
    const axiosConfig = { ...config };
    axiosConfig.url = url;
    axiosConfig.method = method;

    if (method === "get") {
      axiosConfig.params = data;
    } else {
      axiosConfig.data = data;
    }

    return this.instance.request(axiosConfig);
  }
}

export default new Request({});
