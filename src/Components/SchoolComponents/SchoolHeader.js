import React from "react";
import css from "./Details/SchoolDetails.module.css";
import { Link } from "react-router-dom";
import { Button } from "../UI/styling/Button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import RatingStars from "./RatingStars";

function SchoolHeader({ name, address, darkMode, location }) {
  return (
    <>
      <h1>{name}</h1>
      <h2 className={css.address}>{address}</h2>
      <RatingStars school={location} />
      <Link to="/">
        <Button
          fontSize="1.3rem"
          width="12rem"
          bgColor={darkMode ? "var(--yellow)" : "var(--teal)"}
        >
          Add Review
          <AiOutlinePlusCircle className={css.review__plusicon} />
        </Button>
      </Link>
    </>
  );
}

export default SchoolHeader;
