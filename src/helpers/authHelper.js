// helpers.js
import { getAuth, signOut } from "firebase/auth";
import { message } from "antd";

export const handleLogout = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      message.success("You have been logged out.");
    })
    .catch((error) => {
      message.error("Failed to log out.");
    });
};

export const isAuthenticated = (username, password) => {
  return true;
};
