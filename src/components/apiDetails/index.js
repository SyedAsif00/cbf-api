import React, { useContext } from "react";
import { Input, Button } from "antd";
import { Select } from "antd";

import ApiDataContext from "../../context/ApiDataContext";
import "./index.css";
import { useResponsive } from "../../customHooks/responsive";
const { Option } = Select;
const ApiDetails = () => {
  const { currentApiDetails } = useContext(ApiDataContext);
  const { isMobile } = useResponsive();

  console.log("currentApiDetails >>>", currentApiDetails);
  if (!currentApiDetails) {
    return <div>Select an endpoint to see the details</div>;
  }

  return (
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
        <span className="response-message">RESPONSE</span>
        <Select defaultValue="204" className="response-select">
          <Option value="204">
            <span className="response-dot" />
            204
          </Option>
        </Select>
      </div>
    </div>
  );
};

export default ApiDetails;
