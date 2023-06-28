import { createContext } from "react";
import store, { MobxStore } from "./store";

const MobxContext = createContext<{
  isLogin: MobxStore["isLogin"];
  userInfo: MobxStore["userInfo"];
}>({
  isLogin: store.isLogin,
  userInfo: store.userInfo,
});
MobxContext.displayName = "MobxContext";

export default MobxContext;
