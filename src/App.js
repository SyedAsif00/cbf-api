// App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ApiDataProvider } from "./context/ApiDataContext";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import MainLayout from "./components/mainLayout";
import "./App.css";

const App = () => {
  return (
    <Router>
      <ApiDataProvider>
        <div>
          <Header />
          <div style={{ display: "flex" }}>
            <Sidebar />
            <MainLayout />
          </div>
        </div>
      </ApiDataProvider>
    </Router>
  );
};

export default App;
