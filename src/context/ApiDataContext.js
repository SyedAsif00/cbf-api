import React, { createContext, useState, useContext } from "react";
import { apiData } from "../mockData/mockData";

const ApiDataContext = createContext();
export const useApiData = () => useContext(ApiDataContext);

export const ApiDataProvider = ({ children }) => {
  const [currentApiDetails, setCurrentApiDetails] = useState();
  const [selectedApiEndpoint, setSelectedApiEndpoint] = useState("");
  const [apis, setApis] = useState(apiData);
  const setApiDetails = (endpoint) => {
    const details = apiData.find((api) => api.endpoint === endpoint);
    setCurrentApiDetails(details);
    setSelectedApiEndpoint(endpoint);
  };

  return (
    <ApiDataContext.Provider
      value={{ currentApiDetails, setApiDetails, apis, selectedApiEndpoint }}
    >
      {children}
    </ApiDataContext.Provider>
  );
};

export default ApiDataContext;
