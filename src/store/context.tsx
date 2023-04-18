import { createContext } from "react";
import store from "./store";

const MobxContext = createContext<{ isLogin: boolean }>({
  isLogin: store.isLogin,
});
MobxContext.displayName = "MobxContext";

export default MobxContext;
