import React from "react";
import { useLocation, useParams } from "react-router-dom";

function SchoolDetails(props) {
  //   const cool = useParams();

  const location = useLocation();
  const { school } = location.state;
  //   const { state } = location.state;

  console.log(school);

  return (
    <div>
      <h1>school detials</h1>
    </div>
  );
}

export default SchoolDetails;
