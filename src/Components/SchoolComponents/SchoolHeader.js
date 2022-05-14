import React from "react";
import css from "./Details/SchoolDetails.module.css";
import { NavLink, Link } from "react-router-dom";
import { Button } from "../UI/styling/Button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import RatingStars from "./RatingStars";

function SchoolHeader({ name, address, darkMode, location }) {
  console.log("location: ", location);

  return (
    <>
      <h1>{name}</h1>
      <h2 className={css.address}>{address}</h2>
      <RatingStars school={location} />
      <NavLink state={{ location }} to={`/${location.name}/addreview`}>
        <Button
          fontSize="1.3rem" 
          width="12rem"
          bgColor={darkMode ? "var(--yellow)" : "var(--teal)"}
        >
          Add Review
          <AiOutlinePlusCircle className={css.review__plusicon} />
        </Button>
      </NavLink>
      <Link to="/">
        <h2>Back</h2>
      </Link>
    </>
  );
}

export default SchoolHeader;
