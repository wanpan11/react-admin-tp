import type { AccountApi } from "../types/api";
import request from "&src/utils/request";

export async function loginReq(data: AccountApi.Login) {
  return request.send<{ token: string; userInfo: { account: string } }>("/login", "post", data);
}
