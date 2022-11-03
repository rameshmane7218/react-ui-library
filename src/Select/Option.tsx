import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { StyledOption } from './Option.styled';

export interface OptionProps extends HTMLAttributes<HTMLOptionElement> {
  children: ReactNode;
  disabled?: boolean;
  value?: string | number;
}

export const Option = forwardRef<HTMLOptionElement, OptionProps>(
  ({ children, disabled = false, value = '', ...rest }, ref) => {
    return (
      <StyledOption ref={ref} disabled={disabled} value={value} {...rest}>
        {children}
      </StyledOption>
    );
  }
);
