import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./Components/Layouts/HomeLayout";
import DarkmodeProvider from "./context/DarkModeContext";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import LightDarkMode from "./Components/UI/LightDarkMode";
import ModalContextProvider from "./context/ModalContext";
import Error from "./Components/Error";
import BSNav from "./Components/UI/Nav/BSNav";
import About from "./Components/About";
import Footer from "./Components/UI/Footer";
import SchoolResultsProvider from "./context/SchoolContext";
import SchoolDetailsLayout from "./Components/Layouts/SchoolDetailsLayout";
import AddReviewLayout from "./Components/Layouts/AddReviewLayout";
import AddSchoolLayout from "./Components/Layouts/AddSchoolLayout";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <UserAuthContextProvider>
      <SchoolResultsProvider>
        <DarkmodeProvider value={{ darkMode, setDarkMode }}>
          {/* MIGHT'VE NOT WORKED THE FIRST TIME BECAUSE MODAL PROVIDER WAS HERE */}
          <ModalContextProvider>
            <div className={darkMode ? "App dark" : "App light"}>
              <BSNav />
              <Routes>
                <Route path="/" element={<HomeLayout />} />
                <Route path="/about" element={<About />} />
                <Route path="schools/:name" element={<SchoolDetailsLayout />} />
                <Route path="/addschool" element={<AddSchoolLayout />} />
                <Route
                  path="/:schoolname/addreview"
                  element={<AddReviewLayout />}
                />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
              </Routes>
              <LightDarkMode />
              <Footer />
            </div>
          </ModalContextProvider>
        </DarkmodeProvider>
      </SchoolResultsProvider>
    </UserAuthContextProvider>
  );
}

export default App;
