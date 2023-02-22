export type List = {
  id: string;
  name: string;
}[];

export type SiderLIst = {
  id: string;
  name: string;
  path: string;
  children?: null | SiderLIst;
}[];
