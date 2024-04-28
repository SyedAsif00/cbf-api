import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ApiDataProvider } from "./context/ApiDataContext";
import { AuthProvider } from "./context/AuthContext";
import CommonLayout from "./components/commonLayout";
import ApiDetails from "./components/apiDetails";
import UserProfile from "./components/userProfile";
import Loginform from "./components/auth/login";
import "./App.css";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        {" "}
        <ApiDataProvider>
          <Routes>
            <Route path="/" element={<Navigate replace to="/dashboard" />} />
            <Route
              path="/dashboard"
              element={
                <CommonLayout>
                  <ApiDetails />
                </CommonLayout>
              }
            />
            <Route
              path="/profile"
              element={
                <CommonLayout>
                  <UserProfile />
                </CommonLayout>
              }
            />
            <Route
              path="/dashboard/api/:endpoint"
              element={
                <CommonLayout>
                  <ApiDetails />
                </CommonLayout>
              }
            />
            <Route path="/login" element={<Loginform />} />
          </Routes>
        </ApiDataProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
