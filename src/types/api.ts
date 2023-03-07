export interface AxiosRes<T> {
  code: number;
  data: T;
}

export interface AccountApi {
  login: {
    account: string;
    password: string;
  };
}

export interface CompanyApi {
  insertReq: {
    category: number;
    contact: string;
    name: string;
    mobile: string;
    updateTime?: string;
    id?: number;
  };
  insertRes: {
    data: string;
  };
  listReq: { pageNum: number; pageSize: number; name: string };
  listRes: {
    pageNum: number;
    pageSize: number;
    total: number;
    totalPage: number;
    list: {
      category: number;
      contact: string;
      id: number;
      name: string;
      mobile: string;
      updateTime?: string;
    }[];
  };
}
