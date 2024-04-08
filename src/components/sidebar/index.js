import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useApiData } from "../../context/ApiDataContext";
import "./index.css";

const Sidebar = () => {
  const { apis, setApiDetails } = useApiData();

  const handleApiClick = (endpoint) => {
    setApiDetails(endpoint);
  };

  return (
    <aside className="container">
      <ul className="list" style={{ listStyle: "none" }}>
        {apis.map((api) => (
          <li key={api.endpoint} onClick={() => handleApiClick(api.endpoint)}>
            <Link
              to={`/api/${api.endpoint}`}
              className="link"
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#e1e4e8";
                e.target.style.color = "#0056b3";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#fff";
                e.target.style.color = "#333";
              }}
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
