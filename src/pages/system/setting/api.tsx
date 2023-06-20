import { Card, Skeleton } from "antd";

const Api = ({ title }: PageProps) => {
  return (
    <Card title={title}>
      <Skeleton active />
    </Card>
  );
};

export default Api;
