import React, { createContext, useContext, useState } from "react";
import emissionData from "../emissionData/emissionData.json"; // Ensure this import path is correct

const EmissionDataContext = createContext();

export const useEmissionData = () => useContext(EmissionDataContext);

export const EmissionDataProvider = ({ children }) => {
  return (
    <EmissionDataContext.Provider value={{ data: emissionData }}>
      {children}
    </EmissionDataContext.Provider>
  );
};

export default EmissionDataContext;
