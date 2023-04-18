import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import routers from "./config";
import Loading from "@src/components/Loading";
import { colorPrimary } from "@src/config/index";
import { ConfigProvider } from "antd";

const getRoutes = (routers: Route[]) => {
  return routers.map(e => {
    const {
      id,
      path,
      title,
      index,
      component: Component,
      childrenList = [],
    } = e;

    const props: { key: string; element?: JSX.Element } = {
      key: id,
    };

    if (Component) {
      props.element = (
        <Suspense fallback={<Loading full />}>
          <Component title={title}>
            {childrenList.length ? <Outlet /> : null}
          </Component>
        </Suspense>
      );
    }

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
    <BrowserRouter basename={process.env.ROUTER_BASE_NAME}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary,
          },
        }}
      >
        <Routes>{getRoutes(routers)}</Routes>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
