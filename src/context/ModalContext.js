import React, { useState } from "react";

export const ModalContext = React.createContext();

const ModalContextProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [welcome, setWelcome] = useState(false);
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
        welcome,
        setWelcome,
        alert,
        setAlert,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
