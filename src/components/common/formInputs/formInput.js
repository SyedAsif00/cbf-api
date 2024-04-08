import React, { useState } from "react";
import { Input } from "antd";
import { isAuthenticated } from "../../../helpers/authHelper";
const { Group } = Input;

export const UserAuthInputs = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAuthentication = () => {
    const authenticated = isAuthenticated(username, password);
    console.log(authenticated);
  };

  return (
    <Group compact>
      <Input
        addonBefore="Basic"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        onBlur={handleAuthentication}
        style={{ width: "calc(50% - 2px)", borderRight: "none" }}
      />
      <Input.Password
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={handleAuthentication}
        style={{ width: "calc(50% - 2px)" }}
      />
    </Group>
  );
};

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
