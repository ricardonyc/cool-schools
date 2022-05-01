import React from "react";
import classes from "./MainSection.module.css";

function MainSection(props) {
  return (
    <div className={classes["main__section--container"]}>
      <h1 className={classes["main__section--h1"]}>
        Find and Review Your Favorite <br /> (and Not-so-Favorite) Universities
      </h1>
    </div>
  );
}

export default MainSection;
