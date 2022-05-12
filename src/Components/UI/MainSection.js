import React, { useContext, useRef } from "react";
import css from "./styling/MainSection.module.css";
import { ThemeContext } from "../../context/DarkModeContext";
import { Button } from "./styling/Button";
import BoyMagnifier from "../assets/boy-magnifier.png";
import SearchIcon from "../assets/search-icon.png";
import vars from "./styling/variables.css";
import { SchoolContext } from "../../context/SchoolContext";
import { useNavigate } from "react-router-dom";

function MainSection(props) {
  const { darkMode } = useContext(ThemeContext);
  const { setUserSearch, userSearch, schoolResults } =
    useContext(SchoolContext);
  const searchRef = useRef();
  const navigate = useNavigate();

  // console.log("searchRef: ", searchRef);
  console.log("school results: ", schoolResults);

  const textColor = {
    color: darkMode ? "var(--yellow)" : "var(--teal)",
  };

  const submitInput = (e) => {
    // set state here
    e.preventDefault();
    setUserSearch(searchRef.current.value);
    console.log("the search ref is: ", searchRef.current.value);
    navigate("/schools");
  };

  console.log("user search: ", userSearch);

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
            <div className={css.results}>
              {/* {schoolResults.map((school, key) => {
                return <div>{school.name}</div>;
              })} */}
              <p>Baruch College</p>
              <p>LaGuardia Community College</p>
              <p>Hunter College</p>
              <p>City Tech</p>
              <p>John Jay College of Criminal Justice</p>
              <p>State University Of New York Oswego</p>
              <p>State University Of New York Oswego</p>
              <p>State University Of New York Oswego</p>
              <p>State University Of New York Oswego</p>
              <p>State University Of New York Oswego</p>
              <p>State University Of New York Oswego</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
