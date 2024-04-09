import React from "react";
import { Row, Col } from "antd";
import ApiDetails from "../apiDetails";
import AuthorizationBlock from "../authorizationBlock";
import { useResponsive } from "../../customHooks/responsive";
const MainContainer = () => {
  const { isTablet } = useResponsive();
  return (
    <div>
      <Row gutter={16} style={isTablet ? {} : { padding: "10px 20px" }}>
        <Col className="gutter-row" xs={24} md={16}>
          <ApiDetails />
        </Col>
        <Col className="gutter-row" xs={24} md={8}>
          <AuthorizationBlock />
        </Col>
      </Row>
    </div>
  );
};

export default MainContainer;
