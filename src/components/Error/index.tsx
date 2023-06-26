import { memo } from "react";
import error from "@src/assets/images/error.png";

const Error = () => {
  return (
    <div h="screen" w="screen" flex="~ justify-center items-center col">
      <img src={error} alt="" h="50%" />
      <div>系统错误！！</div>
    </div>
  );
};

export default memo(Error);
