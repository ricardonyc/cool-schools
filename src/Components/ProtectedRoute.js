import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
// import { useUserAuth } from "../context/UserAuthContext";
import { auth } from "../firebase";

const ProtectedRoute = ({ children }) => {
  //   let { user } = useUserAuth();
  const [user, setUser] = useState({});

  // ! PROTECTED ROUTE RENDERS INFINITELY BECAUSE OF STATE CHANGE
  // ! APP CRASHES WHEN DARK MODE IS TOGGLED, 'useEffect' FIXES PROBLEM
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  //   console.log("user: ", user.uid);

  // WHEN PAGE IS REFRESHED, WE GET SIGNED OUT BECAUSE THE INITAL STATE OF 'USER' IS EMPTY
  // SO THIS BECOMES TRUE AND IT SENDS US TO LOGGED OUT HOME PAGE
  // ? TEST TO SEE IF IT WORKS
  // * SEEMS LIKE ITS BEEN FIXED!
  if (!user) {
    return <Navigate to="/" />;
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
 