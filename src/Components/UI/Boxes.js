import { useState } from "react";
import css from "./styling/Boxes.module.css";
import Anonymous from "../assets/Anonymous.png";
import GuySitting from "../assets/guy-sitting.png";
import KidCape from "../assets/kid-cape.png";
import { ThemeContext } from "../../context/DarkModeContext";
import { useContext } from "react";
import LD from "./styling/Modes.module.css";
import { Button } from "./styling/Button";
import vars from "../UI/styling/variables.css";

const Boxes = () => {
  const { darkMode } = useContext(ThemeContext);
  const [waitTime, setWaitTime] = useState(false);

  // ! CREATE SKELETON ???
  // setTimeout(() => {
  //   setWaitTime(true);
  // }, 2000);

  const container = {
    backgroundColor: darkMode ? "var(--section-yellow)" : "var(--section-teal)",
    color: darkMode ? "var(--darkmode-navy)" : "var(--teal)",
  };

  return (
    <div style={container} className={css["main__boxes--container"]}>
      <div className={css["boxes__container"]}>
        <div className={css.box}>
          <img
            loading="lazy"
            src={GuySitting}
            alt="man using laptop in a forest"
          />
          <h2>Leave Reviews</h2>
        </div>
        <div className={css.box}>
          <img
            loading="lazy"
            src={Anonymous}
            alt="Girl and dog wearing shades"
          />
          <h2>Remain anonymous</h2>
        </div>
        <div className={css.box}>
          <img loading="lazy" src={KidCape} alt="Anonymous looking eyes" />
          <h2>Search Reviews</h2>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
