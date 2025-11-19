import Error from "&src/components/Error";

import ErrorBoundary from "&src/components/ErrorBoundary";
import GLOBAL_ROUTERS, { getRoute } from "&src/router/config";
import { useGetRouterConfig } from "&src/store";
import { BrowserRouter, Routes } from "react-router-dom";

function AppRouter() {
  const { router } = useGetRouterConfig();

  return (
    <ErrorBoundary errComponent={<Error />}>
      <BrowserRouter basename={process.env.PUBLIC_ROUTER_BASE_NAME || undefined} future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <Routes>
          {getRoute(GLOBAL_ROUTERS.LOGIN_PAGE)}
          {getRoute(GLOBAL_ROUTERS.NOT_FOUND_PAGE)}
          {getRoute(router)}
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

if (import.meta.env.MODE === "development") {
  AppRouter.displayName = "AppRouter";
}

export default AppRouter;
