import { createContext } from "react";
import store, { MobxStore } from "./store";

const MobxContext = createContext<MobxStore>(store);

export default MobxContext;
