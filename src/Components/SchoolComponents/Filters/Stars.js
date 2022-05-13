import css from "../Details/SchoolDetails.module.css";

const Stars = () => {
  return (
    <>
      <h3>Stars</h3>
      <div className={css.checkbox}>
        <input type="radio" name="rating" id="all" value="0" defaultChecked />
        <label htmlFor="all">All</label>
      </div>
      <div className={css.checkbox}>
        <input type="radio" name="rating" id="fivestar" value="5" />
        <label htmlFor="fivestar">5 star</label>
      </div>
      <div className={css.checkbox}>
        <input type="radio" name="rating" id="fourstar" value="4" />
        <label htmlFor="fourstar">4 star</label>
      </div>
      <div className={css.checkbox}>
        <input type="radio" name="rating" id="threestar" value="3" />
        <label htmlFor="threestar">3 star</label>
      </div>
      <div className={css.checkbox}>
        <input type="radio" name="rating" id="twostar" value="2" />
        <label htmlFor="twostar">2 star</label>
      </div>
      <div className={css.checkbox}>
        <input type="radio" name="rating" id="onestar" value="1" />
        <label htmlFor="onestar">1 star</label>
      </div>
    </>
  );
};

export default Stars;
 