import request from "@src/api/request";
import type { CompanyApi } from "../types/api";

export const companyService = {
  insert: (data: CompanyApi["insertReq"]) => {
    return request.send<CompanyApi["insertRes"]>(
      "/company/insert",
      "post",
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  },
  list: (data: CompanyApi["listReq"]) => {
    return request.send<CompanyApi["listRes"]>("/company/list", "get", data);
  },
};
