import { Skeleton, Card } from "antd";

const Home = ({ title }: PageProps) => {
  return (
    <div>
      <Card title={title}>
        <Skeleton active />
      </Card>
    </div>
  );
};

export default Home;
