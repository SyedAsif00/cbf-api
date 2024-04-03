import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { Grid } from "@mui/material";
import styles from "../../styles/styles.json";

const MainLayout = ({ children }) => {
  return (
    <div style={styles.appContainer}>
      <Sidebar />
      <main style={styles.mainContent}>{children}</main>
    </div>
  );
};

export default MainLayout;
