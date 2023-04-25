import { memo } from "react";
import lessStyle from "./index.module.less";
import error from "@src/assets/images/error.png";

const Error = () => {
  return (
    <div className={lessStyle.container}>
      <img src={error} alt="" />
      <div>系统错误！！</div>
    </div>
  );
};

export default memo(Error);
