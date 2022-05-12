import React, { useContext, useRef, useState } from "react";
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
  const [filteredData, setFilteredData] = useState([]);

  const textColor = {
    color: darkMode ? "var(--yellow)" : "var(--teal)",
  };

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFiltered = schoolResults.filter((school) => {
      return school.name
        .toLowerCase()
        .trim()
        .includes(searchWord.toLowerCase().trim());
    });

    setFilteredData(newFiltered);
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
          <form
            onSubmit={(e) => e.preventDefault()}
            className={css.input__container}
          >
            <input
              placeholder="Search a school..."
              type="text"
              className={css.input}
              ref={searchRef}
              onChange={handleFilter}
            />
            <img src={SearchIcon} alt="magnifying glass icon" />
            {searchRef?.current?.value.length > 0 && filteredData.length > 0 && (
              <div className={css.results}>
                {filteredData.slice(0, 10).map((school, key) => {
                  return <div>{school.name}</div>;
                })}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
