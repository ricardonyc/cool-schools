import css from "./Boxes.module.css";
import AnonBro from "../assets/bro2.svg";
import Working from "../assets/working.svg";
import { ThemeContext } from "../../darkmode-context";
import { useContext } from "react";
import LD from "./Modes.module.css";

const Boxes = () => {
  const { darkMode } = useContext(ThemeContext);

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
          <img src={Working} alt="man using laptop in a forest" />
          <h1>Leave Reviews</h1>
        </div>
        <div className={css.box}>
          <img src={AnonBro} alt="Anonymous looking eyes" />
          <h1>Remain anonymous</h1>
        </div>
        {/* <div className={css.box}></div> */}
      </div>
    </div>
  );
};

export default Boxes;
