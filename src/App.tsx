import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/UI/Layout";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
