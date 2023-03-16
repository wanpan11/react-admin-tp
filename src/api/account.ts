import request from "@src/api/request";
import type { AccountApi } from "../types/api";

export const loginReq = (data: AccountApi.Login) => {
  return request.send<string>("/login", "post", data);
};
