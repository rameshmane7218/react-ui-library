import { shadow } from '@components/utils/shadow.utils';
import styled from 'styled-components';
import { BoxProps } from './Box';

export const BoxStyled = styled.div<BoxProps>`
  display: inline-block;
  padding: 10px;
  box-shadow: ${props => shadow(props.shadow ? props.shadow : 'none')};
`;
