import type { StateCreator } from "zustand";
import type { RootStore } from "./index";
import { getLocalStorage } from "&src/utils";

// 初始化暗黑模式状态
function getInitialDarkMode(): boolean {
  try {
    const stored = getLocalStorage("darkMode");
    return stored === "true";
  }
  catch {
    return false;
  }
}

// 应用暗黑模式样式到 body
function applyDarkMode(darkMode: boolean) {
  if (darkMode) {
    document.body.className = "dark";
  }
  else {
    document.body.className = "";
  }
}

export interface UiSlice {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export const createUiSlice: StateCreator<RootStore, [], [], UiSlice> = (set) => {
  // 初始化时立即应用暗黑模式
  const initialDarkMode = getInitialDarkMode();
  applyDarkMode(initialDarkMode);

  return {
    darkMode: initialDarkMode,
    setDarkMode: (darkMode: boolean) => {
      applyDarkMode(darkMode);
      localStorage.setItem("darkMode", String(darkMode));
      set({ darkMode });
    },
  };
};
