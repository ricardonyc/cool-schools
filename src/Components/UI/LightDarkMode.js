import React, { useContext } from "react";
import { BsSunFill } from "react-icons/bs";
import { GiMoonBats } from "react-icons/gi";
import { ThemeContext } from "../../context/DarkModeContext";
import "./styling/variables.css";

const LightDarkMode = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const styling = {
    fontSize: "3.5rem",
    position: "fixed",
    bottom: "3rem",
    right: "4rem",
    cursor: "pointer",
    zIndex: "9999999999999999999999",
  };

  const sun = {
    color: "orange",
  };

  const moon = {
    color: "var(--darkmode-navy)",
  };

  return (
    <div style={styling} onClick={() => setDarkMode((prev) => !prev)}>
      {darkMode ? <BsSunFill style={sun} /> : <GiMoonBats style={moon} />}
    </div>
  );
};

export default LightDarkMode;
