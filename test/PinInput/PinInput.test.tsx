import React from 'react';
import { render } from '@testing-library/react';
import { PinInput } from '../../src';
describe('PinInput Component', () => {
  it('should render PinInput component without crashing', () => {
    const { asFragment } = render(<PinInput limitPerBox={1} length={4} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should have correct default value', () => {
    const { asFragment } = render(
      <PinInput limitPerBox={2} length={4} defaultValue={'12345678'} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
