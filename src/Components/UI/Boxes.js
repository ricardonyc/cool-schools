import css from "./Boxes.module.css";
import AnonBro from "../assets/bro2.svg";
import Working from "../assets/working.svg";
import { ThemeContext } from "../../darkmode-context";
import { useContext } from "react";

const Boxes = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={css["boxes__container"]}>
      <div
        className={
          darkMode ? `${css.box} ${css.light}` : `${css.box} ${css.dark}`
        }
      >
        <img src={Working} alt="man using laptop in a forest" />
        <h1>Leave Reviews</h1>
      </div>
      <div
        className={
          darkMode ? `${css.box} ${css.light}` : `${css.box} ${css.dark}`
        }
      >
        <img src={AnonBro} alt="Anonymous looking eyes" />
        <h1>Remain anonymous</h1>
      </div>
      {/* <div className={css.box}></div> */}
    </div>
  );
};

export default Boxes;
