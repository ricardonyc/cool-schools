import React from "react";
import css from "./styling/Boxes.module.css";
import Anonymous from "../assets/Anonymous.png";
import GuySitting from "../assets/guy-sitting.png";
import KidCape from "../assets/kid-cape.png";
import { ThemeContext } from "../../context/DarkModeContext";
import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Parallax from "react-rellax";

const Boxes = () => {
  const { darkMode } = useContext(ThemeContext);

  const container = {
    backgroundColor: darkMode ? "var(--section-yellow)" : "var(--section-teal)",
    color: darkMode ? "var(--darkmode-navy)" : "var(--teal)",
  };

  return (
    <div style={container} className={css["main__boxes--container"]}>
      <div className={css["boxes__container"]}>
        <div className={css.box}>
          <img loading="lazy" src={GuySitting} alt={"man using laptop"} />
          <h2>Leave Reviews</h2>
        </div>
        <div className={css.box}>
          <img
            loading="lazy"
            src={Anonymous}
            alt={"Girl and dog wearing shades"}
          />
          <h2>Remain anonymous</h2>
        </div>
        <div className={css.box}>
          <img
            loading="lazy"
            src={KidCape}
            alt={"kid running wearing a cape"}
          />
          <h2>Search Reviews</h2>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
