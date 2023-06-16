import Mock from "mockjs";
import { nanoid } from "nanoid";

Mock.mock(/company\/list/, () => {
  return Mock.mock({
    code: 1,
    data: {
      "list|5": [
        {
          id: "@id",
          "category|0-1": 1,
          name: "@title",
          contact: "@cname",
          mobile: "@natural",
          updateTime: "@datetime",
        },
      ],
    },
  });
});

Mock.mock("/login", req => {
  return {
    code: 0,
    data: { token: nanoid(), userInfo: req.body },
  };
});
