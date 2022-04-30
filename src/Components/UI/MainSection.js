import React from "react";
import classes from "./MainSection.module.css";
import classroom from "../assets/classroom.jpg";

function MainSection(props) {
  return (
    <div className={classes["main__section--container"]}>
      {/* <img src={classroom} alt="" /> */}
      <h1>
        Find and Review Your Favorite <br /> (and Not-so-Favorite) Universities
      </h1>
    </div>
  );
}

export default MainSection;
