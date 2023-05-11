import { memo, useMemo } from "react";
import classNames from "classnames";
import { useLocation, useNavigate } from "react-router-dom";
import lessStyle from "./index.module.less";

interface BreadCrumbProps {
  routerMap: { [prop: string]: string };
}

const BreadCrumb = ({ routerMap }: BreadCrumbProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const title = routerMap[pathname] || "";

  const pathMap = useMemo(() => {
    const temp: Record<string, string> = {};

    Object.keys(routerMap).map(e => {
      const arr = routerMap[e].split("/");
      temp[arr[arr.length - 1].trim()] = e;
    });

    return temp;
  }, [routerMap]);

  return (
    <div className={lessStyle.bread_crumb}>
      {title.split("/").map((e, i, arr) => {
        const isLast = arr.length - 1 === i;
        const path = pathMap[e.trim()];

        return (
          <span key={e}>
            <span
              className={classNames({
                [lessStyle.route]: !isLast && path,
              })}
              onClick={() => {
                navigate(path);
              }}
            >
              {e}
            </span>

            {isLast ? null : <span className={lessStyle.item}>/</span>}
          </span>
        );
      })}
    </div>
  );
};

export default memo(BreadCrumb);
