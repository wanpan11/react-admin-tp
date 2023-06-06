import { Card, Skeleton } from "antd";
import { Link } from "react-router-dom";

const Params = () => {
  return (
    <Card title="Params">
      <div>
        <Link to="/setting/detail">detail</Link>
      </div>
      <Skeleton active />
    </Card>
  );
};

export default Params;
