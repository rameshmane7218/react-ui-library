import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { StyledOption } from './Option.styled';

export interface OptionProps extends HTMLAttributes<HTMLOptionElement> {
  children: ReactNode;
  disabled?: boolean;
  selected?: boolean;
  value?: string | number;
}

export const Option = forwardRef<HTMLOptionElement, OptionProps>(
  (
    { children, disabled = false, selected = false, value = '', ...rest },
    ref
  ) => {
    return (
      <StyledOption
        ref={ref}
        disabled={disabled}
        selected={selected}
        value={value}
        {...rest}
      >
        {children}
      </StyledOption>
    );
  }
);
