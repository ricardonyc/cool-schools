import React, {
  useRef,
  useState,
  useReducer,
  useEffect,
  FormEvent,
} from "react";
// import { InputContainer } from "./InputContainer";
// import { Button } from "../UI/misc/Button";
// import { Link } from "react-router-dom";
// import { RiGhostSmileFill } from "react-icons/ri";
// import Input from "../Input";
import { StateType, ActionType } from "../../model";
import FormInputs from "../FormInputs";

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "EMAIL_INPUT":
      return {
        ...state,
        emailValue: action.value,
        emailIsValid: action.value.includes("@") && !action.value.includes(" "),
      };
    case "PASSWORD_INPUT":
      return {
        ...state,
        passwordValue: action.value,
        passwordIsValid: action.value.length > 6,
      };
    case "EMAIL_BLUR":
      return {
        ...state,
        emailValue: state.emailValue,
        emailIsValid:
          state.emailValue.includes("@") && !state.emailValue.includes(" "),
      };
    case "PASSWORD_BLUR":
      return {
        ...state,
        passwordValue: state.passwordValue,
        passwordIsValid: state.passwordValue.length > 6,
      };
    default:
      return state;
  }
};

const Login = () => {
  const [formValid, setFormValid] = useState<boolean | null>();
  const [state, dispatch] = useReducer(reducer, {
    emailValue: "",
    emailIsValid: null,
    passwordValue: "",
    passwordIsValid: null,
  });

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { emailIsValid } = state;
  const { passwordIsValid } = state;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("identifier ran!");
      setFormValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const inputsHandler = (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.type === "email") {
      dispatch({ type: "EMAIL_INPUT", value: e.currentTarget.value.trim() });
    } else {
      dispatch({ type: "PASSWORD_INPUT", value: e.currentTarget.value.trim() });
    }
  };

  const blurredHandler = (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.type === "email") {
      dispatch({ type: "EMAIL_BLUR", value: "" });
    } else {
      dispatch({ type: "PASSWORD_BLUR", value: "" });
    }
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailIsValid) {
      emailRef.current?.focus();
    } else if (!passwordIsValid) {
      passwordRef.current?.focus();
    }
  };

  return (
    // <InputContainer>
    //   <form onSubmit={submitForm} className="login__box">
    //     <RiGhostSmileFill className="login__box--icon" />
    //     <h1 className="login__box--h1">Login</h1>
    //     <div className="login__box--input">
    //       <Input
    //         validity={emailIsValid}
    //         placeholder={"Email"}
    //         blurred={blurredHandler}
    //         changeHandler={inputsHandler}
    //         inputType={"email"}
    //         ref={emailRef}
    //       />
    //     </div>
    //     <div className="login__box--input">
    //       <Input
    //         validity={passwordIsValid}
    //         placeholder={"Password"}
    //         blurred={blurredHandler}
    //         changeHandler={inputsHandler}
    //         inputType={"password"}
    //         ref={passwordRef}
    //       />
    //     </div>
    //     <Button fontSize="1.8rem">Login</Button>
    //     <p>
    //       Don't have an account? <Link to="/signup">Sign Up</Link>
    //     </p>
    //   </form>
    // </InputContainer>
    <React.Fragment>
      <FormInputs
        submitForm={submitForm}
        blurredHandler={blurredHandler}
        inputsHandler={inputsHandler}
        emailIsValid={emailIsValid}
        emailRef={emailRef}
        passwordIsValid={passwordIsValid}
        passwordRef={passwordRef}
        path="/signup"
        linkText="Sign Up"
        h1Text="Login"
      />
    </React.Fragment>
  );
};

export default Login;
