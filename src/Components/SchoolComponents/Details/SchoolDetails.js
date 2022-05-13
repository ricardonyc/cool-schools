import React, { useContext, useState } from "react";
import css from "./SchoolDetails.module.css";
import { useLocation } from "react-router-dom";
import RatingStars from "../RatingStars";
import { ThemeContext } from "../../../context/DarkModeContext";
import vars from "../../UI/styling/variables.css";
import "../../UI/styling/variables.css";
import { IoMdArrowDropdown } from "react-icons/io";
import Add from "../../assets/add.svg";
import { Button } from "../../UI/styling/Button";
import Reviews from "./Reviews";
import Filter from "../../assets/filter.svg";
import Cat from "../../assets/cat.png";
import Stars from "../Filters/Stars";
import { Link } from "react-router-dom";

function SchoolDetails(props) {
  const { darkMode } = useContext(ThemeContext);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [rating, setRating] = useState(0);
  console.log(rating);

  const location = useLocation();
  const details = location.state.school;
  const { name, address, reviews } = details;

  // THIS IS EMPTY INITIALLY
  let filteredReviews = reviews.filter(
    (review) => rating === review.ratingOutOf5
  );

  if (rating === 0) {
    filteredReviews = reviews;
  }

  const spanStyle = {
    fontFamily: "var(--shrikhand)",
    color: darkMode ? "var(--yellow)" : "var(--teal)",
  };

  console.log("filtered reviews: ", filteredReviews);
  console.log("reviews: ", reviews);

  return (
    <div className={css.details__container}>
      <div className={css.details__header}>
        <h1>{name}</h1>
        <h2 className={css.address}>{address}</h2>
        <RatingStars school={location.state.school} />
        <Button
          fontSize="1.3rem"
          width="12rem"
          bgColor={darkMode ? "var(--yellow)" : "var(--teal)"}
        >
          Add Review
          <img className={css.add__icon} src={Add} alt="" />
        </Button>
        <div className={css.main__content}>
          <div className={`${css.filter__container} `}>
            <h2 onClick={() => setFiltersOpen(!filtersOpen)}>
              <img src={Filter} alt="filter icon" />
              Filters
            </h2>
            <div
              className={`${css.filters} ${
                filtersOpen ? css.open : css.closed
              }`}
            >
              <form
                onChange={(e) => setRating(Number(e.target.value))}
                className={css.starfilter}
              >
                <Stars />
              </form>
            </div>
          </div>

          <div className={css.reviews__section}>
            {filteredReviews.length > 0 && (
              <Reviews reviews={filteredReviews} />
            )}
            {filteredReviews.length === 0 && (
              <div className={css.norating}>
                <img src={Cat} alt="" />
                <p>
                  NO
                  <span style={spanStyle}> {rating} </span>
                  STAR REVIEWS.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolDetails;
