import { Alert } from "react-bootstrap";
import "../styling/variables.css";

const AlertBox = ({ children }) => {
  return (
    <Alert
      style={{
        position: "fixed",
        bottom: "20px",
        left: "25px",
        maxWidth: "220px",
        width: "100%",
        fontSize: "1.6rem",
        zIndex: "9999999999999999",
        backgroundColor: "#A5FFB5",
        color: "black",
        border: "none",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
      key="success"
      // variant="success"
    >
      {children}
    </Alert>
  );
};

export default AlertBox;
