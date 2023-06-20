import { Card, Skeleton } from "antd";

const Detail = ({ title }: PageProps) => {
  return (
    <Card title={title}>
      <Skeleton active />
    </Card>
  );
};

export default Detail;
