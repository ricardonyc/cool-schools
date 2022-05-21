import React, { useContext, useEffect, useState, useCallback } from "react";
import css from "./SchoolDetails.module.css";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../../context/DarkModeContext";
import "../../UI/styling/variables.css";
import Reviews from "./Reviews";
import Filter from "../../assets/filter.svg";
import Cat from "../../assets/cat.png";
import SchoolHeader from "../SchoolHeader";
import FilterForms from "../Filters/FilterForms";
import ReviewSkeleton from "../Skeletons/ReviewSkeleton";

function SchoolDetails() {
  const { darkMode } = useContext(ThemeContext);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [recommended, setRecommended] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const details = location?.state?.school;
  const { name, address, reviews } = details;

  console.log("school details rendered");

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false);
    }, 900);
  }, []);

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

  return (
    <div className={css.details__container}>
      <div className={css.details__header}>
        <div className={css.header}>
          <SchoolHeader
            name={name}
            address={address}
            darkMode={darkMode}
            location={location.state.school}
          />
        </div>
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
            {!loading && filteredReviews.length > 0 && (
              <Reviews reviews={filteredReviews} />
            )}
            {!loading && filteredReviews.length === 0 && (
              <div className={css.norating}>
                <img className={css.cat} src={Cat} alt="yellow cat" />
                <p>
                  NO
                  {rating > 0 && <span style={spanStyle}> {rating} STAR </span>}
                  REVIEWS.
                </p>
              </div>
            )}
            {loading &&
              filteredReviews.slice(0, 4).map((_, key) => {
                return <ReviewSkeleton key={key} darkMode={darkMode} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolDetails;
