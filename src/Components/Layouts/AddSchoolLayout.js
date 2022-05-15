import React, { useContext } from "react";
import Modal from "../UI/Modal/Modal";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import BSNav from "../UI/Nav/BSNav";
import { ModalContext } from "../../context/ModalContext";
import AlertBox from "../UI/Alert/AlertBox";
import AddSchool from "../SchoolComponents/AddSchool";

const AddSchoolLayout = () => {
  const { modalOpen, loginModal, loggedOut, loggedIn } =
    useContext(ModalContext);

  return (
    <React.Fragment>
      {modalOpen && (
        <Modal>
          {loginModal && <Login />}
          {!loginModal && <SignUp />}
        </Modal>
      )}
      <BSNav />
      <AddSchool />
      {loggedIn && <AlertBox>Logged In Successfully!</AlertBox>}
      {loggedOut && <AlertBox>Logged Out Successfully!</AlertBox>}
    </React.Fragment>
  );
};

export default AddSchoolLayout;
