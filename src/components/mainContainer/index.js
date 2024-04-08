import React from "react";
import { Row, Col } from "antd";
import ApiDetails from "../apiDetails";
import AuthorizationBlock from "../authorizationBlock";

const MainContainer = ({ children }) => {
  return (
    <div>
      <Row gutter={16} style={{ padding: "10px 20px" }}>
        <Col className="gutter-row" xs={24} md={15}>
          <ApiDetails />
          {children}
        </Col>
        <Col className="gutter-row" xs={24} md={9}>
          <AuthorizationBlock />
        </Col>
      </Row>
    </div>
  );
};

export default MainContainer;
