import error from "&src/assets/images/error.png";
import { RedoOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { memo } from "react";

function Error() {
  return (
    <div className=" flex h-screen w-screen flex-col items-center justify-center">
      <img src={error} alt="" className="h-1/2" />

      <div className="flex items-center">
        <div>系统错误!</div>

        <Button
          type="link"
          className="my-2"
          icon={<RedoOutlined />}
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          重置路由缓存
        </Button>
      </div>
    </div>
  );
}

export default memo(Error);
