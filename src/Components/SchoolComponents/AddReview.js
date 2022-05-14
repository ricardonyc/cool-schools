import React, { useState, useReducer, useRef, useContext } from "react";
import { useLocation } from "react-router-dom";
import css from "./AddReview.module.css";
import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useUserAuth } from "../../context/UserAuthContext";
import { ModalContext } from "../../context/ModalContext";
import { useNavigate } from "react-router-dom";

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
  const initialState = { checkedIds: [] };
  const [reducerState, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();
  console.log("location: ", location);
  const { id, name, address, reviews } = location.state.location;
  console.log("location.state.location: ", location.state.location);
  console.log("id: ", reviews);
  console.log(name, address);
  const [rating, setRating] = useState();
  const [recommended, setRecommended] = useState();
  const [classOf, setClassOf] = useState();
  const [checkboxSelected, setCheckboxSelected] = useState(null);
  const { openModal, closeModal, setLoginModal } = useContext(ModalContext);
  const navigate = useNavigate();

  const { user } = useUserAuth();

  console.log("ADD REVIEW COMPONENT CURRENT USER: ", user);

  const reviewRef = useRef();

  // ATTACH THE SIGNED IN USER'S ID TO THE REVIEW
  const addReview = async (
    e,
    currentUserId,
    schoolId,
    review,
    tags,
    recommended,
    rating,
    classOf
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
        },
      ],
    };

    await updateDoc(userDoc, newReview);
    navigate("/");
  };

  const reviewTags = [
    "Good Wifi",
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

  //   const submitHandler = (e) => {
  //     console.log(reviewRef.current.value);
  //     e.preventDefault();
  //     if (state.checkedIds.length === 0) {
  //       setCheckboxSelected(true);
  //       return;
  //     }
  //     setCheckboxSelected(false);
  //     console.log("FORM SUBMITTED SUCCESSFULLY!!!!");
  //   };

  const maxYear = new Date().getFullYear() + 4;
  let yearsOptions = ["Didn't Graduate", "Transferred", "Not Sure"];

  for (let i = 2010; i <= maxYear; i++) {
    yearsOptions.push(i);
  }

  const { checkedIds: tags } = reducerState;

  //   console.log("recommended: ", recommended);
  //   console.log("rating: ", rating);
  //   console.log("class of: ", classOf);
  //   console.log("tags state: ", tags);

  return (
    <div className={css.addreview__container}>
      <h1>{name}</h1>
      <h2>{address}</h2>

      <form
        onSubmit={(e) =>
          addReview(
            e,
            user,
            id,
            reviewRef.current.value,
            tags,
            recommended,
            rating,
            classOf
          )
        }
      >
        <div className={css.input__container}>
          <label htmlFor="classof">Class Of:</label>
          <select
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

        <div onChange={wouldRecommend} className={css.input__container}>
          <h4>Would you recommend this school?</h4>
          <label htmlFor="yes">Yes</label>
          <input
            value="yes"
            required
            name="recommended"
            id="yes"
            type="radio"
          />
          <label htmlFor="no">No</label>
          <input value="no" required name="recommended" id="no" type="radio" />
        </div>

        <div
          onChange={(e) => setRating(Number(e.target.value))}
          className={css.input__container}
        >
          <label htmlFor="rating">Rating out of 5:</label>
          <input required type="number" min={1} max={5} />
        </div>

        <div className={css.input__container}>
          <h3>Select up to 3:</h3>
          {checkboxSelected && (
            <p style={{ backgroundColor: "pink" }}>
              Please select at least ONE
            </p>
          )}
          {reviewTags.map((tag, key) => {
            return (
              <div key={key} className={css.tags__container}>
                <input
                  onChange={() => dispatch({ tag })}
                  type="checkbox"
                  id={tag}
                  value={tag}
                  checked={reducerState.checkedIds.includes(tag)}
                />
                <label htmlFor={tag}>{tag}</label>
              </div>
            );
          })}
        </div>

        <h3>Review</h3>
        <textarea
          ref={reviewRef}
          required
          minLength={150}
          maxLength={400}
          name=""
          id=""
          placeholder="Write a review..."
        ></textarea>

        {/*     OPEN THE LOG IN MODAL IF THE USER IS NOT SIGNED IN / DEFINED */}
        <button>POST REVIEW</button>
      </form>
    </div>
  );
}

export default AddReview;
