import { TabInfo } from "@src/types/index";

export const colorPrimary = "#4096ff";

export const tabInfo: TabInfo[] = [
  { name: "首页", path: "/system", index: true, id: "0" },
  {
    name: "系统设置",
    path: "/system/companyManage",
    id: "4",
    childrenList: [
      {
        name: "厂商管理",
        path: "/system/companyManage",
        id: "4_0",
        index: true,
      },
    ],
  },
];
