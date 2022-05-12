import React, { useState } from "react";

export const SchoolContext = React.createContext();

const SchoolResultsProvider = ({ children }) => {
  const [schoolResults, setSchoolResults] = useState();
  const [userSearch, setUserSearch] = useState("");

  return (
    <SchoolContext.Provider
      value={{ schoolResults, setSchoolResults, userSearch, setUserSearch }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export default SchoolResultsProvider;
