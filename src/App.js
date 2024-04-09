import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ApiDataProvider } from "./context/ApiDataContext";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import MainLayout from "./components/mainLayout";
import "./App.css";
import { useResponsive } from "./customHooks/responsive";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useResponsive();
  return (
    <Router>
      <ApiDataProvider>
        <div>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
          <div style={isMobile ? {} : { display: "flex" }}>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <div
              className={`overlay ${!isOpen && "overlayHidden"} ${
                isOpen && "overlayOpen"
              }`}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <MainLayout />
          </div>
        </div>
      </ApiDataProvider>
    </Router>
  );
};

export default App;
