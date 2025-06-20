import { Card, Skeleton } from "antd";

function Home({ title }: PageProps) {
  return (
    <div>
      <Card title={title}>
        <Skeleton active />
      </Card>
    </div>
  );
}

export default Home;
