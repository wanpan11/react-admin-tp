import { memo } from "react";
import { Spin, Layout } from "antd";
import classnames from "classnames";

interface LoadingProps {
  full?: boolean;
}

const Loading = ({ full }: LoadingProps) => {
  return (
    <Layout
      className={classnames({
        "flex h-screen items-center justify-center": full,
      })}
    >
      <Spin size="large" tip="数据加载中..." />
    </Layout>
  );
};

export default memo(Loading);
