import Error from "&src/components/Error";
import ErrorBoundary from "&src/components/ErrorBoundary";
import GLOBAL_ROUTERS, { getRoute } from "&src/router/config";
import { useGetRouterConfig } from "&src/store";
import { StyleProvider } from "@ant-design/cssinjs";
import { BrowserRouter, Routes } from "react-router-dom";

function AppRouter() {
  const { router } = useGetRouterConfig();

  return (

    <StyleProvider layer>
      <ErrorBoundary errComponent={<Error />}>
        <BrowserRouter basename={import.meta.env.PUBLIC_ROUTER_BASE_NAME} future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
          <Routes>
            {getRoute(GLOBAL_ROUTERS.LOGIN_PAGE)}
            {getRoute(GLOBAL_ROUTERS.NOT_FOUND_PAGE)}
            {getRoute(router)}
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </StyleProvider>
  );
}

if (import.meta.env.MODE === "development") {
  AppRouter.displayName = "AppRouter";
}

export default AppRouter;
