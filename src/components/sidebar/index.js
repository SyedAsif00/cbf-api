import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useApiData } from "../../context/ApiDataContext";
import { CloseOutlined } from "@ant-design/icons";
import "./index.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { apis, setApiDetails } = useApiData();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const lastEndpoint = localStorage.getItem("selectedApiEndpoint");
    if (lastEndpoint) {
      navigate(`/api/${lastEndpoint}`);
    }
  }, [navigate]);

  const handleApiClick = (endpoint) => {
    setApiDetails(endpoint);
    localStorage.setItem("selectedApiEndpoint", endpoint);
    navigate(`/api/${endpoint}`);
  };

  const isActive = (endpoint) => location.pathname.endsWith(endpoint);

  return (
    <aside className={`container ${isOpen ? "open" : ""}`}>
      {isOpen && (
        <div className="close-icon" onClick={toggleSidebar}>
          <CloseOutlined style={{ fontSize: "24px", color: "#333" }} />
        </div>
      )}
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
  );
};

export default Sidebar;
