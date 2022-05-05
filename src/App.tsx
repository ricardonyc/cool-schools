import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/MainPages/Layout";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import DarkmodeProvider from "./context/darkmode-context";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import AuthHome from "./Components/MainPages/AuthHome";
import "bootstrap/dist/css/bootstrap.min.css";
import SchoolList from "./Components/SchoolComponents/SchoolList";
import BSNav from "./Components/UI/Nav/BSNav";
import LightDarkMode from "./Components/UI/LightDarkMode";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const values = {
    darkMode,
    setDarkMode,
  };

  return (
    <UserAuthContextProvider>
      <DarkmodeProvider value={values}>
        <div className={darkMode ? "App dark" : "App light"}>
          <BSNav />
          <Routes>
            {/* <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <AuthHome />
                </ProtectedRoute>
              }
            /> */}
            <Route path="/" element={<Layout />} />
            {/* <Route path="/home" element={<Layout />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/schools" element={<SchoolList />} />
          </Routes>
          <LightDarkMode />
        </div>
      </DarkmodeProvider>
    </UserAuthContextProvider>
  );
}

export default App;
