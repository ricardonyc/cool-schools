import React, { useState } from "react";
import css from "./AddSchool.module.css";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

function AddSchool(props) {
  const { user } = useUserAuth();
  console.log("user in add school: ", user);
  const schoolCollectionRef = collection(db, "universities");
  console.log(schoolCollectionRef);
  const [schoolName, setSchoolName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");

  const navigate = useNavigate();

  const schoolAddress = `${street}, ${city}, ${state}, ${zipcode}`;
  console.log(schoolAddress);

  const capitalize = (word) => {
    return word
      .toLowerCase()
      .split(" ")
      .map((word) =>
        word !== "of" ? word.slice(0, 1).toUpperCase() + word.slice(1) : "of"
      )
      .join(" ");
  };

  const addSchool = async (e) => {
    e.preventDefault();

    if (!user) return;

    await addDoc(schoolCollectionRef, {
      createdUserId: user,
      name: capitalize(schoolName),
      address: capitalize(schoolAddress),
      reviews: [],
    });

    setSchoolName("");
    setStreet("");
    setCity("");
    setState("");
    setZipcode("");
    navigate("/");
  };

  // prettier-ignore
  const states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']

  return (
    <form onSubmit={addSchool} className={css.newschool__container}>
      {/* <h3 className={css.construction}>Page under construction</h3> */}
      <h1>New School</h1>
      <div className={css.addschool__container}>
        <label
          className={css.addschool__label}
          onChange={(e) => setSchoolName(e.target.value)}
          htmlFor="name"
        >
          School Name
          <input
            className={css.addschool__input}
            required
            type="text"
            id="name"
          />
        </label>

        <h3 className={css.location}>Location/Address:</h3>
        <label
          className={css.addschool__label}
          onChange={(e) => setStreet(e.target.value)}
          htmlFor="street"
        >
          Street:
          <input
            className={css.addschool__input}
            required
            type="text"
            id="street"
          />
        </label>

        <label
          className={css.addschool__label}
          onChange={(e) => setCity(e.target.value)}
          htmlFor="city"
        >
          City:
          <input
            className={css.addschool__input}
            required
            type="text"
            id="city"
          />
        </label>

        <select
          className={css.addschool__select}
          onChange={(e) => setState(e.target.value)}
          required
          name="states"
          id="states"
        >
          {states.map((state, key) => {
            return (
              <option key={key} value={state}>
                {state}
              </option>
            );
          })}
        </select>

        <label
          className={css.addschool__label}
          onChange={(e) => setZipcode(e.target.value)}
          htmlFor="zipcode"
        >
          Zipcode:
          <input
            className={css.addschool__input}
            required
            type="number"
            id="zipcode"
          />
        </label>

        <label className={css.addschool__label} htmlFor="Country">
          Country:
          <input
            className={css.addschool__input}
            type="text"
            disabled
            value="United States"
          />
        </label>
      </div>
      <button className={css.addschool__btn}>Submit</button>
    </form>
  );
}

export default AddSchool;
