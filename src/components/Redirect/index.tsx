import { Skeleton } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Redirect({ redirect }: { redirect: string }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      navigate(redirect);
    }
  }, [redirect, navigate]);

  return <Skeleton />;
}

export default Redirect;
