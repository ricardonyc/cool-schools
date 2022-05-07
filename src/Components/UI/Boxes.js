import { useState } from "react";
import css from "./styling/Boxes.module.css";
import AnonBro from "../assets/bro2.svg";
import { ThemeContext } from "../../context/DarkModeContext";
import { useContext } from "react";
import LD from "./styling/Modes.module.css";
import Typewriter from "../assets/Typewriter.svg";
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
          <img src={Typewriter} alt="man using laptop in a forest" />
          <h1>Leave Reviews</h1>
        </div>
        <div className={css.box}>
          <img src={AnonBro} alt="Anonymous looking eyes" />
          <h1>Remain anonymous</h1>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
