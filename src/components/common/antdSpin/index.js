import React from "react";
import { Spin } from "antd";
import "./index.css"; // Make sure this path is correct

const Spinner = ({ isLoading = true, size = "large" }) => {
  if (!isLoading) return null;

  return (
    <div className="spinner-container">
      <Spin className="green-spinner" size={size} />
    </div>
  );
};

export default Spinner;
