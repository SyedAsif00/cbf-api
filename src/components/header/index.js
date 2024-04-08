import React from "react";
import { headerContent } from "../../mockData/mockData";
import { useResponsive } from "../../customHooks/responsive";
import { MenuOutlined } from "@ant-design/icons"; // If you're using Ant Design
import "./index.css";

const Header = () => {
  const { isMobile } = useResponsive();

  return (
    <header className="header">
      <div className="logo">{headerContent.logoText}</div>

      {isMobile ? (
        // For mobile, display a hamburger menu icon
        <div className="hamburger-menu">
          <MenuOutlined style={{ fontSize: "24px" }} />
        </div>
      ) : (
        // For larger screens, display the full menu and other elements
        <>
          <nav className="menu">
            {headerContent.menuItems.map((item) => (
              <a href={item.link} className="menuItem" key={item.name}>
                {item.name}
              </a>
            ))}
          </nav>
          <input
            type="text"
            className="searchInput"
            placeholder={headerContent.searchPlaceholder}
          />
          <a href="#login" className="login">
            {headerContent.loginText}
          </a>
          <a href="#help-center" className="helpCenter">
            {headerContent.helpCenterText}
          </a>
        </>
      )}
    </header>
  );
};

export default Header;
