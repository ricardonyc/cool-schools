import "./variables.css";
import styled from "styled-components";

interface ButtonProps {
  fontSize: string;
  width: string;
  bgColor: string;
}

export const Button = styled.button<ButtonProps>`
  background-color: var(--button-blue);
  background-color: ${(props) => props.bgColor};
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: var(--darkmode-navy);
  font-weight: 600;
  cursor: pointer;
  font-size: ${(props) => props.fontSize};
  margin-top: 1rem;
  padding: 0.7rem 0;
  width: ${(props) => props.width};

  &:active {
    background-color: var(--teal-active);
  }
`;
