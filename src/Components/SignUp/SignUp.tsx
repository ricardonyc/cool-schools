import React, {
  FormEvent,
  useRef,
  useReducer,
  useState,
  useEffect,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { StateType, ActionType } from "../../model";
import FormInputs from "../UI/Inputs/FormInputs";
import { ModalContext } from "../../context/ModalContext";

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "EMAIL_INPUT":
      return {
        ...state,
        emailValue: action.value,
        emailIsValid:
          action.value.includes("@") &&
          !action.value.includes(" ") &&
          action.value.includes("."),
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
          state.emailValue.includes("@") &&
          !state.emailValue.includes(" ") &&
          state.emailValue.includes("."),
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

const SignUp = () => {
  const [formValid, setFormValid] = useState<boolean | null>();
  const [error, setError] = useState<string>("");
  const { signUp } = useUserAuth();
  const [state, dispatch] = useReducer(reducer, {
    emailValue: "",
    emailIsValid: null,
    passwordValue: "",
    passwordIsValid: null,
  });
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { setLoginModal, closeModal, setLoggedIn } = useContext(ModalContext);

  const { emailIsValid, passwordIsValid, emailValue, passwordValue } = state;

  useEffect(() => {
    const identifier = setTimeout(() => {
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

  const submitForm = async (e: FormEvent, email: string, password: string) => {
    e.preventDefault();
    setError("");
    if (!emailIsValid && !passwordIsValid) {
      setError("Invalid Email/Password");
      return;
    } else if (!emailIsValid) {
      emailRef.current?.focus();
      setError("Enter a valid Email!");
      return;
    } else if (!passwordIsValid) {
      passwordRef.current?.focus();
      setError("Enter a valid Password!");
      return;
    }

    try {
      // ! LOGS YOU IN AFTER SIGN UP
      // TODO: FIX THIS!
      await signUp(email, password);
      // ! REDIRECTS USER TO LOGIN MODAL <---------------
      setLoggedIn(true)
      setTimeout(() => {
        // setLoginModal(true);
        closeModal();
        navigate("/");
      }, 800);
    } catch (err: any) {
      console.log(err.message);
      setError(err.message.slice(10));
    }
  };

  return (
    <React.Fragment>
      <FormInputs
        submitForm={(e) => submitForm(e, emailValue, passwordValue)}
        blurredHandler={blurredHandler}
        inputsHandler={inputsHandler}
        emailIsValid={emailIsValid}
        emailRef={emailRef}
        passwordIsValid={passwordIsValid}
        passwordRef={passwordRef}
        path="/login"
        linkText="Login"
        h1Text="Sign Up"
        error={error}
      />
    </React.Fragment>
  );
};

export default SignUp;
