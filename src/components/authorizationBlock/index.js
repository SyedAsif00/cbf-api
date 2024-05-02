import React, { useState } from "react";
import { Typography } from "antd";
import LanguageCodeBlock from "../langugaeSelector";
import { useApiData } from "../../context/ApiDataContext";
import { UserAuthInputs, SingleInput } from "../common/formInputs/formInput";
import styles from "../../styles/styles.contants.json";
import "./index.css";
import { useAuth } from "../../context/AuthContext";
import texts from "../../mockData/texts";
const { Text } = Typography;

const AuthorizationBlock = () => {
  const { user } = useAuth();
  const { currentApiDetails } = useApiData();
  const [activeLanguage, setActiveLanguage] = useState("Python");

  const handleTabChange = (key) => {
    setActiveLanguage(key);
  };

  return (
    <section className="authorization-container">
      <header className="authorization-header">
        <p
          style={{
            fontSize: styles.fontSize.smallFont,
            color: styles.colors.lightGray,
          }}
        >
          {texts.AuthorizationBlock.AuthorizationText}
        </p>
        <UserAuthInputs />
        {!user && (
          <Typography>
            <Text style={{ fontSize: "13px" }}>
              {texts.AuthorizationBlock.loginPrompt}
            </Text>
          </Typography>
        )}
        <div style={{ marginTop: "20px" }}>
          <p
            style={{
              fontSize: styles.fontSize.smallFont,
              color: styles.colors.lightGray,
            }}
          >
            {texts.AuthorizationBlock.urlText}
          </p>
          <SingleInput
            readOnly={true}
            addonBefore="BaseURL"
            value={`${currentApiDetails.baseUrl}/${currentApiDetails.endpoint}`}
          />
        </div>
      </header>

      <LanguageCodeBlock
        language={activeLanguage}
        currentApiDetails={currentApiDetails}
      />
    </section>
  );
};

export default AuthorizationBlock;
