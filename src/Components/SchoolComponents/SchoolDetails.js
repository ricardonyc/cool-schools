import React from "react";
import css from "./SchoolDetails.module.css";

import { useLocation } from "react-router-dom";
import RatingStars from "./RatingStars";
import { GiOverlordHelm } from "react-icons/gi";

function SchoolDetails(props) {
  //   const cool = useParams();

  const location = useLocation();
  const details = location.state.school;
  const { name, address, reviews } = details;
  console.log(reviews);
  //   const { state } = location.state;

  return (
    <div className={css.details__container}>
      <div className={css.details__header}>
        <h1>{name}</h1>
        <h3>{address}</h3>
        <RatingStars school={location.state.school} />
        <div className={css.main__content}>
          <div className={css.filter__container}>
            <h4>filter one</h4>
            <h4>filter two</h4>
            <h4>filter three</h4>
            <h4>filter four</h4>
          </div>

          <div className={css.reviews__section}>
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
