import React from "react";
import styles from "../../styles/styles.json";

const APIDescription = ({ title, description }) => {
  return (
    <div style={styles.APIDescription}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default APIDescription;
