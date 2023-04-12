import { useEffect } from "react";
import { Skeleton } from "antd";
import { useNavigate } from "react-router-dom";

const Redirect = ({ redirect }: PageProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      navigate(redirect);
    }
  }, [redirect, navigate]);

  return <Skeleton />;
};

export default Redirect;
