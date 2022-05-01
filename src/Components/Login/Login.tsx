import React from "react";
import { LoginContainer } from "./LoginContainer";
import { Button } from "../UI/misc/Button";
import { Link } from "react-router-dom";
import { RiGhostSmileFill } from "react-icons/ri";

const Login = () => {
  return (
    <LoginContainer>
      <div className="login__box">
        <RiGhostSmileFill className="login__box--icon" />
        <h1 className="login__box--h1">Login</h1>
        <div className="login__box--input">
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" />
        </div>
        <div className="login__box--input">
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" />
        </div>
        <Button fontSize="1.8rem">Login</Button>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </LoginContainer>
  );
};

export default Login;
