import React from "react";
// import { ButtonStyled } from "./Button.styled";

import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 4px;
  cursor: pointer;
  border: 2px solid palevioletred;
  border-radius: 3px;
  color: ${(props)=>{
    console.log(props);
    return "red";
  }};
  size:20px;

 
`;



interface ButtonProps {
  children: string;
  onClick?: () => void;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  highlight?: string;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const Button = ({
  children,
  onClick = () => {},
  // size = "sm",
  // variant = "secondary",
  disabled = false,
  // leftIcon,
  // rightIcon,
}: ButtonProps) => {
  return (
    <ButtonStyled
      // size={size}
      // variant={variant}
      disabled={disabled}
      onClick={onClick}
    >
      {/* {leftIcon} */}
      {children}
      {/* {rightIcon} */}
    </ButtonStyled>
  );
};

export default Button;
