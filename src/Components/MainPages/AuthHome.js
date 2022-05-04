import React from "react";
import MainSection from "../UI/MainSection";
import Boxes from "../UI/Boxes";
import LightDarkMode from "../UI/LightDarkMode";
import AuthNavbar from "../UI/Nav/AuthNavBar";
import BSNav from "../UI/Nav/BSNav";

const AuthHome = () => {
  return (
    <React.Fragment>
      {/* <AuthNavbar /> */}
      <BSNav />
      <MainSection />
      <Boxes />
      <LightDarkMode />
    </React.Fragment>
  );
};

export default AuthHome;
