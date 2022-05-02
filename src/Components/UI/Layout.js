import Navbar from "./Navbar";
import MainSection from "./MainSection";
import React from "react";
import Boxes from "./Boxes";
import LightDarkMode from "./LightDarkMode";

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
