/**
 * Border radius
 * @params   'sm' | 'md' | 'lg' | 'none' | string
 * @return string
 *
 */

const roundeds = {
  sm: '5px',
  md: '10px',
  lg: '16px',
  none: 'none',
};

type roundedProps = 'sm' | 'md' | 'lg' | 'none';

export const borderRadius = (rounded: roundedProps) => {
  if (typeof rounded !== undefined) {
    return roundeds[rounded];
  } else {
    return roundeds['sm'];
  }
};
