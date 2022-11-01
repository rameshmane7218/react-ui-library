import styled from 'styled-components';
import { ButtonProps } from './Button';
import { size, padding } from '../utils/size.utils';
export const ButtonStyled = styled.button<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 4px;
  cursor: pointer;
  border: 2px solid palevioletred;
  border-radius: 3px;
  color: ${({ variant }) =>
    variant === 'primary' ? 'white' : 'palevioletred'};
  background: ${({ variant }) =>
    variant === 'primary' ? 'palevioletred' : 'white'};
  font-size: ${props => size(props.size ? props.size : 'md')};
  // font-weight: 600;
  padding: ${props => padding(props.size ? props.size : 'md')};
  height: 100%;
  ${({ disabled }) => {
    return `
        ${disabled &&
          ` opacity: 0.4;
            cursor: not-allowed;
          `}
    `;
  }};
`;

// /* units */
// const sizeUnit: number = 8;

// /* sizes */
// const createSize = (size: number) => {
//   console.log(`${size * sizeUnit}px`);
//   return `${size * sizeUnit}px`;
// };

// const sizes = {
//   xs: createSize(2),
//   sm: createSize(3),
//   md: createSize(4),
//   lg: createSize(5),
// };
// type sizeProps = 'xs' | 'sm' | 'md' | 'lg';

// const size = (size: sizeProps) => {
//   console.log('size', size);
//   if (typeof size !== undefined) {
//     return sizes[size];
//   } else {
//     return sizes['md'];
//   }
// };
