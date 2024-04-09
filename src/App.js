import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ApiDataProvider } from "./context/ApiDataContext";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import MainLayout from "./components/mainLayout";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(true);
  };
  return (
    <Router>
      <ApiDataProvider>
        <div>
          <Header isOpen={isOpen} />
          <div style={{ display: "flex" }}>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <MainLayout />
          </div>
        </div>
      </ApiDataProvider>
    </Router>
  );
};

export default App;
