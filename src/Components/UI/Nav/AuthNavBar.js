import React, { useContext } from "react";
import css from "./Navbar.module.css";
import CoolSchoolsSVG from "../../assets/CoolSchools.svg";
import { ThemeContext } from "../../../context/darkmode-context";
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
          <li className={css.logout} onClick={handleLogOut}>
            Log Out
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
