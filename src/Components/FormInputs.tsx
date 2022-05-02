import React, { useContext } from "react";
import { InputContainer } from "./Login/InputContainer";
import Input from "./Input";
import { RiGhostSmileFill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { Button } from "./UI/misc/Button";
import { Link } from "react-router-dom";
import { FormProps } from "../model";
import LightDarkMode from "./UI/LightDarkMode";
import { ThemeContext } from "../darkmode-context";

const FormInputs = ({
  submitForm,
  emailIsValid,
  blurredHandler,
  inputsHandler,
  emailRef,
  passwordIsValid,
  passwordRef,
  path,
  linkText,
  h1Text,
}: FormProps) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <InputContainer bgColor={darkMode} clr={darkMode}>
      <form onSubmit={submitForm} className="login__box">
        {linkText === "Sign Up" ? (
          <RiGhostSmileFill className="login__box--icon" />
        ) : (
          <FaPencilAlt className="login__box--icon" />
        )}
        <h1 className="login__box--h1">{h1Text}</h1>
        <div className="login__box--input">
          <Input
            validity={emailIsValid}
            placeholder={"Email"}
            blurred={blurredHandler}
            changeHandler={inputsHandler}
            inputType={"email"}
            ref={emailRef}
          />
        </div>
        <div className="login__box--input">
          <Input
            validity={passwordIsValid}
            placeholder={"Password"}
            blurred={blurredHandler}
            changeHandler={inputsHandler}
            inputType={"password"}
            ref={passwordRef}
          />
        </div>
        <Button fontSize="1.8rem">{h1Text}</Button>
        <p>
          {linkText === "Login" ? (
            <>
              Have an account? <Link to={path}>{linkText}</Link>
            </>
          ) : (
            <>
              Don't have an account? <Link to={path}>{linkText}</Link>
            </>
          )}
        </p>
        <p>
          <Link to="/">Go Back Home</Link>
        </p>
      </form>
      <LightDarkMode />
    </InputContainer>
  );
};
export default FormInputs;
