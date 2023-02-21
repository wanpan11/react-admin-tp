import axios from "axios";

// create an axios instance
const request = axios.create({
  withCredentials: false,
  timeout: 30000,
});

// request interceptor
request.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// response interceptor
request.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default request;
