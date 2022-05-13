import React from "react";
import Stars from "./Stars";
import Recommended from "./Recommended";
import css from "../Details/SchoolDetails.module.css";

function FilterForms({ setRating, setRecommended }) {
  return (
    <>
      <form
        onChange={(e) => setRating(Number(e.target.value))}
        className={css.starfilter}
      >
        <Stars />
      </form>

      <form
        className={css.recommended}
        onChange={(e) => setRecommended(Number(e.target.value))}
      >
        <Recommended />
      </form>
    </>
  );
}

export default FilterForms;
