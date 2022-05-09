import React, {
  useRef,
  useState,
  useReducer,
  useEffect,
  FormEvent,
  useContext,
} from "react";
import { StateType, ActionType } from "../../model";
import FormInputs from "../UI/Inputs/FormInputs";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
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

const Login = () => {
  const [formValid, setFormValid] = useState<boolean | null>();
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const { closeModal, setLoggedIn, setAccountCreated } =
    useContext(ModalContext);
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, {
    emailValue: "",
    emailIsValid: null,
    passwordValue: "",
    passwordIsValid: null,
  });

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { emailIsValid, passwordIsValid, emailValue, passwordValue } = state;

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

  const submitForm = async (
    e: FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    e.preventDefault();
    setError("");
    if (!emailIsValid) {
      emailRef.current?.focus();
      setError("Email is invalid!");
      return;
    } else if (!passwordIsValid) {
      passwordRef.current?.focus();
      setError("Password is invalid!");
      return;
    }

    try {
      await logIn(email, password);
      setLoggedIn(true);
      setAccountCreated(false);
      closeModal();
      navigate("/");
      setTimeout(() => {
        setLoggedIn(false);
      }, 5000);
    } catch (err: any) {
      if (err.message === "Firebase: Error (auth/user-not-found).") {
        setError("Account does not exist!");
      }
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
        path="/signup"
        linkText="Sign Up"
        h1Text="Login"
        error={error}
      />
    </React.Fragment>
  );
};

export default Login;
