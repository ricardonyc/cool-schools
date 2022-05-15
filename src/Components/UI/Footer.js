import React, { useContext } from "react";
import css from "./styling/Footer.module.css";
import { ThemeContext } from "../../context/DarkModeContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  const logo = {
    color: darkMode ? "var(--darkmode-navy)" : "var(--teal)",
  };

  const footerBg = {
    backgroundColor: darkMode ? "var(--section-yellow)" : "var(--section-teal)",
  };

  return (
    <footer>
      <div style={footerBg} className={css.footer__container}>
        <h1 style={logo}>CoolSchools</h1>
        <div className={css["footer__container--menu"]}>
          <div className={css.menu__box}>
            <Link to="/">Home</Link>
            {/* <p>Search</p> */}
          </div>
          <div className={css.menu__box}>
            <Link to="/addschool">Add School</Link>
            {/* <p>Login</p> */}
            {/* <p>Sign Up</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
