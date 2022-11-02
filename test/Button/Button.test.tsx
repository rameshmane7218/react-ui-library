import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Button } from '../../src';

describe('Button', () => {
  it('render without crashing', () => {
    const { getByText } = render(<Button>button</Button>);
    expect(getByText('button')).toBeInTheDocument();
  });
  it('matches snapshot', () => {
    const { asFragment } = render(<Button variant="primary">button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should disabled button', () => {
    const { getByTestId } = render(
      <Button data-testid="disabled" disabled={true}>
        Button
      </Button>
    );
    expect(getByTestId('disabled')).toBeDisabled();
  });
  it('should render all variant', () => {
    const { asFragment } = render(
      <>
        <Button variant="primary">primary</Button>
        <Button variant="secondary">secondary</Button>
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render all sizes', () => {
    const { asFragment } = render(
      <>
        <Button size="xs">xs</Button>
        <Button size="sm">sm</Button>
        <Button size="md">md</Button>
        <Button size="lg">lg</Button>
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('onClick event fire', () => {
    let count = 0;

    const { getByTestId } = render(
      <Button data-testid="click" onClick={() => (count = 1)}>
        increment
      </Button>
    );
    fireEvent.click(getByTestId('click'));
    expect(count).toBe(1);
  });
  it('onClick event fire on disabled button', () => {
    let count = 0;

    const { getByTestId } = render(
      <Button
        data-testid="click-disabled"
        disabled={true}
        onClick={() => (count = 1)}
      >
        increment
      </Button>
    );
    fireEvent.click(getByTestId('click-disabled'));
    expect(count).toBe(0);
  });
});
