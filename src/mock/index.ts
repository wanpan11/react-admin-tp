import Mock from "mockjs";

Mock.mock(/company\/list/, () => {
  return Mock.mock({
    code: 1,
    data: {
      "list|5": [
        {
          "id|+1": 0,
          category: 0,
          name: "厂商",
          contact: "联系",
          mobile: "1235",
          updateTime: "updateTime",
        },
      ],
    },
  });
});

Mock.mock("/login", req => {
  return req.body;
});
