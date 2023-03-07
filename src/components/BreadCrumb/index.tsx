import { memo } from "react";
import lessStyle from "./index.module.less";
import { useLocation } from "react-router-dom";

interface BreadCrumbProps {
  routerMap: { [prop: string]: string };
}

const BreadCrumb = ({ routerMap }: BreadCrumbProps) => {
  const { pathname } = useLocation();
  const title = routerMap[pathname];

  return (
    <div className={lessStyle.bread_crumb}>
      <span>{title}</span>
    </div>
  );
};

export default memo(BreadCrumb);
