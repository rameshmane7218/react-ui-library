import React from 'react';
import { render } from '@testing-library/react';
import { Box } from '../../src';

describe('Box Component', () => {
  it('should render without crashing', () => {
    render(
      <Box>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Box>
    );
  });
  it('should render all shadows variant component', () => {
    const { asFragment } = render(
      <>
        <Box shadow="xs">xs</Box>
        <Box shadow="sm">sm</Box>
        <Box shadow="md">md</Box>
        <Box shadow="lg">lg</Box>
        <Box shadow="outline">outline</Box>
        <Box shadow="none">none</Box>
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should have correctly css properties', () => {
    const { getByTestId, asFragment } = render(
      <Box
        data-testid="cssBox"
        padding={'10px'}
        width={'200px'}
        border={'1px solid red'}
        rounded={'5px'}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
        quidem, beatae blanditiis voluptatum repellendus culpa repudiandae!
        Harum impedit nesciunt quo iusto eos, ipsum possimus officia, sunt
        voluptatem aliquid, eligendi illo!
      </Box>
    );
    expect(getByTestId('cssBox')).toHaveStyle({
      width: '200px',
      border: '1px solid red',
      borderRadius: '5px',
      padding: '10px',
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
