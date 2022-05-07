import React, { useContext } from "react";
import { Alert } from "react-bootstrap";
import { ModalContext } from "../../../context/ModalContext";

const AlertBox = () => {
  const { setAlert } = useContext(ModalContext);

  return (
    <Alert
      style={{
        position: "fixed",
        bottom: "20px",
        left: "25px",
        maxWidth: "220px",
        width: "100%",
        fontSize: "1.6rem",
      }}
      onClose={() => setAlert(false)}
      dismissible={true}
      key="success"
      variant="success"
    >
      Logout Successful!
    </Alert>
  );
};

export default AlertBox;
