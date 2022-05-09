import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/MainPages/Layout";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
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

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <UserAuthContextProvider>
      <DarkmodeProvider value={{ darkMode, setDarkMode }}>
        <ModalContextProvider>
          <div className={darkMode ? "App dark" : "App light"}>
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
              {/* <Route path="/login" element={<Login />} /> */}
              {/* <Route path="/signup" element={<SignUp />} /> */}
              <Route path="/schools" element={<SchoolListLayout />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <LightDarkMode />
          </div>
        </ModalContextProvider>
      </DarkmodeProvider>
    </UserAuthContextProvider>
  );
}

export default App;
