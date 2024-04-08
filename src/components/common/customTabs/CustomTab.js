import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const CustomTabs = ({ activeKey, onTabChange, tabList }) => {
  return (
    <Tabs activeKey={activeKey} onChange={onTabChange}>
      {tabList.map((tab) => (
        <TabPane tab={tab.title} key={tab.key} />
      ))}
    </Tabs>
  );
};

export default CustomTabs;
