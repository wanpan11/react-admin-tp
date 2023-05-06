import { Skeleton, Card } from "antd";

const Home = () => {
  return (
    <div>
      <Card title="数据看板">
        <Skeleton active />
      </Card>
    </div>
  );
};

export default Home;
