import React, { useContext } from "react";
import css from "./Navbar.module.css";
import CoolSchoolsSVG from "../../assets/CoolSchools.svg";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/darkmode-context";
import LD from "./../Modes.module.css";

function Navbar(props) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <nav className={css.navbar}>
      <div
        className={
          darkMode
            ? `${css.nav__container} ${LD.dark__bg}`
            : `${css.nav__container} ${LD.light__bg}`
        }
      >
        <img className={css.logo} src={CoolSchoolsSVG} alt="" />
        <ul
          className={
            darkMode
              ? `${css["nav__menu"]} ${LD.dark__bg}`
              : `${css["nav__menu"]} ${LD.light}`
          }
        >
          <li>Home</li>
          <li>Search</li>
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
