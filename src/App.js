import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ApiDataProvider } from "./context/ApiDataContext";
import CommonLayout from "./components/commonLayout";
import ApiDetails from "./components/apiDetails";
import UserProfile from "./components/userProfile";
import Loginform from "./components/auth/login";
import "./App.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loader from "../src/components/common/antdSpin";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <ApiDataProvider>
        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route
            path="/dashboard"
            element={
              <CommonLayout isOpen={isOpen} setIsOpen={setIsOpen}>
                <ApiDetails />
                {/* <AuthorizationBlock /> */}
              </CommonLayout>
            }
          />
          {user ? (
            <Route
              path="/profile"
              element={
                <CommonLayout isOpen={isOpen} setIsOpen={setIsOpen}>
                  <UserProfile />
                </CommonLayout>
              }
            />
          ) : (
            <Route
              path="/profile"
              element={
                <Navigate
                  to="/dashboard"
                  replace
                  state={{ from: "/profile" }}
                />
              }
            />
          )}
          <Route
            path="/dashboard/api/:endpoint"
            element={
              <CommonLayout isOpen={isOpen} setIsOpen={setIsOpen}>
                <ApiDetails />
              </CommonLayout>
            }
          />
          <Route path="/login" element={<Loginform />} />
        </Routes>
      </ApiDataProvider>
    </Router>
  );
};

export default App;
