import { memo } from "react";
import error from "@src/assets/images/error.png";

const Error = () => {
  return (
    <div className=" flex h-screen w-screen flex-col items-center justify-center">
      <img src={error} alt="" className="h-1/2" />
      <div>系统错误！！</div>
    </div>
  );
};

export default memo(Error);
