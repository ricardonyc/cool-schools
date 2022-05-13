import React, { useContext, useState } from "react";
import css from "./SchoolDetails.module.css";
import { useLocation } from "react-router-dom";
import RatingStars from "./RatingStars";
import { ThemeContext } from "../../context/DarkModeContext";
import vars from "../UI/styling/variables.css";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

function SchoolDetails(props) {
  const { darkMode } = useContext(ThemeContext);
  const [filtersOpen, setFiltersOpen] = useState(false);

  console.log("filters open: ", filtersOpen);

  const location = useLocation();
  const details = location.state.school;
  const { name, address, reviews } = details;
  console.log(reviews);

  const reviewSection = {
    backgroundColor: darkMode ? "var(--reviewbox-navy)" : "",
    borderRadius: "var(--border-radius)",
  };

  return (
    <div className={css.details__container}>
      <div className={css.details__header}>
        <h1>{name}</h1>
        <h3>{address}</h3>
        <RatingStars school={location.state.school} />
        <div className={css.main__content}>
          <div style={reviewSection} className={`${css.filter__container} `}>
            <h2 onClick={() => setFiltersOpen(!filtersOpen)}>
              Filters <IoMdArrowDropdown />{" "}
            </h2>
            <div
              className={`${css.filters} ${
                filtersOpen ? css.open : css.closed
              }`}
            >
              <label htmlFor="filter-by">
                <input type="text" />
              </label>
              <h4>filter one</h4>
              <h4>filter two</h4>
              <h4>filter three</h4>
              <h4>filter four</h4>
            </div>
          </div>

          <div style={reviewSection} className={css.reviews__section}>
            {reviews.map((obj) => (
              <div className={css.review__container}>
                <div className={css.tags}>
                  {obj.tags.map((tag) => (
                    <p>{tag}</p>
                  ))}
                </div>
                <h3>Class of {obj.classOf}</h3>
                <p className={css.review}>{obj.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolDetails;
