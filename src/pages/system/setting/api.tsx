import { Card, Skeleton } from "antd";

function Api({ title }: PageProps) {
  return (
    <Card title={title}>
      <Skeleton active />
    </Card>
  );
}

export default Api;
