import React from "react";
import { Button, TextField } from "@mui/material";
import styles from "../../styles/styles.json";

const AuthorizationTest = ({
  baseEndpoint,
  api,
  testStatus,
  setTestStatus,
}) => {
  const testApi = async () => {
    setTestStatus({
      ...testStatus,
      isLoading: true,
      color: null,
      status: null,
    });
    try {
      const response = await fetch(`${baseEndpoint}${api.endpoint}`, {
        method: api.method,
      });
      const responseData = await response.json();
      console.log(responseData);
      setTestStatus({
        isLoading: false,
        color: response.ok ? "green" : "red",
        status: response.status,
      });
    } catch (error) {
      console.error(error);
      setTestStatus({
        isLoading: false,
        color: "red",
        status: "Network error",
      });
    }
  };

  return (
    <div style={styles.testArea}>
      <TextField
        label="Base URL"
        value={`${baseEndpoint}${api.endpoint}`}
        variant="outlined"
        fullWidth
        margin="normal"
        disabled
      />
      <Button
        style={styles.testButton}
        onClick={testApi}
        disabled={testStatus.isLoading}
      >
        {testStatus.isLoading ? "Testing..." : "TEST"}
      </Button>
      {!testStatus.isLoading && testStatus.status && (
        <div
          style={{
            ...styles.statusIndicator,
            backgroundColor: testStatus.color,
          }}
        ></div>
      )}
    </div>
  );
};

export default AuthorizationTest;
