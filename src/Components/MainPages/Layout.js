import MainSection from "../UI/MainSection";
import React from "react";
import Boxes from "../UI/Boxes";
import BSNav from "../UI/Nav/BSNav";

const Layout = () => {
  return (
    <React.Fragment>
      {/* <BSNav /> */}
      <MainSection />
      <Boxes />
    </React.Fragment>
  );
};

export default Layout;
