import React from "react";
import css from "../Details/SchoolDetails.module.css";

function Recommended(props) {
  return (
    <>
      <h3>Recommended</h3>
      <div className={css.checkbox}>
        <input
          type="radio"
          name="recommended"
          id="none"
          value="-1"
          defaultChecked
        />
        <label htmlFor="none">All</label>
      </div>
      <div className={css.checkbox}>
        <input type="radio" name="recommended" id="yes" value="1" />
        <label htmlFor="yes">Yes</label>
      </div>
      <div className={css.checkbox}>
        <input type="radio" name="recommended" id="no" value="0" />
        <label htmlFor="no">No</label>
      </div>
    </>
  );
}

export default Recommended;
