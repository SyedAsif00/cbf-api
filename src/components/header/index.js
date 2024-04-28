import React from "react";
import { useAuth } from "../../context/AuthContext";
import { headerContent } from "../../mockData/mockData";
import { useResponsive } from "../../customHooks/responsive";
import { MenuOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Avatar, Dropdown, Menu } from "antd";
import { handleLogout } from "../../helpers/authHelper";
import CustomDropdown from "../common/customAntdDropdown";
import "./index.css";

const Header = ({ isOpen, setIsOpen }) => {
  const { user } = useAuth();
  const { isTablet } = useResponsive();

  const userMenuItems = [
    {
      key: "profile",
      icon: <UserOutlined />,
      text: "Profile",
      link: "/profile",
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      text: "Logout",
      onClick: handleLogout,
    },
  ];

  return (
    <header className="header">
      <div className="logo">{headerContent.logoText}</div>

      {isTablet ? (
        <div className="hamburger-menu" onClick={() => setIsOpen(true)}>
          <MenuOutlined style={{ fontSize: "24px" }} />
        </div>
      ) : (
        <>
          <nav className="menu">
            {headerContent.menuItems.map((item) => (
              <Link to={item.link} className="menuItem" key={item.name}>
                {item.name}
              </Link>
            ))}
          </nav>

          {!user ? (
            <Link to="/login" className="login">
              {headerContent.loginText}
            </Link>
          ) : (
            <CustomDropdown userMenuItems={userMenuItems} />
          )}

          <Link to="/help-center" className="helpCenter">
            {headerContent.helpCenterText}
          </Link>
        </>
      )}
    </header>
  );
};

export default Header;
