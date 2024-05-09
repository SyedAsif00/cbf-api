import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEmissionData } from "../../context/EmissionDataContext";
import { Input } from "antd";
import "./index.css";
import { CloseOutlined } from "@ant-design/icons";
import { CustomInput } from "../common/formInputs/formInput";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const { data: emissionData } = useEmissionData();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleEmissionClick = (name) => {
    navigate(`/form?name=${name}`);
    setIsOpen(false);
  };

  const filteredEmissions = Object.keys(emissionData).filter((key) =>
    emissionData[key].title.toLowerCase().includes(search)
  );

  // Check if the current key is the active key based on URL search params
  const isActive = (key) =>
    new URLSearchParams(location.search).get("name") === key;

  if (isOpen) {
    return (
      <div className={`drawer ${isOpen && "animate"} left`}>
        <div
          onClick={() => setIsOpen(false)}
          style={{ position: "absolute", right: 20 }}
        >
          <CloseOutlined />
        </div>
        <CustomInput
          placeholder="Search..."
          size="small"
          type="text"
          className="searchInput"
          value={search}
          onChange={handleSearchChange}
          style={{ marginTop: "30px" }}
        />
        <ul style={{ listStyle: "none", marginTop: 20 }} className="list">
          {filteredEmissions.map((key) => (
            <li
              key={key}
              className={`sidebar-item ${isActive(key) ? "active" : ""}`}
            >
              <Link
                to={`/form?name=${key}`}
                className="link"
                onClick={() => handleEmissionClick(key)}
              >
                {emissionData[key].title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <aside className={`container`}>
      <CustomInput
        placeholder="jump to..."
        size="small"
        type="text"
        // className="searchInput"
        onChange={handleSearchChange}
      />
      <ul style={{ listStyle: "none", marginTop: 20 }} className="list">
        {filteredEmissions.map((key) => (
          <li
            key={key}
            className={`sidebar-item ${isActive(key) ? "active" : ""}`}
          >
            <Link
              to={`/form?name=${key}`}
              className="link"
              onClick={() => handleEmissionClick(key)}
            >
              {emissionData[key].title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
