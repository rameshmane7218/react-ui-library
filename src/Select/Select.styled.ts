import styled from 'styled-components';
import { SelectProps } from './Select';
export const StyledSelect = styled.select<SelectProps>`
  display: flex;
  gap: 10px;
  height: 35px;
  border-style: solid;
  border-width: ${({ variant }) =>
    variant === 'underline' ? '0px 0px 0.8px 0px' : '0.8px'};
  border-color: ${({ variant }) =>
    variant === 'none' ? 'transparent' : 'rgb(191, 191, 191)'};
  border-radius: ${({ variant }) => (variant === 'underline' ? 'none' : '5px')};
  padding-left: 10px;
  font-size: 16px;
  width: ${({ width }) => width};
  background: ${({ variant }) => (variant === 'solid' ? '#EDF2F7' : 'none')};
  &:focus {
    outline: none;
    border-style: solid;
    border-width: ${({ variant }) =>
      variant === 'underline' ? '0px 0px 2px 0px' : '2px'};
    border-color: ${({ variant }) =>
      variant === 'none' ? 'transparent' : 'rgb(48, 96, 173)'};
    border-radius: ${({ variant }) =>
      variant === 'underline' ? 'none' : '5px'};
  }
`;
