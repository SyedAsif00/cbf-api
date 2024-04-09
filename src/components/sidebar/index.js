import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useApiData } from "../../context/ApiDataContext";
import { Input } from "antd";
import "./index.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { apis, setApiDetails, selectedApiEndpoint } = useApiData();
  const navigate = useNavigate();
  const location = useLocation();

  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

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

  const filteredApis = apis.filter(
    (api) =>
      api.title.toLowerCase().includes(search) ||
      api.endpoint.toLowerCase().includes(search)
  );

  if (!selectedApiEndpoint) return;

  return (
    <aside className={`container ${!isOpen ? "open" : ""}`}>
      <Input
        placeholder="jump to..."
        size="small"
        type="text"
        className="searchInput"
        onChange={handleSearchChange}
      />
      <ul style={{ listStyle: "none" }} className="list">
        {filteredApis.map((api) => (
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
