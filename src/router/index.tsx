import Error from "&src/components/Error";

import ErrorBoundary from "&src/components/ErrorBoundary";
import Loading from "&src/components/Loading";
import GLOBAL_ROUTERS, { getRoute } from "&src/router/config";
import { useGetRouterConfig } from "&src/store";
import { Suspense } from "react";
import { BrowserRouter, Routes } from "react-router-dom";

function AppRouter() {
  const { router } = useGetRouterConfig();

  return (
    <ErrorBoundary errComponent={<Error />}>
      <Suspense fallback={<Loading full />}>
        <BrowserRouter basename={import.meta.env.PUBLIC_ROUTER_BASE_NAME} future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
          <Routes>
            {getRoute(GLOBAL_ROUTERS.LOGIN_PAGE)}
            {getRoute(GLOBAL_ROUTERS.NOT_FOUND_PAGE)}
            {getRoute(router)}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

if (import.meta.env.MODE === "development") {
  AppRouter.displayName = "AppRouter";
}

export default AppRouter;
