import React, { useRef, useImperativeHandle } from "react";
import { InputProps } from "../../../model";
import "../styling/variables.css";

const Input = React.forwardRef(
  (
    { validity, placeholder, blurred, changeHandler, inputType }: InputProps,
    ref
  ): JSX.Element => {
    const styling = {
      backgroundColor:
        validity === null ? "white" : validity ? "#d0ffc6" : "#ffbebe",
    };

    const inputRef = useRef<HTMLInputElement>(null);

    const activate = () => {
      inputRef.current?.focus();
    };

    useImperativeHandle(ref, () => {
      return {
        focus: activate,
      };
    });

    return (
      <React.Fragment>
        <label htmlFor={inputType}>{placeholder}:</label>
        <input
          ref={inputRef}
          style={styling}
          placeholder={placeholder}
          id={inputType}
          type={inputType}
          onChange={changeHandler}
          onBlur={blurred}
        />
      </React.Fragment>
    );
  }
);

export default Input;
 