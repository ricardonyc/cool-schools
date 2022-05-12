import React, { useContext, useState } from "react";
import css from "./styling/MainSection.module.css";
import { ThemeContext } from "../../context/DarkModeContext";
import BoyMagnifier from "../assets/boy-magnifier.png";
import SearchIcon from "../assets/search-icon.png";
import { SchoolContext } from "../../context/SchoolContext";
import { Link, NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

function MainSection(props) {
  const { darkMode } = useContext(ThemeContext);
  const { setUserSearch, userSearch, schoolResults } =
    useContext(SchoolContext);
  const [filteredData, setFilteredData] = useState([]);
  const [userInput, setUserInput] = useState("");

  const textColor = {
    color: darkMode ? "var(--yellow)" : "var(--teal)",
  };

  const handleFilter = (e) => {
    setUserInput(e.target.value);
    const newFiltered = schoolResults?.filter((school) => {
      return school.name
        .toLowerCase()
        .trim()
        .includes(userInput.toLowerCase().trim());
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
              value={userInput}
              onChange={handleFilter}
            />
            <img src={SearchIcon} alt="magnifying glass icon" />
            {userInput && (
              <IoMdClose
                onClick={() => setUserInput("")}
                className={css.close}
              />
            )}
            {userInput?.length > 0 && filteredData?.length > 0 && (
              <div className={css.results}>
                {filteredData.slice(0, 10).map((school, key) => {
                  return (
                    <NavLink
                      key={school.id}
                      to={`/schools/${school.name}`}
                      state={{ school }}
                    >
                      {school.name}
                    </NavLink>
                  );
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
