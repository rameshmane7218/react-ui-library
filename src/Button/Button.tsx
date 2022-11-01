import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { ButtonStyled } from './Button.styled';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      onClick = () => {},
      size = 'md',
      variant = 'primary',
      disabled = false,
      rightIcon,
      leftIcon,
      ...rest
    } = props;

    console.log('size', size, rest);

    return (
      <ButtonStyled
        ref={ref}
        size={size}
        variant={variant}
        disabled={disabled}
        onClick={onClick}
        {...rest}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </ButtonStyled>
    );
  }
);
