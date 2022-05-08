import React, { useState } from "react";

export const ModalContext = React.createContext();

const ModalContextProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);
  const [alert, setAlert] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        modalOpen,
        loginModal,
        setLoginModal,
        loggedIn,
        setLoggedIn,
        loggedOut,
        setLoggedOut,
        alert,
        setAlert,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
