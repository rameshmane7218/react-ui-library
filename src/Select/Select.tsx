import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { Option } from './Option';
import { StyledSelect } from './Select.styled';

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  children?: ReactNode;
  onChange: () => void;
  variant?: 'outline' | 'solid' | 'underline' | 'none';
  // size?: 'xs' | 'sm' | 'md' | 'lg';
  placeholder?: string | undefined;
  width?: string;
}

/**
 * `Select` component is a component that allows users pick a value from predefined options.
 * ```
 * // You need to import Select as well as Option tag/component
 * import { Select,Option } from '@rameshmane7218/react-ui-library'```
 */

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      children,
      onChange = () => {},
      variant = 'outline',
      width = 'none',
      // size = 'sm',
      placeholder,
      ...rest
    },
    ref
  ) => {
    return (
      <StyledSelect
        ref={ref}
        onChange={onChange}
        variant={variant}
        width={width}
        {...rest}
      >
        {placeholder && (
          <Option disabled selected>
            {placeholder}
          </Option>
        )}
        {children}
      </StyledSelect>
    );
  }
);
