import styled from 'styled-components';
import { InputFieldProps } from './InputField';

export const StyledInputField = styled.input<InputFieldProps>`
  width: 50px;
  height: 50px;
  border: ${({ isSuccessful }) =>
    isSuccessful ? '1px solid gray' : '1px solid gray'};
  border-radius: 5px;
  font-size: 22px;
  text-align: center;

  &:focus {
    outline-color: rgb(48, 96, 173);
  }
`;
