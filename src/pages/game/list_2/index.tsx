import React, { useContext } from "react";
import { Button } from "antd";
import { observer } from "mobx-react-lite";
import MobxContext from "@src/store/context";

const list_2 = observer(() => {
  const store = useContext(MobxContext);
  const done = store.data.length > 0;

  return (
    <div>
      <h1>点击获取 详情页_1 数据</h1>

      <Button
        disabled={done}
        type="primary"
        onClick={() => {
          store.getData();
        }}
      >
        {done ? "数据以获取" : "获取数据"}
      </Button>
    </div>
  );
});

export default list_2;
