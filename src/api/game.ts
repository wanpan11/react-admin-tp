import request from "@src/api/request";
import { List, Login } from "../types/api";

export const getDataReq = () => {
  return request.get<List>("/getData");
};

export const loginReq = (data: Login) => {
  return request.post<List>("/login", { data });
};
