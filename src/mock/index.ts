import Mock from "mockjs";

Mock.mock("/getData", {
  code: 200,
  "data|3-5": [
    {
      name: "@cname",
      "id|+1": 0,
    },
  ],
});

Mock.mock("/login", req => {
  return req.body;
});
