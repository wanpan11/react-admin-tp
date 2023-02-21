import request from "@src/api/request";
import { List, SiderLIst } from "../types/api";

export const getSiderInfoReq = () => {
  return request.get<SiderLIst>("/getSider");
};

export const getDataReq = () => {
  return request.get<List>("/getData");
};
