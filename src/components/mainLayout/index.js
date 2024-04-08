import React from "react";
import MainContainer from "../mainContainer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <MainContainer>{children}</MainContainer>
    </div>
  );
};

export default MainLayout;
