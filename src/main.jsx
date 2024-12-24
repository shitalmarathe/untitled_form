import React from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "@/pages/Home";
import Error from "@/pages/Error"
import Success from "@/pages/Success"
import Nodatafound from "@/pages/Nodatafound"
import "@/global.css";

const appEl = document.querySelector("#app");
const root = createRoot(appEl);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/Error" element={<Error />}/>
        <Route path="/Success" element={<Success />} />
        <Route path="*" element={<Nodatafound />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
