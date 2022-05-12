import React from "react";
import { useLocation, useParams } from "react-router-dom";

function SchoolDetails(props) {
  //   const cool = useParams();

  const location = useLocation();
  const ratio = location.state.school;
  //   const { state } = location.state;

  console.log(ratio);

  return (
    <div>
      <h1>school detials</h1>
    </div>
  );
}

export default SchoolDetails;
