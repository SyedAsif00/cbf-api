import React, { useState, useEffect } from "react";
import { Input } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { mockCodeSnippets } from "../../mockData/mockData";
import CustomTabs from "../common/customTabs/CustomTab";
import "./index.css";
import TickButton from "../other/TickButton";
import { copyToClipboard } from "../../js-helper/copy";

const LanguageCodeBlock = ({ currentApiDetails }) => {
  const [activeLanguage, setActiveLanguage] = useState("Python");
  const [codeSnippet, setCodeSnippet] = useState("");

  useEffect(() => {
    if (mockCodeSnippets[activeLanguage]) {
      setCodeSnippet(mockCodeSnippets[activeLanguage](currentApiDetails));
    }
  }, [activeLanguage, currentApiDetails]);

  const tabList = [
    { title: "Python", key: "Python" },
    { title: "JavaScript (Node.js)", key: "JavaScript" },
    { title: "Ruby", key: "Ruby" },
    { title: "PHP", key: "PHP" },
  ];

  return (
    <div className="code-block-container">
      <CustomTabs
        activeKey={activeLanguage}
        onTabChange={setActiveLanguage}
        tabList={tabList}
      />
      <div className="code-block-header">
        <div className="header-title-and-button">
          <span>API REQUEST</span>
          <TickButton
            tickColor="green"
            icon={<CopyOutlined style={{ color: "darkgrey" }} />}
            onClick={() => {
              copyToClipboard(codeSnippet, "Code has been copied!");
            }}
          />
        </div>
      </div>
      <Input.TextArea
        className="code-block-content"
        value={codeSnippet}
        rows={10}
        readOnly
      />
    </div>
  );
};

export default LanguageCodeBlock;
