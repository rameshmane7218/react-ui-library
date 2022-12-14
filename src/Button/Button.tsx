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
/**
 * Button component is used to trigger an action or event, such as submitting a form or performing a delete operation.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      onClick = () => {},
      size = 'md',
      variant = 'primary',
      disabled = false,
      rightIcon,
      leftIcon,
      ...rest
    },
    ref
  ) => {
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
