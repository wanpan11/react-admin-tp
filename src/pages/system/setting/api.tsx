import { Card, Skeleton } from "antd";

function Api({ title }: RoutePageProps) {
  return (
    <Card title={title}>
      <Skeleton active />
    </Card>
  );
}

export default Api;
