import React from "react";
import { createRoot } from "react-dom/client";
import Home from "../pages/Home";
import "./global.css";

const appEl = document.querySelector("#app");
const root = createRoot(appEl);

root.render(
  <React.StrictMode>
  <Home />
  </React.StrictMode>
);

function Watch() {
  return (
    <h1 className="text-6xl text-red-500 bg-blue-300 p-3 w-fit rounded-lg">
      ⌚ This is a watch.
    </h1>
  );
}


