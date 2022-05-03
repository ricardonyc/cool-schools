import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const ProtectedRoute = ({ children }) => {
  let { user } = useUserAuth();

  console.log("user: ", user.uid);

  // WHEN PAGE IS REFRESHED, WE GET SIGNED OUT BECAUSE THE INITAL STATE OF 'USER' IS EMPTY
  // SO THIS BECOMES TRUE AND IT SENDS US TO LOGGED OUT HOME PAGE
  if (!user.uid === "undefined") {
    return <Navigate to="/" />;
  }


  return <div>{children}</div>;
};

export default ProtectedRoute;
