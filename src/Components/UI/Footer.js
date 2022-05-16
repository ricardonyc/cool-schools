import React, { useContext } from "react";
import css from "./styling/Footer.module.css";
import { ThemeContext } from "../../context/DarkModeContext";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

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
        <h1 style={logo}>CoolUni</h1>
        <div className={css["footer__container--menu"]}>
          <div className={css.menu__box}>
            <Link to="/">Home</Link>
            <Link to="/addschool">Add School</Link>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/ricardo67/"
              target="_blank"
            >
              <FaLinkedin style={{ fontSize: "3rem" }} />
            </a>
          </div>
          {/* <div className={css.menu__box}>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
