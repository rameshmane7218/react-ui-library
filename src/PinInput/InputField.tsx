import React, {
  ChangeEvent,
  forwardRef,
  HTMLAttributes,
  KeyboardEvent,
} from 'react';
import { StyledInputField } from './InputField.styled';

export interface InputFieldProps extends HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value?: string;
  type?: string;
  limitPerBox?: number;
  isSuccessful?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
}
export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      placeholder,
      limitPerBox,
      type = 'text',
      value = '',
      isSuccessful = false,
      onChange,
      onKeyUp,
      ...rest
    },
    ref
  ) => {
    return (
      <StyledInputField
        ref={ref}
        type={type}
        value={value}
        isSuccessful={isSuccessful}
        maxLength={limitPerBox}
        placeholder={placeholder}
        onChange={onChange}
        onKeyUp={onKeyUp}
        {...rest}
      />
    );
  }
);
