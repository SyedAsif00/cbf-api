import React, { useContext } from "react";
import { Input, Button } from "antd";
import { Select, Row, Col } from "antd";
import ApiDataContext from "../../context/ApiDataContext";
import AuthorizationBlock from "../../components/authorizationBlock";
import "./index.css";
import { useResponsive } from "../../customHooks/responsive";
import texts from "../../mockData/texts";
const { Option } = Select;
const ApiDetails = () => {
  const { apis } = useContext(ApiDataContext);
  const { currentApiDetails } = useContext(ApiDataContext);

  if (!currentApiDetails) {
    return <div>{texts.apiDetails.selectEndpointTitle}</div>;
  }

  return (
    <Row>
      <Col>
        <div className="api-details-container">
          <h1 className="api-details-title">{currentApiDetails?.title}</h1>
          <div className="base-url-container">
            <span className="method-tag">{currentApiDetails?.method}</span>
            <span>{`${currentApiDetails?.baseUrl}/${currentApiDetails?.endpoint}`}</span>
          </div>
          <p className="api-details-description">
            {currentApiDetails?.description}
          </p>
          <div className="call-rate-tag">{currentApiDetails?.callRate}</div>
          {currentApiDetails?.fields?.map((field) => (
            <div key={field.name} className="input-field-container">
              <label className="input-field-label">
                {field.name} {field.required && "required"}
              </label>
              <Input
                size="large"
                className="input-field"
                placeholder={field.placeholder}
              />
            </div>
          ))}
          <div className="response-section">
            <span className="response-message">
              {texts.apiDetails.responseText}
            </span>
            <Select defaultValue="204" className="response-select">
              <Option value="204">
                <span className="response-dot" />
                {texts.apiDetails.response}
              </Option>
            </Select>
          </div>
        </div>
      </Col>
      <Col>
        <AuthorizationBlock />
      </Col>
    </Row>
  );
};

export default ApiDetails;
