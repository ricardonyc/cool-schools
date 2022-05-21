import React, { useContext } from "react";
import css from "./Details/SchoolDetails.module.css";
import { NavLink, Link } from "react-router-dom";
import { Button } from "../UI/styling/Button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import RatingStars from "./RatingStars";
import { useUserAuth } from "../../context/UserAuthContext";
import { ModalContext } from "../../context/ModalContext";

function SchoolHeader({ name, address, darkMode, location }) {
  const { user } = useUserAuth();
  const { openModal } = useContext(ModalContext);

  console.log("school header re-rendered");

  return (
    <>
      <h1 className={css.school__name}>{name}</h1>
      <h2 className={css.address}>{address}</h2>
      <RatingStars school={location} />
      {!user && (
        <Button
          onClick={() => openModal()}
          fontSize="1.3rem"
          width="21rem"
          bgColor={darkMode ? "var(--yellow)" : "var(--teal)"}
        >
          Login or Sign Up to Add Review
        </Button>
      )}
      {user && (
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
      )}
      <Link
        style={{
          textDecoration: "none",
          color: "var(--darkmode-navy)",
        }}
        to="/"
      >
        <h2
          className={css.back__btn}
          style={{
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

export default React.memo(SchoolHeader);
