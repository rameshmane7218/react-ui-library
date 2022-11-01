import React, { HTMLAttributes } from 'react';
import { StyledHr } from './Divider.styled';
export interface HrProps extends HTMLAttributes<HTMLHRElement> {
  colorScheme?: string;
  width?: string | number;
  variant?: 'solid' | 'dashed';
}
export const Divider = ({
  colorScheme,
  width = '100%',
  variant = 'solid',
  ...rest
}: HrProps) => {
  return (
    <StyledHr
      colorScheme={colorScheme}
      width={width}
      variant={variant}
      {...rest}
    />
  );
};
