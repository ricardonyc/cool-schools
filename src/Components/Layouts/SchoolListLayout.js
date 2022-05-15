import React, { useContext } from "react";
import Modal from "../UI/Modal/Modal";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import BSNav from "../UI/Nav/BSNav";
import { ModalContext } from "../../context/ModalContext";
import AlertBox from "../UI/Alert/AlertBox";
import SchoolList from "../SchoolComponents/SchoolList";

const SchoolListLayout = () => {
  const { modalOpen, loginModal, loggedOut, loggedIn } =
    useContext(ModalContext);

  return (
    <React.Fragment>
      <h2>/schools</h2>
      <h2>/schools</h2>
      <h2>/schools</h2>
      <h2>/schools</h2>
      <h2>/schools</h2>
      <h2>/schools</h2>
      <h2>/schools</h2>
      <h2>/schools</h2>
      {/* {modalOpen && (
        <Modal>
          {loginModal && <Login />}
          {!loginModal && <SignUp />}
        </Modal>
      )}
      <BSNav />
      <SchoolList />
      {loggedIn && <AlertBox>Logged In Successfully!</AlertBox>}
      {loggedOut && <AlertBox>Logged Out Successfully!</AlertBox>} */}
    </React.Fragment>
  );
};

export default SchoolListLayout;
