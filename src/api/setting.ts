import request from "@src/api/request";
import type { CompanyApi } from "../types/api";

export const companyService = {
  insert: (data: CompanyApi.InsertReq) => {
    return request.send<string>("/company/insert", "post", data, {
      headers: { "Content-Type": "application/json" },
    });
  },
  list: (data: CompanyApi.ListReq) => {
    return request.send<CompanyApi.ListRes>("/company/list", "get", data);
  },
};
