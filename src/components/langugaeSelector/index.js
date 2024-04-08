import React, { useState, useEffect } from "react";
import { Input } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { mockCodeSnippets } from "../../mockData/mockData";
import CustomTabs from "../common/customTabs/CustomTab";
import "./index.css";

const LanguageCodeBlock = ({ currentApiDetails }) => {
  const [activeLanguage, setActiveLanguage] = useState("Python");
  const [codeSnippet, setCodeSnippet] = useState("");

  useEffect(() => {
    if (mockCodeSnippets[activeLanguage]) {
      setCodeSnippet(mockCodeSnippets[activeLanguage](currentApiDetails));
    }
  }, [activeLanguage, currentApiDetails]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {});
  };

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
        <span>API REQUEST</span>
        <CopyOutlined className="copy-code-icon" onClick={handleCopyCode} />
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
