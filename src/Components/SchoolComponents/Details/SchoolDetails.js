import React, { useContext, useState } from "react";
import css from "./SchoolDetails.module.css";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../../context/DarkModeContext";
import "../../UI/styling/variables.css";
import Reviews from "./Reviews";
import Filter from "../../assets/filter.svg";
import Cat from "../../assets/cat.png";
import SchoolHeader from "../SchoolHeader";
import FilterForms from "../Filters/FilterForms";

function SchoolDetails(props) {
  const { darkMode } = useContext(ThemeContext);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [recommended, setRecommended] = useState(null);

  const location = useLocation();
  const details = location.state.school;
  const { name, address, reviews } = details;

  let filteredReviews = reviews.filter(
    (review) => rating === review.ratingOutOf5
  );

  if (rating === 0) {
    filteredReviews = reviews;
  }

  if (recommended === 0 || recommended === 1)
    filteredReviews = filteredReviews.filter(
      (review) => recommended == review.wouldRecommend
    );

  const spanStyle = {
    fontFamily: "var(--shrikhand)",
    color: darkMode ? "var(--yellow)" : "var(--teal)",
  };

  console.log("filtered reviews: ", filteredReviews);
  console.log("reviews: ", reviews);
  console.log("recommended: ", recommended);
  console.log("rating: ", rating);

  return (
    <div className={css.details__container}>
      <div className={css.details__header}>
        <SchoolHeader
          name={name}
          address={address}
          darkMode={darkMode}
          location={location.state.school}
        />
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
              <FilterForms
                setRating={setRating}
                setRecommended={setRecommended}
              />
            </div>
          </div>

          <div className={css.reviews__section}>
            {filteredReviews.length > 0 && (
              <Reviews reviews={filteredReviews} />
            )}
            {filteredReviews.length === 0 && (
              <div className={css.norating}>
                <img src={Cat} alt="yellow cat" />
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
