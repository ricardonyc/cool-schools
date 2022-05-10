import React, { useEffect, useState, useContext } from "react";
import css from "./SchoolList.module.css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import SchoolAverage from "./SchoolAverage";
import Skeleton from "@mui/material/Skeleton";
import HomeCardsSkeleton from "./HomeCardsSkeleton";
import Rating from "@mui/material/Rating";
import ThemeContext from "../../context/DarkModeContext";
import { CgProfile } from "react-icons/cg";
import { BsBuilding } from "react-icons/bs";
import RatingStars from "./RatingStars.js";

interface SchoolType {
  id?: number;
  address?: string;
  name?: string;
  reviews?: string[];
}
 
const SchoolList = () => {
  const [schools, setSchools] = useState<object[]>();
  const schoolsCollectionRef = collection(db, "universities");
  //   console.log(ThemeContext);
  //   const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    const getUsers = async () => {
      // ! RETURNS ALL DOCUMENTS FROM A SPECIFIC COLLECTION
      const data = await getDocs(schoolsCollectionRef);
      setSchools(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      // ! data() FUNCTION SHOULD RETURN THE OBJECT CONTAINING THE INFO OF THE SCHOOL
    };

    setTimeout(() => {
      getUsers();
    }, 900);
  }, []);

  // SELECT ONLY 5 SCHOOLS
  const numSchools = schools?.slice(0, 5);
  console.log(numSchools);

  return (
    <div className={css.container}>
      <div className={css.school__box}>
        {schools &&
          numSchools?.map((school: SchoolType) => {
            return (
              <div key={school.id}>
                <div className={css.school__name}>
                  <BsBuilding className={css.building__icon} />
                  <h2>{school.name}</h2>
                </div>
                <h4 className={css.address}>{school.address}</h4>
                <h3 className={css.average}>
                  Average Rating <small>({school?.reviews?.length})</small> :{" "}
                  <SchoolAverage {...school} /> / 5{" "}
                </h3>
                <RatingStars school={school} />
              </div>
            );
          })}
        {!schools && (
          <>
            <HomeCardsSkeleton />
            <HomeCardsSkeleton />
            <HomeCardsSkeleton />
            <HomeCardsSkeleton />
          </>
        )}
      </div>
    </div>
  );
};
export default SchoolList;
