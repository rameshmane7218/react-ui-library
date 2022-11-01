import { rem } from 'polished';

/* units */
const sizeUnit: number = 8;

/* sizes */
const createSize = (size: number) => rem(`${size * sizeUnit}px`);

const sizes = {
  xs: createSize(1.5),
  sm: createSize(1.8),
  md: createSize(2),
  lg: createSize(2.5),
};
type sizeProps = 'xs' | 'sm' | 'md' | 'lg';

export const size = (size: sizeProps) => {
  if (typeof size !== undefined) {
    return sizes[size];
  } else {
    return sizes['md'];
  }
};

/**
 * Padding
 * @params string 'xs' | 'sm' | 'md' | 'lg';
 * @return string
 *
 */

const paddings = {
  xs: '3px 5px',
  sm: '4px 8px',
  md: '5px 10px',
  lg: '6px 15px',
};

export const padding = (size: sizeProps) => {
  console.log('size', size);
  if (typeof size !== undefined) {
    return paddings[size];
  } else {
    return paddings['md'];
  }
};
