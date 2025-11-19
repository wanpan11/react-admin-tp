import type { StateCreator } from "zustand";
import type { RootStore } from "./index";

export interface UiSlice {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export const createUiSlice: StateCreator<RootStore, [], [], UiSlice> = set => ({
  darkMode: false,
  setDarkMode: (darkMode: boolean) => set({ darkMode }),
});
