import { Card, Skeleton } from "antd";

function Detail({ title }: RoutePageProps) {
  return (
    <Card title={title}>
      <Skeleton active />
    </Card>
  );
}

export default Detail;
