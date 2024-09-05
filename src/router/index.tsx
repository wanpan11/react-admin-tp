import { observer } from "mobx-react-lite";
import { BrowserRouter, Routes } from "react-router-dom";

import Error from "&src/components/Error";
import ErrorBoundary from "&src/components/ErrorBoundary";
import GLOBAL_ROUTERS, { getRoute } from "&src/router/config";
import store from "&src/store/store";

const AppRouter = observer(() => {
  return (
    <ErrorBoundary errComponent={<Error />}>
      <BrowserRouter basename={process.env.ROUTER_BASE_NAME}>
        <Routes>
          {getRoute(GLOBAL_ROUTERS.LOGIN_PAGE)}
          {getRoute(GLOBAL_ROUTERS.NOT_FOUND_PAGE)}
          {getRoute(store.routeAndMenu.router)}
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
});

export default AppRouter;
