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
          <Routes>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <AuthHome />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Layout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </DarkmodeProvider>
    </UserAuthContextProvider>
  );
}

export default App;
