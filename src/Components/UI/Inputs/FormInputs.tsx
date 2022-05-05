import { useContext } from "react";
import { InputContainer } from "../../Login/InputContainer";
import Input from "./Input";
import { RiGhostSmileFill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { Button } from "../styling/Button";
import { Link } from "react-router-dom";
import { FormProps } from "../../../model";
import LightDarkMode from "../LightDarkMode";
import { ThemeContext } from "../../../context/darkmode-context";

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
  error,
}: FormProps) => {
  const { darkMode } = useContext(ThemeContext);

  const styling = {
    backgroundColor: "pink",
    color: "black",
    fontSize: "1.5rem",
    margin: "1rem 0",
    padding: "1rem 0",
    textAlign: "center" as "center",
  };

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
          {error && <h3 style={styling}>{error}</h3>}
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
        <Button width="100%" fontSize="1.8rem">
          {h1Text}
        </Button>
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
      </form>
    </InputContainer>
  );
};
export default FormInputs;
