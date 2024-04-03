import React from "react";
import styles from "../../styles/styles.json";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>ApiTester</div>
      <nav style={styles.menu}>
        <a href="#guides" style={styles.menuItem}>
          Guides
        </a>
        <a href="#recipes" style={styles.menuItem}>
          Recipes
        </a>
        <a href="#api-reference" style={styles.menuItem}>
          API Reference
        </a>
      </nav>
      <input type="text" style={styles.searchInput} placeholder="Search" />
      <a href="#login" style={styles.login}>
        Log in
      </a>
      <a href="#help-center" style={styles.helpCenter}>
        Help center
      </a>
    </header>
  );
};

export default Header;
