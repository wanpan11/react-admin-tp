import Mock from "mockjs";
import { nanoid } from "nanoid";

Mock.setup({ timeout: 1000 });

Mock.mock(/company\/list/, data => {
  console.log("[ Mock company/list ] ===>", data);

  return Mock.mock({
    code: 0,
    data: {
      "list|15": [
        {
          id: "@id",
          "category|1-3": 1,
          name: "@title",
          contact: "@cname",
          mobile: "@natural",
          updateTime: "@datetime",
        },
      ],
    },
  });
});

Mock.mock(/company\/insert/, data => {
  console.log("[ Mock company/insert ] ===>", data);

  return Mock.mock({
    code: 0,
    data: "新建成功！",
  });
});

Mock.mock("/login", req => {
  return {
    code: 0,
    data: { token: nanoid(), userInfo: JSON.parse(req.body) },
  };
});
