import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { BoxStyled } from '../Box/Box.styled';
export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'outline' | 'none';
  rounded?: string | number;
  width?: string;
  border?: string;
  padding?: string | number;
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      children,
      shadow = 'none',
      width = 'none',
      border = 'none',
      padding = 'none',
      rounded = 'none',
      ...rest
    },
    ref
  ) => {
    return (
      <BoxStyled
        ref={ref}
        shadow={shadow}
        width={width}
        border={border}
        padding={padding}
        rounded={rounded}
        {...rest}
      >
        {children}
      </BoxStyled>
    );
  }
);
