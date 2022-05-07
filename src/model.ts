export interface InputProps {
  validity: null | boolean;
  placeholder: string;
  blurred: (e: React.FormEvent<HTMLInputElement>) => void;
  changeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  inputType: string;
}

export interface ActionType {
  type: string;
  value: string;
}

export interface StateType {
  emailValue: string;
  emailIsValid: null | boolean;
  passwordValue: string;
  passwordIsValid: null | boolean;
}

export type FormProps = {
  submitForm: (
    e: React.FormEvent<HTMLFormElement>,
    email?: string,
    password?: string
  ) => void;
  emailIsValid: null | boolean;
  blurredHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  inputsHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  emailRef: React.RefObject<HTMLInputElement>;
  passwordIsValid: null | boolean;
  passwordRef: React.RefObject<HTMLInputElement>;
  path: string;
  linkText: string;
  h1Text: string;
  error: string;
  setLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface ModalProp {
  setLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
}
