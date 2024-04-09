import React, { useContext, useState } from "react";
import { Tabs, Input, Button, Row, Col } from "antd";
import LanguageCodeBlock from "../langugaeSelector";
import { useApiData } from "../../context/ApiDataContext";
import { UserAuthInputs, SingleInput } from "../common/formInputs/formInput";
import styles from "../../styles/styles.contants.json";
import "./index.css";
const { TabPane } = Tabs;
const { Group } = Input;

const AuthorizationBlock = () => {
  const { currentApiDetails } = useApiData();
  const [activeLanguage, setActiveLanguage] = useState("Python");

  const handleTabChange = (key) => {
    setActiveLanguage(key);
  };

  if (!currentApiDetails) {
    return <div>Select an endpoint to see the details</div>;
  }

  return (
    <div className="authorization-container">
      <div className="authorization-header">
        <div
          style={{
            fontSize: styles.fontSize.smallFont,
            color: styles.colors.lightGray,
          }}
        >
          AUTHORIZATION
        </div>

        <UserAuthInputs />
        <div style={{ marginTop: "20px" }}>
          <div
            style={{
              fontSize: styles.fontSize.smallFont,
              color: styles.colors.lightGray,
            }}
          >
            URL
          </div>

          <SingleInput
            readOnly={true}
            addonBefore="BaseURL"
            value={`${currentApiDetails.baseUrl}/${currentApiDetails.endpoint}`}
          />
        </div>
      </div>

      <LanguageCodeBlock
        language={activeLanguage}
        currentApiDetails={currentApiDetails}
      />
    </div>
  );
};

export default AuthorizationBlock;
