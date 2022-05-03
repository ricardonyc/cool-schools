import Navbar from "../UI/Nav/Navbar";
import MainSection from "../UI/MainSection";
import React from "react";
import Boxes from "../UI/Boxes";
import LightDarkMode from "../UI/LightDarkMode";

const Layout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <MainSection />
      <Boxes />
      <LightDarkMode />
    </React.Fragment>
  );
};

export default Layout;
