import type { CompanyApi } from "../types/api";
import request from "&src/utils/request";

export const companyService = {
  insert: async (data: CompanyApi.InsertReq) => {
    return request.send<string>("/company/insert", "post", data, {
      headers: { "Content-Type": "application/json" },
    });
  },
  list: async (data: CompanyApi.ListReq) => {
    return request.send<CompanyApi.ListRes>("/company/list", "post", data);
  },
};
