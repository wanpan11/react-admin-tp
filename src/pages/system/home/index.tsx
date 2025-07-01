import { Card, Skeleton } from "antd";

function Home({ title }: RoutePageProps) {
  return (
    <div>
      <Card title={title}>
        <Skeleton active />
      </Card>
    </div>
  );
}

export default Home;
