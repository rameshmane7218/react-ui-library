import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { BoxStyled } from '../Box/Box.styled';
export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'outline' | 'none';
}

export const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { children, shadow = 'none', ...rest } = props;

  return (
    <BoxStyled ref={ref} shadow={shadow} {...rest}>
      {children}
    </BoxStyled>
  );
});
