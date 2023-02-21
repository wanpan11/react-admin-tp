import Mock from "mockjs";

Mock.mock("/getSider", {
  code: 1000,
  data: [
    {
      path: "/game",
      label: "首页",
      id: "0",
    },
    {
      path: "/game/list_1",
      label: "选项一",
      id: "1",
    },
    {
      path: "/game/list_2",
      label: "选项二",
      id: "2",
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
