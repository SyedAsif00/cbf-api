import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Typography } from "antd";
import LanguageCodeBlock from "../langugaeSelector";
// import { useApiData } from "../../context/ApiDataContext";
import {
  UserAuthInputs,
  SingleInput,
  CustomInput,
} from "../common/formInputs/formInput";
import "./index.css";
import { useAuth } from "../../context/AuthContext";
import texts from "../../mockData/texts";
import { DummyUrl } from "../../mockData/mockData";
import { useEmissionData } from "../../context/EmissionDataContext";
import styles from "../../styles/styles.contants.json";
const { Text } = Typography;

const AuthorizationBlock = ({ snippets, inputValues, updateCredentials }) => {
  const { data: emissionData } = useEmissionData();
  const { user } = useAuth();

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const name = query.get("name");
  return (
    console.log(emissionData.title),
    (
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
          <UserAuthInputs updateCredentials={updateCredentials} />
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
            <CustomInput readOnly={true} value={`${DummyUrl}${name}`} />
          </div>
        </header>

        <LanguageCodeBlock
          inputValues={inputValues}
          snippets={snippets}
          emissionData={emissionData}
          // language={activeLanguage}
          // currentApiDetails={currentApiDetails}
        />
      </section>
    )
  );
};

export default AuthorizationBlock;
