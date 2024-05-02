import React, { useContext } from "react";
import { Helmet } from "react-helmet"; // Import Helmet for managing head section
import { Input, Select, Row, Col } from "antd";
import ApiDataContext from "../../context/ApiDataContext";
import { AuthorizationBlock } from "../../shared";
import "./index.css";
import texts from "../../mockData/texts";
const { Option } = Select;

const ApiDetails = () => {
  const { currentApiDetails } = useContext(ApiDataContext);

  if (!currentApiDetails) {
    return <h2>{texts.apiDetails.selectEndpointTitle}</h2>;
  }

  return (
    <main>
      <Helmet>
        <title>{currentApiDetails.title} - API Details</title>
        <meta name="description" content={currentApiDetails.description} />
        <meta
          property="og:title"
          content={currentApiDetails.title + " - API Details"}
        />
        <meta
          property="og:description"
          content={currentApiDetails.description}
        />
      </Helmet>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={14} lg={14}>
          <section aria-labelledby="api-title">
            <h1 id="api-title" className="api-details-title">
              {currentApiDetails.title}
            </h1>
            <div className="base-url-container">
              <span className="method-tag">{currentApiDetails.method}</span>
              <span>{`${currentApiDetails.baseUrl}/${currentApiDetails.endpoint}`}</span>
            </div>
            <p className="api-details-description">
              {currentApiDetails.description}
            </p>
            <div className="call-rate-tag">{currentApiDetails.callRate}</div>
            {currentApiDetails.fields?.map((field) => (
              <div key={field.name} className="input-field-container">
                <label htmlFor={field.name} className="input-field-label">
                  {field.name} {field.required && "(required)"}
                </label>
                <Input
                  id={field.name}
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
          </section>
        </Col>
        <Col xs={24} sm={24} md={10} lg={10}>
          <AuthorizationBlock />
        </Col>
      </Row>
    </main>
  );
};

export default ApiDetails;
