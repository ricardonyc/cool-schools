import "../UI/variables.css";
import styled from "styled-components";

export const LoginContainer = styled.div`
  background-color: var(--white);
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .login__box {
    max-width: 100%;
    border-radius: var(--border-radius);
    padding: 3rem;
    color: var(--darkmode-navy);

    &--icon {
      width: 100%;
      font-size: 3rem;
      color: var(--teal);
    }

    &--h1 {
      font-size: 3rem;
      text-align: center;
      color: var(--teal);
    }

    &--input label {
      font-size: 2.2rem;
    }

    &--input input {
      outline: none;
      border: 1px solid;
      border-radius: var(--border-radius);
      margin: 0.5rem 0;
      padding: 0.2rem 0 0.2rem 0.2rem;
      font-size: 2rem;
      display: block;
      width: 100%;

      &:focus {
        outline: none;
      }
    }

    p {
      margin-top: 1.5rem;
      font-size: 2rem;
      text-align: center;
    }
  }
`;
