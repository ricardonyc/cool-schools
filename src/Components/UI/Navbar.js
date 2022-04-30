import React from "react";
import classes from "./Navbar.module.css";
import CoolSchoolsSVG from "../assets/CoolSchools.svg";

function Navbar(props) {
  return (
    <nav className={classes.navbar}>
      <div className={classes.nav__container}>
        <img className={classes.logo} src={CoolSchoolsSVG} alt="" />
        {/* <h1 className={classes.logo}>CoolSchools</h1> */}
        <ul className={classes.nav__menu}>
          <li>Home</li>
          <li>Contact</li>
          <li>
            <a href="#">Sign Up</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
