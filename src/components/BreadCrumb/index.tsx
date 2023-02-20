import React, { memo } from "react";
import lessStyle from "./index.module.less";
import { useLocation } from "react-router-dom";

interface BreadCrumbProps {
  routesMap: { [prop: string]: string };
}

const BreadCrumb = ({ routesMap }: BreadCrumbProps) => {
  const { pathname } = useLocation();
  const title = routesMap[pathname];

  return (
    <div className={lessStyle.bread_crumb}>
      <span>{title}</span>
    </div>
  );
};

export default memo(BreadCrumb);
