import React from "react";
import css from "./Details/SchoolDetails.module.css";
import { NavLink, Link } from "react-router-dom";
import { Button } from "../UI/styling/Button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import RatingStars from "./RatingStars";

function SchoolHeader({ name, address, darkMode, location }) {
  console.log("location: ", location);

  return (
    <>
      <h1 className={css.school__name}>{name}</h1>
      <h2 className={css.address}>{address}</h2>
      <RatingStars school={location} />
      <NavLink
        style={{ textDecoration: "none" }}
        state={{ location }}
        to={`/${location.name}/addreview`}
      >
        <Button
          fontSize="1.3rem"
          width="12rem"
          bgColor={darkMode ? "var(--yellow)" : "var(--teal)"}
        >
          Add Review
          <AiOutlinePlusCircle className={css.review__plusicon} />
        </Button>
      </NavLink>
      <Link
        style={{
          textDecoration: "none",
          color: "var(--darkmode-navy)",
        }}
        to="/"
      >
        <h2
          style={{
            fontSize: "1.6rem",
            borderRadius: "var(--border-radius)",
            background: "",
            margin: "2rem 1rem 1rem 0",
            padding: ".5rem",
            display: "inline-flex",
            backgroundColor: darkMode ? "var(--yellow)" : "var(--teal)",
          }}
        >
          <IoMdArrowRoundBack />
          Back
        </h2>
      </Link>
    </>
  );
}

export default SchoolHeader;
