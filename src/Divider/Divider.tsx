import React, { HTMLAttributes } from 'react';
import { StyledHr } from './Divider.styled';
export interface HrProps extends HTMLAttributes<HTMLHRElement> {
  colorScheme?: string;
  width?: string | number;
  variant?: 'solid' | 'dashed' | 'dotted';
}
/**
 * The `Divider` component represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.
 */
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
