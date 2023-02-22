import Mock from "mockjs";

Mock.mock("/getSider", {
  code: 1000,
  data: [
    {
      path: "/game",
      name: "首页",
      id: "0",
    },
    {
      path: "",
      name: "游戏接入",
      id: "1",
      children: [
        { path: "/game/projectRelease", name: "项目发行", id: "1_1" },
        { path: "/game/projectRelease", name: "发行管理", id: "1_2" },
        { path: "/game/projectRelease", name: "打包工具", id: "1_3" },
        { path: "/game/projectRelease", name: "CPS子包", id: "1_4" },
      ],
    },
    {
      path: "",
      name: "运营管理",
      id: "2",
    },
    {
      path: "",
      name: "数据报表",
      id: "3",
    },
    {
      path: "",
      name: "系统设置",
      id: "4",
    },
  ],
});

Mock.mock("/getData", {
  code: 1000,
  "data|3-5": [
    {
      name: "@cname",
      "id|+1": 0,
    },
  ],
});
