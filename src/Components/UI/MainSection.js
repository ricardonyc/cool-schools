import React, { useContext } from "react";
import css from "./styling/MainSection.module.css";
import { ThemeContext } from "../../context/DarkModeContext";
import { Button } from "./styling/Button";

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
      {/* TAKES USER TO SEARCH PAGE */}
      <Button width="15rem" fontSize="1.7rem">
        Start Searching
      </Button>
    </div>
  );
}

export default MainSection;
