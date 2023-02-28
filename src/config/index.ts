import { TabInfo } from "@src/types/index";

export const colorPrimary = "#4096ff";

export const tabInfo: TabInfo[] = [
  { name: "首页", path: "/game", index: true, id: "0" },
  {
    name: "游戏接入",
    path: "/game/projectManage",
    id: "1",
    childrenList: [
      {
        name: "项目管理",
        path: "/game/projectManage",
        id: "1_0",
        index: true,
      },
      {
        name: "发行管理",
        path: "/game/releaseManage",
        id: "1_1",
      },
      {
        name: "打包工具",
        path: "/game/projectRelease",
        id: "1_2",
      },
      {
        name: "CPS子包",
        path: "/game/projectRelease",
        id: "1_3",
      },
    ],
  },
  { name: "运营管理", path: "", id: "2" },
  { name: "数据报表", path: "", id: "3" },
  { name: "系统设置", path: "", id: "4" },
];
