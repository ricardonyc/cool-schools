import { useContext } from "react";
import { InputContainer } from "../../Login/InputContainer";
import Input from "./Input";
import { RiGhostSmileFill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { Button } from "../styling/Button";
import { FormProps } from "../../../model";
import { ThemeContext } from "../../../context/DarkModeContext";
import { ModalContext } from "../../../context/ModalContext";
import css from "../styling/variables.css";

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
  const { setLoginModal, loggedIn, accountCreated } = useContext(ModalContext);

  const styling = {
    backgroundColor: "#ff8181",
    color: "black",
    fontSize: "1.5rem",
    margin: "1rem 0",
    padding: "1rem 0",
    textAlign: "center" as "center",
  };

  const linkStyle = {
    cursor: "pointer",
    textDecoration: "underline",
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
        <Button
          color={darkMode ? "var(--yellow)" : "var(--teal)"}
          width="100%"
          fontSize="1.8rem"
        >
          {h1Text}
        </Button>
        <p>
          {linkText === "Login" ? (
            <>
              Have an account?{" "}
              <span style={linkStyle} onClick={() => setLoginModal(true)}>
                {linkText}
              </span>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <span style={linkStyle} onClick={() => setLoginModal(false)}>
                {linkText}
              </span>
            </>
          )}
        </p>
        {accountCreated && (
          <p
            style={{
              color: "black",
              backgroundColor: "#B2FFC0",
              padding: "1rem",
            }}
          >
            <BsCheckCircleFill /> <br />
            Account Created. Log in!
          </p>
        )}
      </form>
    </InputContainer>
  );
};
export default FormInputs;
