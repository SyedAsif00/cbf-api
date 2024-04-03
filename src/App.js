import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import MainLayout from "./components/mainLayout/MainLayout";
import Sidebar from "./components/sidebar/Sidebar";
import APIDescription from "./components/apiDetails/ApiDetails";
import AuthorizationTest from "./components/authorization/Authorization";
import styles from "../src/styles/styles.json";
const App = () => {
  const [selectedApi, setSelectedApi] = useState(null);
  const [testStatus, setTestStatus] = useState({
    isLoading: false,
    color: null,
    status: null,
  });

  const apiEndpoints = [
    { method: "GET", endpoint: "/posts", description: "Retrieves all posts" },
    {
      method: "GET",
      endpoint: "/posts/1",
      description: "Retrieves post with ID 1",
    },
    {
      method: "GET",
      endpoint: "/posts/1/comments",
      description: "Retrieves comments for post with ID 1",
    },
    {
      method: "GET",
      endpoint: "/comments?postId=1",
      description: "Retrieves comments for post with ID 1 via query",
    },
    { method: "POST", endpoint: "/posts", description: "Creates a new post" },
    {
      method: "PUT",
      endpoint: "/posts/1",
      description: "Updates post with ID 1",
    },
    {
      method: "PATCH",
      endpoint: "/posts/1",
      description: "Partially updates post with ID 1",
    },
    {
      method: "DELETE",
      endpoint: "/posts/1",
      description: "Deletes post with ID 1",
    },
  ];

  const handleSelectApi = (api) => {
    setTestStatus({ isLoading: false, color: null, status: null });
    setSelectedApi(api);
  };

  return (
    <>
      <Router>
        <div style={styles.appContainer}>
          <Header style={styles.header} />
          <div style={styles.mainLayout}>
            <Sidebar
              style={styles.sidebar}
              apis={apiEndpoints}
              onSelectApi={handleSelectApi}
              selectedApi={selectedApi}
            />
            <div style={styles.mainContent}>
              {selectedApi && (
                <>
                  <APIDescription
                    style={styles.APIDescription}
                    title={`${selectedApi.method} ${selectedApi.endpoint}`}
                    description={selectedApi.description}
                  />
                  <AuthorizationTest
                    baseEndpoint="https://jsonplaceholder.typicode.com"
                    api={selectedApi}
                    testStatus={testStatus}
                    setTestStatus={setTestStatus}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
