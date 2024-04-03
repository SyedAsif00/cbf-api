import React from "react";
import PropTypes from "prop-types";
import styles from "../../../src/styles/styles.json";

const Sidebar = ({ apis, onSelectApi, selectedApi }) => {
  return (
    <div style={styles.sidebar}>
      {apis.map((api, index) => {
        const isActive =
          selectedApi &&
          selectedApi.endpoint === api.endpoint &&
          selectedApi.method === api.method;
        const itemStyles = isActive
          ? { ...styles.sidebarItem, ...styles.sidebarItemActive }
          : styles.sidebarItem;

        return (
          <div key={index} onClick={() => onSelectApi(api)} style={itemStyles}>
            {api.method} {api.endpoint}
          </div>
        );
      })}
    </div>
  );
};

Sidebar.propTypes = {
  apis: PropTypes.array,
  onSelectApi: PropTypes.func.isRequired,
  selectedApi: PropTypes.object,
};

Sidebar.defaultProps = {
  apis: [],
};

export default Sidebar;
