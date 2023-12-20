import { Suspense } from "react";
import { ConfigProvider, theme } from "antd";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Loading from "@src/components/Loading";
import { colorPrimary } from "@src/config/index";
import ErrorBoundary from "@src/components/ErrorBoundary";
import Redirect from "@src/components/Redirect";
import Error from "@src/components/Error";
import store from "@src/store/store";

const getRoutes = (routers: Route[]) => {
  return routers.map(e => {
    const { id, path, title, index, redirect, component: Component, childrenList = [] } = e;

    const props: { key: string; element?: JSX.Element } = {
      key: id as string,
    };

    if (Component || redirect) {
      props.element = redirect ? (
        <Redirect redirect={redirect}></Redirect>
      ) : (
        <Suspense fallback={<Loading full />}>
          <Component title={title}>{childrenList.length ? <Outlet /> : null}</Component>
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

const AppRouter = observer(() => {
  const {
    darkMode,
    getRouteMenu: { router },
  } = store;

  const currentThem = {
    algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorPrimary,
    },
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <ErrorBoundary errComponent={<Error />}>
        <BrowserRouter basename={process.env.ROUTER_BASE_NAME}>
          <ConfigProvider theme={currentThem}>
            <Routes>{getRoutes(router)}</Routes>
          </ConfigProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
});

export default AppRouter;
