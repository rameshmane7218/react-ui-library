import React from 'react';
import { render } from '@testing-library/react';
import { Option, Select } from '../../src';

describe('Select Component', () => {
  it('should render without crashing', () => {
    render(<Select placeholder="choose option"/>);
  });
  it('render placeholder option', () => {
    const { container } = render(<Select placeholder="choose option"/>);
    const option = container.querySelector("option[value='']") as HTMLElement;

    expect(option).toBeInTheDocument();
    expect(option.textContent).toEqual('choose option');
  });
  it('should render all variants', () => {
    const { asFragment } = render(
      <>
        <Select placeholder="outline" variant="outline" />
        <Select placeholder="solid" variant="solid" />
        <Select placeholder="underline" variant="underline" />
        <Select placeholder="none" variant="none" />
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be disabled if we pass disabled to Select', () => {
    const { container } = render(
      <Select placeholder="choose option" disabled={true}>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
      </Select>
    );
    const select = container.querySelector('select') as HTMLElement;
    expect(select).toBeDisabled();
  });
});
