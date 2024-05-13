import React, { useState } from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import { useResponsive } from "../../customHooks/responsive";

const CommonLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { isMobile } = useResponsive();

  return (
    <div>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div style={{ display: "flex" }}>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div
          className={`overlay ${!isOpen && "overlayHidden"} ${
            isOpen && "overlayOpen"
          }`}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
        <div
          className="main-content"
          style={{
            padding: isMobile ? "" : "10px 20px",
            width: "100vw",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default CommonLayout;
