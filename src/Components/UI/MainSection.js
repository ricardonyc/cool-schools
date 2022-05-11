import React, { useContext, useState, useRef } from "react";
import css from "./styling/MainSection.module.css";
import { ThemeContext } from "../../context/DarkModeContext";
import { Button } from "./styling/Button";
import BoyMagnifier from "../assets/boy-magnifier.png";
import SearchIcon from "../assets/search-icon.png";
import vars from "./styling/variables.css";

function MainSection(props) {
  const { darkMode } = useContext(ThemeContext);
  const searchRef = useRef();

  console.log("searchRef: ", searchRef);

  const textColor = {
    color: darkMode ? "var(--yellow)" : "var(--teal)",
  };

  const submitInput = (e) => {
    e.preventDefault();
    console.log("the search ref is: ", searchRef.current.value);
  };

  return (
    <div
      className={
        darkMode
          ? `${css["main__section--container"]} ${css.dark}`
          : `${css["main__section--container"]} ${css.light}`
      }
    >
      <div className={css.left__box}>
        <img src={BoyMagnifier} alt="boy with magnifying glass" />
        <div className={css["left__box--text"]}>
          <h1 style={textColor} className={css.discover}>
            DISCOVER
          </h1>
          <p>
            Find your favorite (and not-so-favorite) schools. Read and leave
            reviews on your school anonymously.
          </p>
        </div>
      </div>
      <div className={css.right__box}>
        <div className={css["right__box--text"]}>
          <h1 style={textColor}>Start Searching</h1>
          <form onSubmit={submitInput} className={css.input__container}>
            <input
              placeholder="Search a school..."
              type="text"
              className={css.input}
              ref={searchRef}
            />
            <img src={SearchIcon} alt="magnifying glass icon" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
