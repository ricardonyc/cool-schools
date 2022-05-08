import React, { useContext } from "react";
import css from "./Navbar.module.css";
import { ThemeContext } from "../../../context/DarkModeContext";
import LD from "./../Modes.module.css";
import { useUserAuth } from "../../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { logOut } = useUserAuth();
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

 
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className={css.navbar}>
      <div
        className={
          darkMode
            ? `${css.nav__container} ${LD.dark__bg}`
            : `${css.nav__container} ${LD.light__bg}`
        }
      >
        <h1 className={css.logo}>CoolSchools</h1>
        <ul
          className={
            darkMode
              ? `${css["nav__menu"]} ${LD.dark__bg}`
              : `${css["nav__menu"]} ${LD.light}`
          }
        >
          <li>Home</li>
          <li className={css.search__btn}>Search</li>
          <li className={css.logout__btn} onClick={handleLogOut}>
            Log Out
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
