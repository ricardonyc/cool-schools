import React, { useEffect, useState, useContext } from "react";
import css from "./SchoolList.module.css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import OrangeClass from "../assets/orangeclass.jpg";
import SchoolAverage from "./SchoolAverage";
import Skeleton from "@mui/material/Skeleton";
import Rating from "@mui/material/Rating";
import ThemeContext from "../../context/DarkModeContext";

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

  console.log(schools);

  return (
    <div className={css.container}>
      <div className={css.img__container}></div>
      <div className={css.school__box}>
        {schools &&
          schools.map((school: SchoolType) => {
            return (
              <div key={school.id}>
                <h2>{school.name}</h2>
                <h4 className={css.address}>{school.address}</h4>
                <h3 className={css.average}>
                  Average Rating: <SchoolAverage {...school} /> / 5{" "}
                </h3>
                <Rating name="read-only" value={2.4} readOnly />
                {/* <p>{school?.reviews?.slice()}</p> */}
                <p>{school?.reviews?.length} rating</p>
                {/* <img src={OrangeClass} alt="classroom" /> */}
              </div>
            );
          })}
        {!schools && (
          <>
            <div>
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={"90%"}
                height={24}
              />
              <Skeleton
                animation="wave"
                style={{ margin: ".5rem 0" }}
                variant="rectangular"
                width={"55%"}
                height={18}
              />
              <Skeleton
                animation="wave"
                style={{ position: "absolute", bottom: "5px", right: "10px" }}
                variant="rectangular"
                width={"45%"}
                height={23}
              />
            </div>
            <div>
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={"90%"}
                height={24}
              />
              <Skeleton
                animation="wave"
                style={{ margin: ".5rem 0" }}
                variant="rectangular"
                width={"55%"}
                height={18}
              />
              <Skeleton
                animation="wave"
                style={{ position: "absolute", bottom: "5px", right: "10px" }}
                variant="rectangular"
                width={"45%"}
                height={23}
              />
            </div>
            <div>
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={"90%"}
                height={24}
              />
              <Skeleton
                animation="wave"
                style={{ margin: ".5rem 0" }}
                variant="rectangular"
                width={"55%"}
                height={18}
              />
              <Skeleton
                animation="wave"
                style={{ position: "absolute", bottom: "5px", right: "10px" }}
                variant="rectangular"
                width={"45%"}
                height={23}
              />
            </div>
            <div>
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={"90%"}
                height={24}
              />
              <Skeleton
                animation="wave"
                style={{ margin: ".5rem 0" }}
                variant="rectangular"
                width={"55%"}
                height={18}
              />
              <Skeleton
                animation="wave"
                style={{
                  position: "absolute",
                  bottom: "5px",
                  right: "10px",
                }}
                variant="rectangular"
                width={"45%"}
                height={23}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default SchoolList;
