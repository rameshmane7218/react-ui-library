import styled from 'styled-components';
import { FlexProps } from './Flex';

export const FlexStyled = styled.div<FlexProps>`
  display: flex;
  padding: ${({ padding }) => {
    if (typeof padding === 'number') {
      return `${padding}px`;
    } else {
      return padding;
    }
  }};
  border: ${({ border }) => border};
  width: ${({ width }) => width};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => {
    if (typeof gap === 'number') {
      return `${gap}px`;
    } else {
      return gap;
    }
  }};
  border-radius: ${({ rounded }) => {
    if (typeof rounded === 'number') {
      return `${rounded}px`;
    } else {
      return rounded;
    }
  }};
`;
