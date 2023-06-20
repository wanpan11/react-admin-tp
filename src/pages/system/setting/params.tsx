import { Card, Skeleton } from "antd";
import { Link } from "react-router-dom";

const Params = ({ title }: PageProps) => {
  return (
    <Card title={title || "参数配置"}>
      <div>
        <Link to="/setting/detail">detail</Link>
      </div>
      <Skeleton active />
    </Card>
  );
};

export default Params;
