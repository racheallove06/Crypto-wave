import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./contexts/ContextProvider";
import Home from "./pages/Home";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <BrowserRouter>
      {" "}
      <App />
    </BrowserRouter>
  </ContextProvider>
);
