import { Card, Skeleton } from "antd";

function Detail({ title }: PageProps) {
  return (
    <Card title={title}>
      <Skeleton active />
    </Card>
  );
}

export default Detail;
