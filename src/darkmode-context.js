import React from "react";

export const ThemeContext = React.createContext();

const DarkmodeProvider = ({ value, children }) => {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default DarkmodeProvider;
