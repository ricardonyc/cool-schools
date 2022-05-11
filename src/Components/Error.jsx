import React, { useContext } from "react";
import NakedGuy from "./assets/naked-gaze.png";
import css from "./UI/styling/Error.module.css";
import { ThemeContext } from "../context/DarkModeContext";
import "./UI/styling/variables.css";
import { Link } from "react-router-dom";

function Error(props) {
  const { darkMode } = useContext(ThemeContext);

  const textColor = {
    color: darkMode ? "var(--yellow)" : "var(--teal)",
  };

  const linkColor = {
    color: darkMode ? "white" : "black",
  };

  return (
    <div className={css.error__container}>
      <div className={css["error__container--text"]}>
        <h1 style={textColor}>LOST?</h1>
        <p>Find your way back!</p>
        <ul>
          <Link style={linkColor} to="/">
            Home
          </Link>
          <li>Schools</li>
          <li>Other</li>
        </ul>
      </div>
      <div className={css["error__container--icon"]}>
        <img src={NakedGuy} alt="" />
      </div>
    </div>
  );
}

export default Error;
