import React, { useContext } from "react";
import css from "./SchoolDetails.module.css";
import { Rating } from "@mui/material";
import GradIcon from "../../assets/grad-icon2.svg";
import Ex from "../../assets/redex.svg";
import Check from "../../assets/greencheck.svg";
import { ThemeContext } from "../../../context/DarkModeContext";

const Reviews = ({ reviews }) => {
  const { darkMode } = useContext(ThemeContext);

  const reviewBg = {
    backgroundColor: darkMode
      ? "var(--reviewbox-navy)"
      : "var(--reviewbox-white)",
    borderRadius: "var(--border-radius)",
  };

  return (
    <>
      {reviews.map((obj, key) => (
        <div key={key} style={reviewBg} className={css.review__container}>
          <div className={css.tags}>
            {obj.tags.map((tag, key) => (
              <p key={key}>{tag}</p>
            ))}
          </div>
          <Rating readOnly className={css.stars} value={obj.ratingOutOf5} />
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
    </>
  );
};

export default Reviews;
