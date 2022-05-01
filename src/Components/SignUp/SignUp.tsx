import React from "react";
import { Link } from "react-router-dom";
import { LoginContainer } from "../Login/LoginContainer";
import { Button } from "../UI/misc/Button";
import { FaPencilAlt } from "react-icons/fa";

const SignUp = () => {
  return (
    <LoginContainer>
      <div className="login__box">
        <FaPencilAlt className="login__box--icon" />
        <h1 className="login__box--h1">Sign Up</h1>
        <div className="login__box--input">
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" />
        </div>
        <div className="login__box--input">
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" />
        </div>
        <Button fontSize="1.8rem">Sign Up</Button>
        <p>
          Have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </LoginContainer>
  );
};
export default SignUp;
