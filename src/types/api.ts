/* eslint-disable @typescript-eslint/no-namespace */
export interface AxiosRes<T> {
  code: number;
  data: T;
}

interface PageInfo<T> {
  pageNum: number;
  pageSize: number;
  total: number;
  totalPage: number;
  list: T[];
}

export namespace AccountApi {
  export interface Login {
    account: string;
    password: string;
  }
}

export namespace CompanyApi {
  export interface InsertReq {
    category: number;
    contact: string;
    name: string;
    mobile: string;
  }

  export interface ListReq {
    pageNum: number;
    pageSize: number;
    name?: string;
  }

  export type ListRes = PageInfo<
    InsertReq & { id: number; updateTime: string }
  >;
}
