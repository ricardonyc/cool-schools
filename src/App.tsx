import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/MainPages/Layout";
import DarkmodeProvider from "./context/DarkModeContext";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import AuthHome from "./Components/MainPages/AuthHome";
import "bootstrap/dist/css/bootstrap.min.css";
import LightDarkMode from "./Components/UI/LightDarkMode";
import ModalContextProvider from "./context/ModalContext";
import AddSchool from "./Components/SchoolComponents/AddSchool";
import SchoolListLayout from "./Components/MainPages/SchoolListLayout";
import Error from "./Components/Error";
import BSNav from "./Components/UI/Nav/BSNav";
import About from "./Components/About";
import Footer from "./Components/UI/Footer";
import SchoolResultsProvider from "./context/SchoolContext";
import SchoolDetails from "./Components/SchoolComponents/SchoolDetails";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <UserAuthContextProvider>
      <SchoolResultsProvider>
        <DarkmodeProvider value={{ darkMode, setDarkMode }}>
          <ModalContextProvider>
            <div className={darkMode ? "App dark" : "App light"}>
              <BSNav />
              <Routes>
                <Route
                  path="/addschool"
                  element={
                    <ProtectedRoute>
                      {/* <AuthHome /> */}
                      <AddSchool />
                    </ProtectedRoute>
                  }
                />
                <Route path="/" element={<Layout />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/login" element={<Login />} /> */}
                {/* <Route path="/signup" element={<SignUp />} /> */}
                <Route path="/schools" element={<SchoolListLayout />} />
                <Route path="schools/:name" element={<SchoolDetails />} />
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
