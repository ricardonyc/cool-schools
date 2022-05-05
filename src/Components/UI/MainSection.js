import React, { useContext } from "react";
import css from "./styling/MainSection.module.css";
import { ThemeContext } from "../../context/darkmode-context";

function MainSection(props) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={
        darkMode
          ? `${css["main__section--container"]} ${css.dark}`
          : `${css["main__section--container"]} ${css.light}`
      }
    >
      <h1 className={css["main__section--h1"]}>
        Find and Review Your Favorite <br /> (and Not-so-Favorite) Universities
      </h1>
    </div>
  );
}

export default MainSection;
