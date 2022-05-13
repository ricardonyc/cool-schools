import React, { useContext, useState } from "react";
import css from "./SchoolDetails.module.css";
import { useLocation } from "react-router-dom";
import RatingStars from "./RatingStars";
import { Rating } from "@mui/material";
import { ThemeContext } from "../../context/DarkModeContext";
import vars from "../UI/styling/variables.css";
import { IoMdArrowDropdown } from "react-icons/io";
import GradIcon from "../assets/grad-icon2.svg";
import Ex from "../assets/redex.svg";
import Check from "../assets/greencheck.svg";
import { Button } from "../UI/styling/Button";

function SchoolDetails(props) {
  const { darkMode } = useContext(ThemeContext);
  const [filtersOpen, setFiltersOpen] = useState(false);

  console.log("filters open: ", filtersOpen);

  const location = useLocation();
  const details = location.state.school;
  const { name, address, reviews } = details;
  console.log(reviews);

  const reviewBg = {
    backgroundColor: darkMode
      ? "var(--reviewbox-navy)"
      : "var(--reviewbox-white)",
    borderRadius: "var(--border-radius)",
  };

  return (
    <div className={css.details__container}>
      <div className={css.details__header}>
        <h1>{name}</h1>
        <h2 className={css.address}>{address}</h2>
        <RatingStars school={location.state.school} />
        <Button
          fontSize="1.3rem"
          width="9rem"
          bgColor={darkMode ? "var(--yellow)" : "var(--teal)"}
        >
          Add Review
        </Button>
        <div className={css.main__content}>
          <div className={`${css.filter__container} `}>
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

          <div className={css.reviews__section}>
            {reviews.map((obj, key) => (
              <div key={key} style={reviewBg} className={css.review__container}>
                <div className={css.tags}>
                  {obj.tags.map((tag, key) => (
                    <p key={key}>{tag}</p>
                  ))}
                </div>
                <Rating
                  readOnly
                  className={css.stars}
                  value={obj.ratingOutOf5}
                />
                <p className={css.review}>{obj.review}</p>
                <div className={css.recommended}>
                  {obj.wouldRecommend ? (
                    <>
                      <img src={Check} alt="green check" />
                      <p>Recommended</p>
                    </>
                  ) : (
                    <>
                      <img src={Ex} alt="red x" />
                      <p>Not Recommended</p>
                    </>
                  )}
                </div>
                <div className={css.classof}>
                  <h3>Class of {obj.classOf}</h3>
                  <img src={GradIcon} alt="graduation cap icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolDetails;
