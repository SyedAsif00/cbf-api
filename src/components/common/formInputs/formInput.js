import React, { useState } from "react";
import { Input } from "antd";
import { isAuthenticated } from "../../../helpers/authHelper";
const { Group } = Input;

export const UserAuthInputs = ({ updateCredentials }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
    updateCredentials(newUsername, password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    updateCredentials(username, newPassword);
  };

  return (
    <Group compact>
      <Input
        addonBefore="Basic"
        value={username}
        placeholder="Username"
        onChange={handleUsernameChange}
        style={{ width: "calc(50% - 2px)", borderRight: "none" }}
      />
      <Input.Password
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        style={{ width: "calc(50% - 2px)" }}
      />
    </Group>
  );
};

const customStyle = {
  width: "100%",
  maxWidth: "600px",
  margin: "10px 0px",
  height: "30px",
  padding: "0 15px",
  border: "1px solid #d9d9d9",
  borderRadius: "4px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  outline: "none",
  fontSize: "16px",
  color: "rgba(0, 0, 0, 0.88)",
  backgroundColor: "#fff",
  transition: "all 0.3s ease-in-out",
};

export const CustomInput = ({ value, onChange, placeholder, addonBefore }) => (
  <Input
    style={customStyle}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    addonBefore={addonBefore}
    onFocus={(e) => {
      e.target.style.borderColor = "#228b22";
      e.target.style.boxShadow = "0 0 8px rgba(121, 210, 143, 0.5)";
    }}
    onBlur={(e) => {
      e.target.style.borderColor = "#cccccc";
      e.target.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
    }}
  />
);

export const SingleInput = ({ addonBefore, value, readOnly }) => {
  return (
    <Input
      addonBefore={addonBefore}
      value={value}
      readOnly={readOnly}
      style={{ width: "100%" }}
    />
  );
};
