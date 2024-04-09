import React, { useEffect, useLayoutEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useApiData } from "../../context/ApiDataContext";
import { CloseOutlined } from "@ant-design/icons";
import "./index.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { apis, setApiDetails, selectedApiEndpoint } = useApiData();
  const navigate = useNavigate();
  const location = useLocation();

  useLayoutEffect(() => {
    const currentPath = window.location.pathname;
    const apiEndpoint = currentPath.split("/api/")[1];
    if (apiEndpoint) {
      setApiDetails(apiEndpoint);
    }
  }, []);

  const handleApiClick = (endpoint) => {
    setApiDetails(endpoint);
    navigate(`/api/${endpoint}`);
  };

  const isActive = (endpoint) => location.pathname.endsWith(endpoint);

  if (!selectedApiEndpoint) return;

  return (
    console.log("isOpen> ", isOpen),
    (
      <aside className={`container ${!isOpen ? "open" : ""}`}>
        {/* {!isOpen && (
          <div className="close-icon" onClick={toggleSidebar}>
            <CloseOutlined style={{ fontSize: "24px", color: "#333" }} />
          </div>
        )} */}
        <ul style={{ listStyle: "none" }} className="list">
          {apis.map((api) => (
            <li
              key={api.endpoint}
              className={`sidebar-item ${
                isActive(api.endpoint) ? "activeLink" : ""
              }`}
              onClick={() => handleApiClick(api.endpoint)}
            >
              <Link
                to={`/api/${api.endpoint}`}
                className={`link ${isActive(api.endpoint) ? "activeLink" : ""}`}
              >
                {api.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    )
  );
};

export default Sidebar;
