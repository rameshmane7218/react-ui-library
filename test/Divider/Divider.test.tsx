import React from 'react';
import { render } from '@testing-library/react';
import { Divider } from '../../src';

describe('Divider Component', () => {
  it('should render the divider component without crashing', () => {
    render(<Divider />);
  });
  it('should render all variant', () => {
    const { asFragment } = render(
      <>
        <Divider variant="solid" />
        <Divider variant="dashed" />
        <Divider variant="dotted" />
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should have correct css properties', () => {
    const { getByTestId } = render(
      <Divider data-testid="divider" width={'10px'} />
    );
    expect(getByTestId('divider')).toHaveStyle({
      width: '10px',
      borderStyle: 'solid',
    });
  });
});
