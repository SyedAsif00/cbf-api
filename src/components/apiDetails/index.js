import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useEmissionData } from "../../context/EmissionDataContext";
import { Row, Col, Select, Card, Input } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import AuthorizationBlock from "../../components/authorizationBlock";
import { generateCodeSnippets } from "../../js-helper/helpers";
import { CustomInput } from "../common/formInputs/formInput";
import { DummyUrl } from "../../mockData/mockData";
import "./index.css";

const ApiDetails = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const name = query.get("name");
  const { data: emissionsData } = useEmissionData();
  const categoryData = emissionsData[name];
  const baseUrl = `${DummyUrl}${name}`;

  const [inputValues, setInputValues] = useState({ params: {} });
  const [snippets, setSnippets] = useState({
    python: "",
    javascript: "",
    curl: "",
  });
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const updateCredentials = (username, password) => {
    setCredentials({ username, password });
  };
  useEffect(() => {
    const newSnippets = generateCodeSnippets(
      baseUrl,
      inputValues.params,
      credentials
    );
    setSnippets(newSnippets);
  }, [inputValues, credentials, baseUrl]);

  const handleInputChange = (name, value) => {
    setInputValues((prevState) => {
      let params = { ...prevState.params };
      if (value === "") {
        delete params[name]; // Remove the key if the value is empty
      } else {
        params[name] = value; // Otherwise, update the key with the new value
      }
      return { params };
    });
  };

  if (!categoryData) {
    return <h2>No data available for this category</h2>;
  }

  return (
    console.log(inputValues),
    (
      <div className="apiDetailsContainer">
        <Row gutter={16}>
          <Col className="categoryDetailsWrapper" xs={24} md={14} xxl={16}>
            <div className="categoryTitleContainer">
              <div className="category-title-icon">
                <EnvironmentOutlined
                  style={{ fontSize: "22px", color: "#52c41a" }}
                />
                <h1 className="categoryTitle">{categoryData.title}</h1>
              </div>
              <div className="titleBorder"></div>
            </div>

            <div className="categoryInstructions">
              <h4>Instructions</h4>
              <p className="inputDescription">{categoryData.ins}</p>
            </div>

            <Card
              className="categoryFormWrapper"
              style={{ overflowY: "auto", height: "80vh" }}
            >
              {categoryData.texts.map((text) => (
                <div key={text.name} className="formItem">
                  <div className="formTextLabel">
                    <label className="categoryInputLabel">{text.title}</label>
                    <CustomInput
                      value={inputValues.params[text.name] || ""}
                      onChange={(e) =>
                        handleInputChange(text.name, e.target.value)
                      }
                    />
                  </div>
                  <div>
                    {text.desc && (
                      <p className="inputDescription">{text.desc}</p>
                    )}
                  </div>
                </div>
              ))}
            </Card>
          </Col>
          <Col xs={24} md={10} xxl={8}>
            <AuthorizationBlock
              snippets={snippets}
              inputValues={inputValues}
              updateCredentials={updateCredentials}
            />
          </Col>
        </Row>
      </div>
    )
  );
};

export default ApiDetails;
