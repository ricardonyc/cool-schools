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
import Modal from "./Components/UI/Modal/Modal";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [loginModal, setLoginModal] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <UserAuthContextProvider>
      <DarkmodeProvider value={{ darkMode, setDarkMode }}>
        <div className={darkMode ? "App dark" : "App light"}>
          {modalOpen && (
            <Modal onClose={() => setModalOpen(false)}>
              {loginModal && <Login setLoginModal={setLoginModal} />}
              {!loginModal && <SignUp setLoginModal={setLoginModal} />}
            </Modal>
          )}
          <BSNav values={{ openModal, loginModal, setLoginModal }} />
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
            <Route
              path="/login"
              element={<Login setLoginModal={setLoginModal} />}
            />
            <Route
              path="/signup"
              element={<SignUp setLoginModal={setLoginModal} />}
            />
            <Route path="/schools" element={<SchoolList />} />
          </Routes>
          <LightDarkMode />
        </div>
      </DarkmodeProvider>
    </UserAuthContextProvider>
  );
}

export default App;
