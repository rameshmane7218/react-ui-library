import React, { HTMLAttributes } from 'react';
import { StyledHr } from './Divider.styled';
export interface HrProps extends HTMLAttributes<HTMLHRElement> {
  colorScheme?: string;
  width?: string | number;
  variant?: 'solid' | 'dashed' | 'dotted';
}
export const Divider = ({
  colorScheme,
  variant = 'solid',
  width = '100%',
  ...rest
}: HrProps) => {
  return (
    <StyledHr
      variant={variant}
      colorScheme={colorScheme}
      width={width}
      {...rest}
    />
  );
};
