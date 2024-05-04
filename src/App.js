import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import {
  CommonLayout,
  ApiDetails,
  UserProfile,
  LoginForm,
  SignUpForm,
  ApiDataProvider,
  AuthProvider,
  ContactUs,
} from "./shared";
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
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<SignUpForm />} />

            <Route
              path="/contactus"
              element={
                <CommonLayout>
                  <ContactUs />
                </CommonLayout>
              }
            />
            {/* <Route path="/contactus" element={<ContactUs />} /> */}
          </Routes>
        </ApiDataProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
