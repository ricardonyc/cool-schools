import React, { useState, useReducer, useRef, useContext } from "react";
import { useLocation } from "react-router-dom";
import css from "./AddReview.module.css";
import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useUserAuth } from "../../context/UserAuthContext";
import { ModalContext } from "../../context/ModalContext";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import { ThemeContext } from "../../context/DarkModeContext";

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
  const location = useLocation();
  const { id, name, address, reviews } = location.state.location;
  const [starRating, setStarRating] = useState(1);
  const [recommended, setRecommended] = useState();
  const [classOf, setClassOf] = useState("");
  const [checkboxSelected, setCheckboxSelected] = useState(null);
  const { openModal, setLoginModal } = useContext(ModalContext);
  const [graduationStatus, setGraduationStatus] = useState(null);
  const navigate = useNavigate();
  const { user } = useUserAuth();
  const reviewRef = useRef();

  console.log("ADD REVIEW COMPONENT CURRENT USER: ", user);

  console.log("tags: ", reducerState);

  // ATTACH DATE REVIEW SUBMITTED TO THE REVIEW

  // e,
  // user,
  // id,
  // reviewRef.current.value,
  // tags,
  // recommended,
  // starRating,
  // classOf,
  // graduationStatus

  // ATTACH THE SIGNED IN USER'S ID TO THE REVIEW
  const addReview = async (
    e,
    currentUserId,
    schoolId,
    review,
    tags,
    recommended,
    rating,
    classOf,
    graduationStatus
  ) => {
    e.preventDefault();

    if (!currentUserId) {
      setLoginModal(true);
      openModal();
      console.log("YOU MUST BE LOGGED IN TO POST A REVIEW");
      return;
    }

    if (reducerState.checkedIds.length === 0) {
      setCheckboxSelected(true);
      return;
    }

    setCheckboxSelected(false);
    const userDoc = doc(db, "universities", schoolId);
    const newReview = {
      reviews: [
        ...reviews,
        {
          userId: currentUserId,
          review,
          tags,
          wouldRecommend: recommended,
          ratingOutOf5: rating,
          classOf,
          graduationStatus,
        },
      ],
    };

    await updateDoc(userDoc, newReview);
    navigate("/");
  };

  const reviewTags = [
    "Good Wifi",
    "Laggy Wifi",
    "Great Professors",
    "Staff Needs Improvement",
    "Expensive Location",
    "Social Life",
    "Fun Clubs",
    "No Social Life",
    "Dirty Bathrooms",
    "Clean Bathrooms",
    "Diverse",
    "No Diversity",
    "Party School",
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

  const { checkedIds: tags } = reducerState;

  const bgStyles = {
    backgroundColor: darkMode
      ? "var(--reviewbox-navy)"
      : "var(--reviewbox-white)",
  };

  console.log("user: ", user);
  console.log("school id: ", id);
  console.log("tags: ", tags);
  console.log("recommended: ", recommended);
  console.log("star rating: ", starRating);
  console.log("class of: ", classOf);
  console.log("graduation status: ", graduationStatus);

  return (
    <div className={css.addreview__container}>
      <div className={css.bg__img}>
        <h1>{name}</h1>
        <h3>{address}</h3>
      </div>

      <form
        onSubmit={(e) =>
          addReview(
            e,
            user,
            id,
            reviewRef.current.value,
            tags,
            recommended,
            starRating,
            classOf,
            graduationStatus
          )
        }
      >
        <h2>Leave a Review</h2>
        {/* ------------------------------------------------------------------------- */}
        {/* GRADUATION STATUS */}
        <div className={css.topinputs__container}>
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
                {yearsOptions.reverse().map((year, key) => {
                  return (
                    <option key={key} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
          {/* WOULD RECOMMEND */}
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
            <Rating
              style={{ fontSize: "3rem" }}
              name="simple-controlled"
              value={starRating}
              onChange={(event, newValue) => setStarRating(newValue)}
            />
          </div>

          {/* CONDITIONALLY RENDERS AN ICON */}
          {/* CONDITIONALLY RENDER THE 'CLASS OF' */}
          {/* IF THEY TRANSFERRED, REMOVE THE 'CLASS OF' INPUT */}
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
        </div>
        {/* ------------------------------------------------------------------------- */}

        <div className={css.checkboxes}>
          <h3 className={css.input__titles}>Select up to 3:</h3>
          {!checkboxSelected && (
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
            ref={reviewRef}
            required
            minLength={150}
            maxLength={400}
            name=""
            id=""
            placeholder="Write a review..."
          ></textarea>
          <button className={css.submit__btn}>Submit Review</button>
        </div>

        {/*     OPEN THE LOG IN MODAL IF THE USER IS NOT SIGNED IN / DEFINED */}
      </form>
    </div>
  );
}

export default AddReview;
