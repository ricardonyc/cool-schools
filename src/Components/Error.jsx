import React, { useContext } from "react";
import NakedGuy from "./assets/naked-gaze.png";
import css from "./UI/styling/Error.module.css";
import { ThemeContext } from "../context/DarkModeContext";

function Error(props) {
  const { darkMode } = useContext(ThemeContext);
  // console.log(random);
  console.log(darkMode);

  return (
    <div className={css.error__container}>
      <div className={css["error__container--text"]}>
        <h1>LOST?</h1>
        <p>Find your way back!</p>
        <ul>
          <li>Home</li>
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
