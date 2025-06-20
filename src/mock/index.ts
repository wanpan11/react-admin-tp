/* eslint-disable no-console */
import Mock from "mockjs";
import { nanoid } from "nanoid";

function sleep(time = 1000) {
  const start = Date.now();
  while (Date.now() - start < time) {
    // Busy-wait loop to simulate delay
  }
}

Mock.mock(/company\/list/, (data) => {
  console.log("[ Mock company/list ] ===>", data);

  const response = Mock.mock({
    code: 0,
    data: {
      "list|15": [
        {
          "id": "@id",
          "category|1-3": 1,
          "name": "@title",
          "contact": "@cname",
          "mobile": "@natural",
          "updateTime": "@datetime",
        },
      ],
    },
  });

  sleep();
  return response;
});

Mock.mock(/company\/insert/, (data) => {
  console.log("[ Mock company/insert ] ===>", data);

  return Mock.mock({
    code: 0,
    data: "新建成功！",
  });
});

Mock.mock("/login", (req) => {
  return {
    code: 0,
    data: { token: nanoid(), userInfo: JSON.parse(req.body) },
  };
});
