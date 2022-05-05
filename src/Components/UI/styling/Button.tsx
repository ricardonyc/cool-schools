import "./variables.css";
import styled from "styled-components";

interface ButtonProps {
  fontSize: string;
  width: string;
}

export const Button = styled.button<ButtonProps>`
  background-color: var(--button-blue);
  background-color: var(--teal);
  border-radius: var(--border-radius);
  border: none;
  color: white;
  cursor: pointer;
  font-size: ${(props) => props.fontSize};
  margin-top: 1rem;
  padding: 0.7rem 0;
  width: ${props => props.width};

  &:active {
    background-color: var(--teal-active);
  }
`;
