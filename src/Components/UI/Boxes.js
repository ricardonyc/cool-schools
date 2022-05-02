import classes from "./Boxes.module.css";
import AnonBro from "../assets/bro2.svg";
import Working from "../assets/working.svg";

const Boxes = () => {
  return (
    <div className={classes["boxes__container"]}>
      <div className={classes.box}>
        <img src={Working} alt="man using laptop in a forest" />
        <h1>Leave Reviews</h1>
      </div>
      <div className={classes.box}>
        <img src={AnonBro} alt="Anonymous looking eyes" />
        <h1>Remain anonymous</h1>
      </div>
      {/* <div className={classes.box}></div> */}
    </div>
  );
};

export default Boxes;
