import MainSection from "../UI/MainSection";
import React, { useContext, useEffect } from "react";
import Boxes from "../UI/Boxes";
import Modal from "../UI/Modal/Modal";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import BSNav from "../UI/Nav/BSNav";
import { ModalContext } from "../../context/ModalContext";
import AlertBox from "../UI/Alert/AlertBox";
import SchoolList from "../SchoolComponents/SchoolList";

const Layout = () => {
  const {
    modalOpen,
    loginModal,
    loggedOut,
    loggedIn,
    reviewPosted,
    schoolAdded,
  } = useContext(ModalContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <SchoolList />

      {schoolAdded && <AlertBox>School Added Successfully</AlertBox>}
      {reviewPosted && <AlertBox>Review Posted Successfully!</AlertBox>}
      {loggedIn && <AlertBox>Logged In Successfully!</AlertBox>}
      {loggedOut && <AlertBox>Logged Out Successfully!</AlertBox>}
    </React.Fragment>
  );
};

export default Layout;
