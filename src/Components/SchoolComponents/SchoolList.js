import React, { useEffect, useState, useContext } from "react";
import css from "./SchoolList.module.css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import SchoolAverage from "./SchoolAverage";
import HomeCardsSkeleton from "./HomeCardsSkeleton";
import { BsBuilding } from "react-icons/bs";
import RatingStars from "./RatingStars.js";
import { ThemeContext } from "../../context/DarkModeContext";
import { SchoolContext } from "../../context/SchoolContext";

const SchoolList = () => {
  const schoolsCollectionRef = collection(db, "universities");
  const { darkMode } = useContext(ThemeContext);
  const { schoolResults, setSchoolResults } = useContext(SchoolContext);

  useEffect(() => {
    const getUsers = async () => {
      // ! RETURNS ALL DOCUMENTS FROM A SPECIFIC COLLECTION
      const data = await getDocs(schoolsCollectionRef);
      setSchoolResults(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      // ! data() FUNCTION SHOULD RETURN THE OBJECT CONTAINING THE INFO OF THE SCHOOL
    };

    setTimeout(() => {
      getUsers();
    }, 1000);
  }, []);

  // SELECT ONLY n SCHOOLS
  const numSchools = schoolResults?.slice(0, 2);
  console.log(numSchools);

  const boxBg = {
    backgroundColor: darkMode
      ? "var(--reviewbox-navy)"
      : "var(--reviewbox-white)",
  };

  return (
    <div className={css.container}>
      <div className={css.school__box}>
        {schoolResults &&
          numSchools.map((school) => {
            return (
              <div style={boxBg} className={css.box} key={school.id}>
                <div className={css.school__name}>
                  <BsBuilding className={css.building__icon} />
                  <h2>{school.name}</h2>
                </div>
                <h4 className={css.address}>{school.address}</h4>
                <div className={css.rating__container}>
                  <RatingStars school={school} />
                  <h4>{school.reviews.length}</h4>
                </div>
                <p className={css.review}>{school.reviews[0].review}</p>
                <h4 className={css.average}>
                  Average: <SchoolAverage {...school} /> / 5{" "}
                </h4>
              </div>
            );
          })}
        {!schoolResults && (
          <>
            <HomeCardsSkeleton />
            <HomeCardsSkeleton />
            <HomeCardsSkeleton />
            {/* <HomeCardsSkeleton /> */}
          </>
        )}
      </div>
    </div>
  );
};
export default SchoolList;
