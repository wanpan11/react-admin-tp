import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Spin } from "antd";
import routersObj from "./config";

const getRoutes = (routers: Routers) => {
  return routers.map(e => {
    const {
      path = "",
      component: Component,
      childrenList = [],
      title,
      index,
    } = e;
    const props = {
      key: title,
      element: (
        <Suspense fallback={<Spin />}>
          <Component title={title}>
            {/* Outlet 用作子路由页面出口 */}
            {childrenList.length ? <Outlet /> : null}
          </Component>
        </Suspense>
      ),
    };

    const jsx = index ? (
      <Route {...props} index></Route>
    ) : (
      <Route {...props} path={path}>
        {childrenList.length ? getRoutes(childrenList) : undefined}
      </Route>
    );

    return jsx;
  });
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>{getRoutes(routersObj)}</Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
