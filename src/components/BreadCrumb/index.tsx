import { memo, useMemo } from "react";
import classNames from "classnames";
import { useLocation, useNavigate } from "react-router-dom";

interface BreadCrumbProps {
  routerMap: { [prop: string]: string };
}

const BreadCrumb = ({ routerMap = {} }: BreadCrumbProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const currentPath =
    routerMap[
      Object.keys(routerMap).find(item => item.startsWith(pathname)) || ""
    ];

  const pathMap = useMemo(() => {
    const temp: Record<string, string> = {};

    Object.keys(routerMap).map(e => {
      const arr = routerMap[e].split("/");
      temp[arr[arr.length - 1].trim()] = e;
    });

    return temp;
  }, [routerMap]);

  return (
    <div className="h-58px" flex="~ items-center" text="14px neutral-400">
      {currentPath.split("/").map((e, i, arr) => {
        const isLast = arr.length - 1 === i;
        const path = pathMap[e.trim()];

        return (
          <span key={e}>
            <span
              className={classNames({
                "cursor-pointer text-primary": !isLast && path,
              })}
              onClick={() => {
                navigate(path);
              }}
            >
              {e}
            </span>

            {isLast ? null : <span m="t-0 b-0 6px">/</span>}
          </span>
        );
      })}
    </div>
  );
};

export default memo(BreadCrumb);
