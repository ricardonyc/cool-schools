import React, { useState, useReducer, useContext } from "react";
import { useLocation } from "react-router-dom";
import css from "./AddReview.module.css";
import { db } from "../../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useUserAuth } from "../../../context/UserAuthContext";
import { ModalContext } from "../../../context/ModalContext";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import { ThemeContext } from "../../../context/DarkModeContext";

const reducer = (reducerState, action) => {
  // IF STATE HAS THE TAG, RETURN ORIGINAL STATE
  if (reducerState.checkedIds.includes(action.tag)) {
    return {
      ...reducerState,
      checkedIds: reducerState.checkedIds.filter((tag) => tag !== action.tag),
    };
  }

  if (reducerState.checkedIds.length >= 3) {
    return reducerState;
  }

  return {
    ...reducerState,
    checkedIds: [...reducerState.checkedIds, action.tag],
  };
};

function AddReview(props) {
  const { darkMode } = useContext(ThemeContext);
  const initialState = { checkedIds: [] };
  const [reducerState, dispatch] = useReducer(reducer, initialState);
  const { checkedIds: selectedTags } = reducerState;
  const location = useLocation();
  const { id, name, address, reviews } = location.state.location;
  const [starRating, setStarRating] = useState(null);
  const [starRatingError, setStarRatingError] = useState(false);
  const [recommended, setRecommended] = useState();
  const [classOf, setClassOf] = useState(null);
  const [classofError, setClassofError] = useState(false);
  const [checkboxSelected, setCheckboxSelected] = useState(null);
  const { openModal, setLoginModal, setReviewPosted } =
    useContext(ModalContext);
  const [graduationStatus, setGraduationStatus] = useState(null);
  const [userReview, setUserReview] = useState("");
  const navigate = useNavigate();
  const { user } = useUserAuth();

  const addReview = async (e) => {
    e.preventDefault();

    if (!user) {
      setLoginModal(true);
      openModal();
      return;
    }

    if (
      ((graduationStatus === "Yes" || graduationStatus === "Not Yet") &&
        classOf === null) ||
      classOf === "Select Year"
    ) {
      setClassofError(true);
      return;
    }
    setClassofError(false);

    if (graduationStatus === "No" || graduationStatus === "Transferred") {
      setClassOf(null);
    }

    if (graduationStatus === "Select Year") {
      setClassofError(true);
      return;
    }
    setClassofError(false);

    if (starRating === null) {
      setStarRatingError(true);
      return;
    }
    setStarRatingError(false);

    if (reducerState.checkedIds.length === 0) {
      setCheckboxSelected(true);
      return;
    }
    setCheckboxSelected(false);

    const userDoc = doc(db, "universities", id);
    const newReview = {
      reviews: [
        ...reviews,
        {
          userId: user,
          review: userReview,
          tags: selectedTags,
          wouldRecommend: recommended,
          ratingOutOf5: starRating,
          classOf: classOf,
          graduationStatus: graduationStatus,
          datePosted: getDate(),
        },
      ],
    };

    await updateDoc(userDoc, newReview);
    setReviewPosted(true);
    setTimeout(() => {
      setReviewPosted(false);
    }, 5000);
    navigate("/");
  };

  const getDate = () => {
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const year = new Date().getFullYear();
    return `${month}/${day}/${year.toString().slice(2)}`;
  };

  // prettier-ignore
  const reviewTags = ["Good Wifi", "Laggy Wifi", "Great Professors", "Staff Needs Improvement", "Expensive Location", "Social Life", "Fun Clubs", "No Social Life", "Dirty Bathrooms", "Clean Bathrooms", "Diverse", "No Diversity", "Party School", "Many Majors", "Beautiful Library", "Renovations Needed", 'Library Needs Work', 'Nice Campus', 'Numerous Sports', "Mid Food", "Feels Safe", "Helpful Resources"
  ];

  const wouldRecommend = (e) => {
    if (e.target.value === "yes") {
      setRecommended(true);
      return;
    }
    setRecommended(false);
  };

  const maxYear = new Date().getFullYear() + 4;
  let yearsOptions = ["Not Sure"];

  for (let i = 2010; i <= maxYear; i++) {
    yearsOptions.push(i);
  }

  const bgStyles = {
    backgroundColor: darkMode
      ? "var(--reviewbox-navy)"
      : "var(--reviewbox-white)",
  };

  return (
    <div className={css.addreview__container}>
      <div className={css.bg__img}>
        <h1>{name}</h1>
        <h3>{address}</h3>
      </div>

      <form onSubmit={addReview}>
        <h2>Leave a Review</h2>
        <div className={css.topinputs__container}>
          <div
            onChange={(e) => setGraduationStatus(e.target.value)}
            style={bgStyles}
            className={css.input__container}
          >
            <h3 className={css.input__titles}>Did you graduate?</h3>
            <label className={css.label__text} htmlFor="yes graduated">
              <input
                required
                value="Yes"
                name="graduation status"
                type="radio"
                id="yes graduated"
              />
              Yes
            </label>
            <label className={css.label__text} htmlFor="no graduated">
              <input
                required
                value="No"
                name="graduation status"
                type="radio"
                id="no graduated"
              />
              No
            </label>
            <label className={css.label__text} htmlFor="Not yet graduated">
              <input
                required
                value="Not Yet"
                name="graduation status"
                type="radio"
                id="Not yet graduated"
              />
              Not Yet
            </label>
            <label className={css.label__text} htmlFor="transferred">
              <input
                required
                value="Transferred"
                name="graduation status"
                type="radio"
                id="transferred"
              />
              Transferred
            </label>
          </div>
          {graduationStatus !== "No" && graduationStatus !== "Transferred" && (
            <div style={bgStyles} className={css.input__container}>
              <label className={css.input__titles} htmlFor="classof">
                Class Of:
              </label>
              <select
                className={css.select__menu}
                onChange={(e) => setClassOf(e.target.value)}
                required
                name="classof"
                id="classof"
              >
                <option value={"Select Year"}>Select Year</option>
                {yearsOptions.reverse().map((year, key) => {
                  return (
                    <option key={key} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
              {(graduationStatus === "Yes" || graduationStatus === "Not Yet") &&
                classofError && (
                  <p className={css.classof__error}>
                    Please Select Valid Option
                  </p>
                )}
            </div>
          )}
          <div
            style={bgStyles}
            onChange={wouldRecommend}
            className={css.input__container}
          >
            <h3 className={css.input__titles}>
              Would you recommend this school?
            </h3>
            <label className={css.label__text} htmlFor="yes">
              <input
                value="yes"
                required
                name="recommended"
                id="yes"
                type="radio"
              />
              Yes
            </label>
            <label className={css.label__text} htmlFor="no">
              <input
                value="no"
                required
                name="recommended"
                id="no"
                type="radio"
              />
              No
            </label>
          </div>

          <div style={bgStyles} className={css.input__container}>
            <h3 className={css.input__titles}>Rating:</h3>
            {starRatingError && (
              <p className={css.starrating__error}>Must be 1 or more</p>
            )}
            <Rating
              style={{ fontSize: "3rem" }}
              name="simple-controlled"
              value={starRating}
              onChange={(event, newValue) => setStarRating(newValue)}
            />
          </div>
        </div>

        <div className={css.checkboxes}>
          <h3 className={css.input__titles}>Select up to 3:</h3>
          {checkboxSelected && (
            <p className={css.checkbox__error}>Please select at least ONE</p>
          )}
          {reviewTags.map((tag, key) => {
            return (
              <label
                style={bgStyles}
                key={key}
                className={css.checkbox__container}
                htmlFor={tag}
              >
                <input
                  onChange={() => dispatch({ tag })}
                  type="checkbox"
                  className={`${css.checkbox}`}
                  id={tag}
                  value={tag}
                  checked={reducerState.checkedIds.includes(tag)}
                />
                {tag}
              </label>
            );
          })}
        </div>

        <div className={css.textarea__container}>
          <h3>Review</h3>
          <textarea
            style={bgStyles}
            onChange={(e) => setUserReview(e.target.value)}
            required
            minLength={150}
            maxLength={400}
            name=""
            id=""
            placeholder="Write a review..."
          />
          <p className={css.word__count}>Characters: {userReview.length}</p>
          <button className={css.submit__btn}>Submit Review</button>
        </div>
      </form>
    </div>
  );
}

export default AddReview;
