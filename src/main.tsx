import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./router";
import "./assets/css/init.css";
import "./mock/index";

const dom = document.getElementById("root") as Element;
const root = createRoot(dom);

root.render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
