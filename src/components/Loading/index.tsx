import { Spin } from "antd";
import classnames from "classnames";
import { memo } from "react";

interface LoadingProps {
  full?: boolean;
  text?: string;
  size?: "small" | "large" | "default";
  className?: string;
}

function Loading({ full, text, size, className }: LoadingProps) {
  return (
    <div className={classnames({ "size-full": full }, "flex items-center justify-center", className)}>
      <Spin size={size} />
      <div className="mt-3 text-primary">{text}</div>
    </div>
  );
}

export default memo(Loading);
