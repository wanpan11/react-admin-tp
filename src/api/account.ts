import request from "@src/api/request";
import type { AccountApi } from "../types/api";

export const loginReq = (data: AccountApi.Login) => {
  return request.send<{ token: string; userInfo: unknown }>(
    "/login",
    "post",
    data
  );
};
