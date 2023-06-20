import { Card, Skeleton } from "antd";

const Report = ({ title }: PageProps) => {
  return (
    <Card title={title}>
      <Skeleton active />
    </Card>
  );
};

export default Report;
