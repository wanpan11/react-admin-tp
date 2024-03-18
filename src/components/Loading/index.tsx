import { memo } from "react";
import { Spin, Layout } from "antd";
import classnames from "classnames";

interface LoadingProps {
  full?: boolean;
  text?: string;
  size?: "small" | "large" | "default";
  className?: string;
}

const Loading = ({ full, text, size, className }: LoadingProps) => {
  return (
    <Layout
      className={classnames(className, "flex items-center justify-center", {
        "h-screen": full,
        "bg-transparent": !full,
      })}
    >
      <Spin size={size} />
      <div className="mt-3 text-primary">{text}</div>
    </Layout>
  );
};

export default memo(Loading);
