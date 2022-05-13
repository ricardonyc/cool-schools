import React, { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import BSNav from "../UI/Nav/BSNav";
import SchoolDetails from "../SchoolComponents/Details/SchoolDetails";
import AlertBox from "../UI/Alert/AlertBox";
import Modal from "../UI/Modal/Modal";

function SchoolDetailsLayout(props) {
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
      <SchoolDetails />

      {loggedIn && <AlertBox>Logged In Successfully!</AlertBox>}
      {loggedOut && <AlertBox>Logged Out Successfully!</AlertBox>}
    </React.Fragment>
  );
}

export default SchoolDetailsLayout;
