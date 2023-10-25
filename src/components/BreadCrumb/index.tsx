import { memo, useMemo } from "react";
import classNames from "classnames";
import { useLocation, useNavigate } from "react-router-dom";

interface BreadCrumbProps {
  routerMap: { [prop: string]: string };
}

const BreadCrumb = ({ routerMap = {} }: BreadCrumbProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const currentPath = routerMap[Object.keys(routerMap).find(item => item.startsWith(pathname)) || ""];

  const pathMap = useMemo(() => {
    const temp: Record<string, string> = {};

    Object.keys(routerMap).map(e => {
      const arr = routerMap[e].split("/");
      temp[arr[arr.length - 1].trim()] = e;
    });

    return temp;
  }, [routerMap]);

  return (
    <div className="flex h-14 items-center pl-2 text-neutral-400">
      {currentPath.split("/").map((e, i, arr) => {
        const text = e.trim();
        const isLast = arr.length - 1 === i;
        const path = pathMap[text];

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
              {text}
            </span>

            {isLast ? null : <span className="ml-2 mr-2">/</span>}
          </span>
        );
      })}
    </div>
  );
};

export default memo(BreadCrumb);
