import React from "react";
import classes from "./Navbar.module.css";
import CoolSchoolsSVG from "../assets/CoolSchools.svg";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className={classes.navbar}>
      <div className={classes.nav__container}>
        <img className={classes.logo} src={CoolSchoolsSVG} alt="" />
        <ul className={classes.nav__menu}>
          <li>Home</li>
          <li>Contact</li>
          <li>
            <a href="#">Sign Up</a>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
