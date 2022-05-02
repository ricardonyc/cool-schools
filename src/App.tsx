import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/UI/Layout";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import DarkmodeProvider from "./darkmode-context";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const values = {
    darkMode,
    setDarkMode,
  };

  return (
    <DarkmodeProvider value={values}>
      <div className={darkMode ? "App dark" : "App light"}>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </DarkmodeProvider>
  );
}

export default App;
