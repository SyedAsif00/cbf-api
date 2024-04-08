import React, { createContext, useState, useContext } from "react";
import { apiData } from "../mockData/mockData";

const ApiDataContext = createContext();
export const useApiData = () => useContext(ApiDataContext);

export const ApiDataProvider = ({ children }) => {
  const [currentApiDetails, setCurrentApiDetails] = useState(apiData[0]);
  const [apis, setApis] = useState(apiData);
  const setApiDetails = (endpoint) => {
    const details = apiData.find((api) => api.endpoint === endpoint);
    setCurrentApiDetails(details);
  };

  return (
    <ApiDataContext.Provider value={{ currentApiDetails, setApiDetails, apis }}>
      {children}
    </ApiDataContext.Provider>
  );
};

export default ApiDataContext;
