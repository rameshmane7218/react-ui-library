/**
 * Shadow
 * @params  'xs' | 'sm' | 'md' | 'lg' | 'outline';
 * @return string
 *
 */

const shadows = {
  xs:
    'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
  sm: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  md:
    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
  lg:
    'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',
  outline: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px',
  none: 'none',
};

type shadowProps = 'xs' | 'sm' | 'md' | 'lg' | 'outline' | 'none';

export const shadow = (shadow: shadowProps) => {
  console.log('shadow', shadow);
  if (typeof shadow !== undefined) {
    return shadows[shadow];
  } else {
    return shadows['md'];
  }
};
