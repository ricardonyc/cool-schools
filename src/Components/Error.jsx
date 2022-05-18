import React, { useContext } from "react";
import NakedGuy from "./assets/naked-gaze.png";
import css from "./UI/styling/Error.module.css";
import { ThemeContext } from "../context/DarkModeContext";
import "./UI/styling/variables.css";
import { Link, useNavigate } from "react-router-dom";

function Error(props) {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const textColor = {
    color: darkMode ? "var(--yellow)" : "var(--teal)",
  };

  const linkColor = {
    color: darkMode ? "white" : "black",
    fontSize: "2.2rem",
    textDecoration: "underline",
    cursor: "pointer",
  };

  return (
    <div className={css.error__container}>
      <div className={css["error__container--text"]}>
        <h2 style={textColor}>LOST?</h2>
        <Link style={linkColor} to="/">
          Home
        </Link>
        <p
          className={css.back__btn}
          style={linkColor}
          onClick={() => navigate(-1)}
        >
          Back
        </p>
      </div>
      <div className={css["error__container--icon"]}>
        <img src={NakedGuy} alt="" />
      </div>
    </div>
  );
}

export default Error;
