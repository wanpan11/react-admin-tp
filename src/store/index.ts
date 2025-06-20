import { LOCAL_DYNAMIC_ROUTER, LOCAL_TOKEN, LOCAL_USER_INFO } from "&src/config";
import { getPathRecord, transformRouter } from "&src/router/config";
import { getLocalStorage } from "&src/utils";

import { useMemo } from "react";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

interface RootStore {
  darkMode: boolean; // 是否开启暗黑模式
  isLogin: boolean; // 是否登录
  userInfo: Record<string, any>; // 用户信息
  dynamicRoutes: Route[]; // 动态路由配置

  setDarkMode: (boolean: boolean) => void; // 设置暗黑模式
  setLogin: (params: { login: boolean; userInfo?: Record<string, any> }) => void; // 设置登录状态和用户信息
  setDynamicRoutes: (routes: Route[]) => void; // 设置动态路由
}

const useRootStore = create<RootStore>()(set => ({
  darkMode: false,
  isLogin: !!getLocalStorage(LOCAL_TOKEN),
  userInfo: getLocalStorage(LOCAL_USER_INFO, "json"),
  dynamicRoutes: getLocalStorage(LOCAL_DYNAMIC_ROUTER, "json") || [],
  setDarkMode: (darkMode: boolean) => set(() => ({ darkMode })),
  setLogin: ({ login, userInfo }) => set(() => ({ isLogin: login, userInfo })),
  setDynamicRoutes: (dynamicRoutes: Route[]) => set(() => ({ dynamicRoutes })),
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
