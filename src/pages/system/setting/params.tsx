import { Card, Skeleton } from "antd";
import { Link } from "react-router-dom";

const Params = () => {
  return (
    <Card title="Params">
      <div>
        <Link to="/setting/dev/detail">detail</Link>
      </div>
      <Skeleton active />
    </Card>
  );
};

export default Params;
