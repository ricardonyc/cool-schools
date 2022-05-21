import React, { useContext, useState } from "react";
import css from "./SchoolDetails.module.css";
import { Rating } from "@mui/material";
import GradIcon from "../../assets/grad-icon2.svg";
import Ex from "../../assets/redcancel.svg";
import Check from "../../assets/recommended.svg";
import { ThemeContext } from "../../../context/DarkModeContext";

const Reviews = ({ reviews }) => {
  const { darkMode } = useContext(ThemeContext);
  const [paginationCount, setPaginationCount] = useState(4);

  const reviewBg = {
    backgroundColor: darkMode
      ? "var(--reviewbox-navy)"
      : "var(--reviewbox-white)",
    borderRadius: "var(--border-radius)",
  };

  const showMore = () => {
    setPaginationCount(paginationCount + 4);
  };

  return (
    <>
      {reviews.slice(0, paginationCount).map((obj, key) => (
        <div key={key} style={reviewBg} className={css.review__container}>
          <div className={css.tags}>
            {obj.tags.map((tag, key) => (
              <p key={key}>{tag}</p>
            ))}
          </div>
          <p className={css.date__posted}>{obj.datePosted}</p>
          <Rating readOnly className={css.stars} value={obj.ratingOutOf5} />
          <p className={css.review}>{obj.review}</p>
          <div className={css.wouldRecommend}>
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
            {obj.classOf === "Not Sure" && (
              <>
                <h3>Graduation Year Unknown</h3>
              </>
            )}
            {obj.classOf !== null && obj.classOf !== "Not Sure" && (
              <>
                <h3>Class of {obj.classOf}</h3>
                <img src={GradIcon} alt="graduation cap icon" />
              </>
            )}
            {obj.classOf === null && obj.graduationStatus === "Transferred" && (
              <>
                <h3>{obj.graduationStatus}</h3>
              </>
            )}
          </div>
        </div>
      ))}
      <div className={css.paginationbtn__container}>
        {paginationCount < reviews.length && (
          <button onClick={showMore} className={css.pagination__btn}>
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default Reviews;
