import type { RouteSlice } from "./route.slice";
import type { UiSlice } from "./ui.slice";
import type { UserSlice } from "./user.slice";
import { getPathRecord, transformRouter } from "&src/router/config";
import { useMemo } from "react";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";
import { createRouteSlice } from "./route.slice";
import { createUiSlice } from "./ui.slice";
import { createUserSlice } from "./user.slice";

export type RootStore = UiSlice & UserSlice & RouteSlice;

const useRootStore = create<RootStore>()((...api) => ({
  ...createUiSlice(...api),
  ...createUserSlice(...api),
  ...createRouteSlice(...api),
}));

export function useGetRouterConfig() {
  const dynamicRoutes = useRootStore(useShallow(store => store.dynamicRoutes));

  // 转换后的路由和菜单
  const { router, routerMenu } = useMemo(() => {
    return transformRouter(dynamicRoutes);
  }, [dynamicRoutes]);

  // 路由路径映射
  const routerPathMapping = useMemo(() => {
    return getPathRecord(router);
  }, [router]);

  return { router, routerMenu, routerPathMapping };
}

export default useRootStore;
