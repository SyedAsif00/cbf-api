import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEmissionData } from "../../context/EmissionDataContext";
import { Input, Avatar, Menu, Dropdown } from "antd";
import "./index.css";
import { CloseOutlined, UserOutlined, DownOutlined } from "@ant-design/icons";
import { CustomInput } from "../common/formInputs/formInput";
import { useResponsive } from "../../customHooks/responsive";
import { useAuth } from "../../context/AuthContext";
const Sidebar = ({ isOpen, setIsOpen }) => {
  const { isMobile } = useResponsive();
  const location = useLocation();
  const { data: emissionData } = useEmissionData();
  const navigate = useNavigate();
  const { user } = useAuth();
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

  const isActive = (key) =>
    new URLSearchParams(location.search).get("name") === key;
  const menu = (
    <Menu>
      <Menu.Item key="profile">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="logout">
        <Link to="/login" onClick={() => {}}>
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );
  if (isOpen) {
    return (
      <div className={`drawer ${isOpen && "animate"} left`}>
        <div className="sidebarOpen-search">
          {isMobile && user && (
            <div className="profile-section">
              <Avatar icon={<UserOutlined />} />
              <div className="">
                <div className="username">{user.displayName}</div>
                <div className="role">{user.role}</div>
              </div>
              <Dropdown className="dropdown" overlay={menu} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <DownOutlined />
                </a>
              </Dropdown>
            </div>
          )}
          <CustomInput
            placeholder="Search..."
            size="small"
            type="text"
            // className="searchInput"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <ul
          style={{ listStyle: "none", marginTop: isMobile ? 5 : 20 }}
          className="list"
        >
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
    console.log(user),
    (
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
    )
  );
};

export default Sidebar;
