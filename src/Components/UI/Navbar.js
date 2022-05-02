import React, { useContext } from "react";
import css from "./Navbar.module.css";
import CoolSchoolsSVG from "../assets/CoolSchools.svg";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../darkmode-context";

function Navbar(props) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <nav className={css.navbar}>
      <div
        className={
          darkMode
            ? `${css.nav__container} ${css.background__dark}`
            : `${css.nav__container} ${css.background__light}`
        }
      >
        <img className={css.logo} src={CoolSchoolsSVG} alt="" />
        <ul
          className={
            darkMode
              ? `${css["nav__menu"]} ${css["nav__menu--dark"]}`
              : `${css["nav__menu"]} ${css["nav__menu--light"]}`
          }
        >
          <li>Home</li>
          <li>Search</li>
          <li>Contact</li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link id={css.login} to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
