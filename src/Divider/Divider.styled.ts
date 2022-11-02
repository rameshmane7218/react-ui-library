import styled from 'styled-components';
import { HrProps } from './Divider';

export const StyledHr = styled.hr<HrProps>`
  border-width: 0 0 1px;
  border-color: ${({ colorScheme }) => colorScheme || '#CBD5E0'};
  border-style: ${({ variant }) => variant};
  width: ${({ width }) => {
    if (typeof width === 'number') {
      return `${width}px`;
    } else {
      return width;
    }
  }};
`;
