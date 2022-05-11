import React, { useContext } from "react";
import css from "./styling/Footer.module.css";
import { ThemeContext } from "../../context/DarkModeContext";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  const logo = {
    color: darkMode ? "var(--darkmode-navy)" : "var(--teal)",
  };

  const footerBg = {
    backgroundColor: darkMode ? "var(--yellow)" : "var(--section-teal)",
  };

  return (
    <div style={footerBg} className={css.footer__container}>
      <h1 style={logo}>CoolSchools</h1>
      <div className={css["footer__container--menu"]}>
        <div className={css.menu__box}>
          <p>Home</p>
          <p>Search</p>
        </div>
        <div className={css.menu__box}>
          <p>Login</p>
          <p>Sign Up</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
