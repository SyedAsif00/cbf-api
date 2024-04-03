import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../styles/styles.json";

const SidebarItem = ({ api }) => {
  return (
    <div style={styles.sidebarItem}>
      <NavLink to={`/api/${api.id}`}>{api.name}</NavLink>
      <span>{api.method}</span>
    </div>
  );
};

export default SidebarItem;
