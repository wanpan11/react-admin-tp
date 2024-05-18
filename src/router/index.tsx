import { ConfigProvider, theme } from "antd";
import { BrowserRouter, Routes } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { colorPrimary } from "@src/config/index";
import ErrorBoundary from "@src/components/ErrorBoundary";
import Error from "@src/components/Error";
import store from "@src/store/store";
import GLOBAL_ROUTERS, { getRoute } from "@src/router/config";

const AppRouter = observer(() => {
  const { darkMode, routeAndMenu } = store;

  const currentThem = {
    algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: { colorPrimary },
  };

  console.log(routeAndMenu.router);

  return (
    <div className={darkMode ? "dark" : ""}>
      <ErrorBoundary errComponent={<Error />}>
        <BrowserRouter basename={import.meta.env.VITE_ROUTER_BASE_NAME}>
          <ConfigProvider theme={currentThem}>
            <Routes>
              {getRoute(GLOBAL_ROUTERS.LOGIN_PAGE)}
              {getRoute(GLOBAL_ROUTERS.NOT_FOUND_PAGE)}
              {getRoute(routeAndMenu.router)}
            </Routes>
          </ConfigProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
});

export default AppRouter;
