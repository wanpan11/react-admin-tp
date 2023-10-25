import request from "@src/utils/request";
import type { AccountApi } from "../types/api";

export const loginReq = (data: AccountApi.Login) => {
  return request.send<{ token: string; userInfo: { account: string } }>("/login", "post", data);
};
