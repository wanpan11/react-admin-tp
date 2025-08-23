import { Button, Card, Skeleton } from "antd";
import { useNavigate } from "react-router-dom";

function Params({ title }: RoutePageProps) {
  const navigate = useNavigate();

  return (
    <Card title={title || "参数配置"}>
      <Button
        type="primary"
        className="mb-2"
        onClick={() => {
          navigate("/setting/detail");
        }}
      >
        detail
      </Button>

      <Skeleton active />
    </Card>
  );
}

export default Params;
