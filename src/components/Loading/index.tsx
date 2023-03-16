import { memo } from "react";
import { Spin, Layout } from "antd";
import lessStyle from "./index.module.less";
import classnames from "classnames";

interface LoadingProps {
  full: boolean;
}

const Loading = ({ full }: LoadingProps) => {
  return (
    <Layout className={classnames({ [lessStyle.full]: full })}>
      <Spin size="large" tip="数据加载中..." />
    </Layout>
  );
};

export default memo(Loading);
