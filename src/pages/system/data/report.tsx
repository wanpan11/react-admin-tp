import { Card, Skeleton } from "antd";

function Report({ title }: PageProps) {
  return (
    <Card title={title}>
      <Skeleton active />
    </Card>
  );
}

export default Report;
