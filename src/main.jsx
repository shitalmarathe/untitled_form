import React from "react";
import { createRoot } from "react-dom/client";
import Home from "@/pages/Home";
import "@/global.css";

const appEl = document.querySelector("#app");
const root = createRoot(appEl);

root.render(
  <React.StrictMode>
  <Home />
  </React.StrictMode>
);




