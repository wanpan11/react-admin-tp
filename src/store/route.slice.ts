import type { StateCreator } from "zustand";
import type { RootStore } from "./index";
import { LOCAL_DYNAMIC_ROUTER } from "&src/config";
import { getLocalStorage } from "&src/utils";

export interface RouteSlice {
  dynamicRoutes: Route[];
  setDynamicRoutes: (dynamicRoutes: Route[]) => void;
}

export const createRouteSlice: StateCreator<RootStore, [], [], RouteSlice> = set => ({
  dynamicRoutes: getLocalStorage(LOCAL_DYNAMIC_ROUTER, "json") || [],
  setDynamicRoutes: (dynamicRoutes: Route[]) => set({ dynamicRoutes }),
});
