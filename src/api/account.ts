import request from "@src/api/request";
import type { AccountApi } from "../types/api";

export const loginReq = (data: AccountApi["login"]) => {
  return request.send<AccountApi["login"]>("/login", "post", data);
};
