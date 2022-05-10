import React, { useContext } from "react";
import css from "./styling/MainSection.module.css";
import { ThemeContext } from "../../context/DarkModeContext";
import { Button } from "./styling/Button";
import BoyMagnifier from "../assets/boy-magnifier.png";
import SearchIcon from "../assets/search-icon.png";
import vars from "./styling/variables.css";

function MainSection(props) {
  const { darkMode } = useContext(ThemeContext);

  // return (
  //   <div
  //     className={
  //       darkMode
  //         ? `${css["main__section--container"]} ${css.dark}`
  //         : `${css["main__section--container"]} ${css.light}`
  //     }
  //   >
  //     <h1 className={css["main__section--h1"]}>
  //       Search and Review Your Favorite <br /> (and Not-so-Favorite) Universities
  //     </h1>
  //     {/* TAKES USER TO SEARCH PAGE */}
  //     <Button width="15rem" fontSize="1.7rem">
  //       Start Searching
  //     </Button>
  //   </div>
  // );

  const textColor = {
    color: darkMode ? "var(--yellow)" : "var(--teal)",
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
        <img src={BoyMagnifier} alt="" />
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
          <div className={css.input__container}>
            <input
              placeholder="Search a school..."
              type="text"
              className={css.input}
            />
            <img src={SearchIcon} alt="magnifying glass icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
