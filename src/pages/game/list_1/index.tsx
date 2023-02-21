import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import MobxContext from "@src/store/context";

const list_1 = observer(() => {
  const store = useContext(MobxContext);

  return (
    <div>
      <h1>详情页_1</h1>

      {store.data.length > 0 ? (
        store.data.map(e => <div key={e.id}>{e.name} </div>)
      ) : (
        <div>未获取数据</div>
      )}
    </div>
  );
});

export default list_1;
