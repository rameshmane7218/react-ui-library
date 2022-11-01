import { shadow } from '../utils/shadow.utils';
import styled from 'styled-components';
import { BoxProps } from './Box';

export const BoxStyled = styled.div<BoxProps>`
  display: inline-block;
  padding: 10px;
  box-shadow: ${props => shadow(props.shadow ? props.shadow : 'none')};
  border: ${({ border }) => border};
  border-radius: ${({ rounded }) => {
    if (typeof rounded === 'number') {
      return `${rounded}px`;
    } else {
      return rounded;
    }
  }};
  width: ${({ width }) => width};
  padding: ${({ padding }) => {
    if (typeof padding === 'number') {
      return `${padding}px`;
    } else {
      return padding;
    }
  }};
`;
