import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { FlexStyled } from '../Flex/Flex.styled';
export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /**
   * Flex direction
   */
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  gap?: string | number;
  width?: string;
  border?: string;
  justifyContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'left'
    | 'right'
    | 'normal';
  alignItems?:
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'normal';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  rounded?: string | number;
  padding?: string | number;
}

/**
 * This is Flexbox
 */

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      children,
      width = '100%',
      flexDirection = 'row',
      gap = 'none',
      justifyContent = 'start',
      alignItems = 'center',
      flexWrap = 'nowrap',
      border = 'none',
      rounded = 'none',
      padding = 'none',
      ...rest
    },
    ref
  ) => {
    return (
      <FlexStyled
        ref={ref}
        width={width}
        flexDirection={flexDirection}
        gap={gap}
        justifyContent={justifyContent}
        alignItems={alignItems}
        flexWrap={flexWrap}
        border={border}
        rounded={rounded}
        padding={padding}
        {...rest}
      >
        {children}
      </FlexStyled>
    );
  }
);
