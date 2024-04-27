import React from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import { useResponsive } from "../../customHooks/responsive";

const CommonLayout = ({ isOpen, setIsOpen, children }) => {
  const { isMobile } = useResponsive();

  return (
    <div>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div style={isMobile ? {} : { display: "flex" }}>
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
            padding: "10px 20px",
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
