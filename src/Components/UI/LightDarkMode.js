import React, { useContext } from "react";
import { BsSunFill } from "react-icons/bs";
import { GiMoonBats } from "react-icons/gi";
import { ThemeContext } from "../../darkmode-context";
import "./variables.css";

const LightDarkMode = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const styling = {
    fontSize: "3.5rem",
    position: "fixed",
    bottom: "3rem",
    right: "4rem",
    cursor: "pointer",
  };

  const sun = {
    color: "var(--yellow)",
  };

  return (
    <div style={styling} onClick={() => setDarkMode((prev) => !prev)}>
      {darkMode ? <BsSunFill style={sun} /> : <GiMoonBats />}
    </div>
  );
};

export default LightDarkMode;
