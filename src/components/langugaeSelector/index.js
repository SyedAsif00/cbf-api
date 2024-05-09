import React, { useState } from "react";
import { CopyOutlined } from "@ant-design/icons";
import CustomTabs from "../../components/common/customTabs/CustomTab";
import "./index.css";
import { copyToClipboard } from "../../js-helper/helpers";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia as style } from "react-syntax-highlighter/dist/esm/styles/prism";

const LanguageSelector = ({ snippets, inputValues }) => {
  const [activeLanguage, setActiveLanguage] = useState("javascript");
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const tabsData = Object.keys(snippets).map((lang) => ({
    key: lang,
    label: capitalizeFirstLetter(lang),
    content: (
      <div className="code-block-container">
        <SyntaxHighlighter
          language={lang}
          style={style}
          className="code-block-content"
        >
          {snippets[lang].replace(
            /\$\{([^}]+)\}/g,
            (_, match) => inputValues[match] || ""
          )}
        </SyntaxHighlighter>
        <CopyOutlined
          className="copy-icon"
          onClick={() =>
            copyToClipboard(
              snippets[activeLanguage] ?? "",
              "Code has been copied!"
            )
          }
        />
      </div>
    ),
  }));

  return (
    <div>
      <CustomTabs
        activeKey="javascript"
        onChange={(key) => setActiveLanguage(key.toLowerCase())}
        tabsData={tabsData}
      />
    </div>
  );
};

export default LanguageSelector;
