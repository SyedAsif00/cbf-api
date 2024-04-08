import React from "react";
import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">ApiTester</div>
      <nav className="menu">
        <a href="#guides" className="menuItem">
          Guides
        </a>
        <a href="#recipes" className="menuItem">
          Recipes
        </a>
        <a href="#api-reference" className="menuItem">
          API Reference
        </a>
      </nav>
      <input type="text" className="searchInput" placeholder="Search" />
      <a href="#login" className="login">
        Log in
      </a>
      <a href="#help-center" className="helpCenter">
        Help center
      </a>
    </header>
  );
};

export default Header;
