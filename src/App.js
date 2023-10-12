import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";

import { Navbar, Footer, SideBar } from "./components";

import { Home, List } from "./pages";

export default function App() {
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="App">
        <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
              {" "}
              <TooltipComponent content="Setting" position="Top">
                {" "}
              </TooltipComponent>{" "}
            </div>
            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                <SideBar />{" "}
              </div>
            ) : (
              <div className="w-0  dark:bg-secondary-dark-bg bg-white ">
                <SideBar />{" "}
              </div>
            )}

            <div
              className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
                activeMenu ? `md:ml-72` : `flex-2`
              }
`}
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                <Navbar />
              </div>{" "}
              <div>
                {themeSetting && <ThemeSettings />}

                <Routes>
                  {/*Dashboard*/}
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />

                  {/*Pages */}
                  <Route path="/:coin" element={<List />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>{" "}
      </div>
    </div>
  );
}
