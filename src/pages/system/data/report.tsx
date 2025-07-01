import { Card, Skeleton } from "antd";

function Report({ title }: RoutePageProps) {
  return (
    <Card title={title}>
      <Skeleton active />
    </Card>
  );
}

export default Report;
