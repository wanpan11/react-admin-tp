import { TabInfo } from "@src/types/index";

export const colorPrimary = "#4096ff";

export const tabInfo: TabInfo[] = [
  { label: "首页", path: "/system", index: true, id: "0" },
  {
    label: "系统设置",
    path: "/system/company",
    id: "4",
    childrenList: [
      {
        label: "厂商管理",
        path: "/system/company",
        id: "4_0",
        index: true,
      },
      {
        label: "用户管理",
        path: "/system/user",
        id: "4_1",
      },
    ],
  },
];
