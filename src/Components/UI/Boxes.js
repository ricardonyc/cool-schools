import { useState } from "react";
import css from "./styling/Boxes.module.css";
import Anonymous from "../assets/Anonymous.png";
import GuySitting from "../assets/guy-sitting.png";
import KidCape from "../assets/kid-cape.png";
import { ThemeContext } from "../../context/DarkModeContext";
import { useContext } from "react";
import LD from "./styling/Modes.module.css";
import { Button } from "./styling/Button";

const Boxes = () => {
  const { darkMode } = useContext(ThemeContext);
  const [waitTime, setWaitTime] = useState(false);

  // ! CREATE SKELETON ???
  // setTimeout(() => {
  //   setWaitTime(true);
  // }, 2000);

  return (
    <div className={css["main__boxes--container"]}>
      <div
        className={
          darkMode
            ? ` ${css["boxes__container"]} ${LD.dark__bg}`
            : ` ${css["boxes__container"]} ${LD.light__bg}`
        }
      >
        <div className={css.box}>
          <img src={GuySitting} alt="man using laptop in a forest" />
          <h2>Leave Reviews</h2>
        </div>
        <div className={css.box}>
          <img src={Anonymous} alt="Girl and dog wearing shades" />
          <h2>Remain anonymous</h2>
        </div>
        <div className={css.box}>
          <img src={KidCape} alt="Anonymous looking eyes" />
          <h2>Search Reviews</h2>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
