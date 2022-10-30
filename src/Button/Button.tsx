import React, { FC, HTMLAttributes, ReactNode } from 'react';
// import { ButtonStyled } from "./Button.styled";

import styled from 'styled-components';

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  onClick?: () => void;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  highlight?: string;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
export const ButtonStyled = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 4px;
  cursor: pointer;
  border: 2px solid palevioletred;
  border-radius: 3px;
  color: ${({ variant }) => variant === "primary" ? "white" : "palevioletred"};
  background: ${({ variant }) => variant === "primary" ? "palevioletred" : "white"};
`;

export const Button: FC<ButtonProps> = ({
  children,
  onClick = () => {},
  size = 'sm',
  variant = 'secondary',
  disabled = false,
  rightIcon,
  leftIcon,
}) => {
  return (
    <ButtonStyled
      size={size}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </ButtonStyled>
  );
};
