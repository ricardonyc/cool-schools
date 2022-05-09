import React, { useEffect, useState } from "react";
import css from "./SchoolList.module.css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import SchoolAverage from "./SchoolAverage";

interface SchoolType {
  id?: number;
  address?: string;
  name?: string;
  reviews?: string[];
}

const SchoolList = () => {
  const [schools, setSchools] = useState<object[]>();
  const schoolsCollectionRef = collection(db, "universities");

  useEffect(() => {
    const getUsers = async () => {
      // ! RETURNS ALL DOCUMENTS FROM A SPECIFIC COLLECTION
      const data = await getDocs(schoolsCollectionRef);
      setSchools(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      // ! data() FUNCTION SHOULD RETURN THE OBJECT CONTAINING THE INFO OF THE USER
      //   setSchools(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    getUsers();
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
                <h3>{school.address}</h3>
                <h3>
                  <SchoolAverage {...school} />
                </h3>
              </div>
            );
          })}
      </div>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
export default SchoolList;
