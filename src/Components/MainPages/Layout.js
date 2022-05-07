import MainSection from "../UI/MainSection";
import React, { useContext } from "react";
import Boxes from "../UI/Boxes";
import Modal from "../UI/Modal/Modal";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import BSNav from "../UI/Nav/BSNav";
import { ModalContext } from "../../context/ModalContext";
import AlertBox from "../UI/Alert/Alert";

const Layout = () => {
  const { modalOpen, loginModal, alert } = useContext(ModalContext);

  return (
    <React.Fragment>
      {modalOpen && (
        <Modal>
          {loginModal && <Login />}
          {!loginModal && <SignUp />}
        </Modal>
      )}
      <BSNav />
      <MainSection />
      <Boxes />
      {alert && <AlertBox />}
    </React.Fragment>
  );
};

export default Layout;
