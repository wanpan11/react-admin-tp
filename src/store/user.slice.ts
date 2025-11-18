import type { StateCreator } from "zustand";
import type { RootStore } from "./index";
import { LOCAL_TOKEN, LOCAL_USER_INFO } from "&src/config";
import { getLocalStorage } from "&src/utils";

export interface UserSlice {
  isLogin: boolean;
  userInfo: Record<string, any> | undefined;
  setLogin: (params: { login: boolean; userInfo?: Record<string, any> }) => void;
}

export const createUserSlice: StateCreator<RootStore, [], [], UserSlice> = set => ({
  isLogin: !!getLocalStorage(LOCAL_TOKEN),
  userInfo: getLocalStorage(LOCAL_USER_INFO, "json"),
  setLogin: ({ login, userInfo }) => set({ isLogin: login, userInfo }),
});
