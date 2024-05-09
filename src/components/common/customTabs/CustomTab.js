import React from "react";
import { Tabs } from "antd";
import "./index.css";

const { TabPane } = Tabs;

const CustomTabs = ({ activeKey, onChange, tabsData }) => {
  return (
    <Tabs defaultActiveKey={activeKey} onChange={onChange}>
      {tabsData.map(({ key, label, content }) => (
        <TabPane tab={label} key={key}>
          {content}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default CustomTabs;
