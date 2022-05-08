import React, { useContext } from "react";
import { Alert } from "react-bootstrap";
import { ModalContext } from "../../../context/ModalContext";

const AlertBox = ({ children }) => {
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
      // onClose={() => setAlert(false)}
      // dismissible={true}
      key="success"
      variant="success"
    >
      {children}
    </Alert>
  );
};

export default AlertBox;
