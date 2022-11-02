import React from 'react';
import { render } from '@testing-library/react';
import { Box, Flex } from '../../src';

describe('Flex Component', () => {
  it('should render Flex component without crashing', () => {
    render(
      <Flex>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
        reiciendis mollitia quas deserunt enim accusamus! Minima dolorum vero
        possimus magni mollitia quam repudiandae totam, amet nisi nobis eum
        consectetur nam!
      </Flex>
    );
  });
  it('render all flex direction', () => {
    const { asFragment } = render(
      <Flex flexDirection="column">
        <Flex flexDirection="row" gap={'30px'}>
          <Box>box1</Box>
          <Box>box2</Box>
        </Flex>
        <Flex flexDirection="row-reverse">
          <Box>box1</Box>
          <Box>box2</Box>
        </Flex>
        <Flex flexDirection="column">
          <Box>box1</Box>
          <Box>box2</Box>
        </Flex>
        <Flex flexDirection="column-reverse">
          <Box>box1</Box>
          <Box>box2</Box>
        </Flex>
      </Flex>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('render justifyContent properly', () => {
    const { asFragment } = render(
      <Flex flexDirection="column">
        <Flex justifyContent="space-between">
          <Box>box1</Box>
          <Box>box2</Box>
        </Flex>
        <Flex justifyContent="space-around">
          <Box>box1</Box>
          <Box>box2</Box>
        </Flex>
        <Flex justifyContent="space-evenly">
          <Box>box1</Box>
          <Box>box2</Box>
        </Flex>
        <Flex justifyContent="start">
          <Box>box1</Box>
          <Box>box2</Box>
        </Flex>
        <Flex justifyContent="end">
          <Box>box1</Box>
          <Box>box2</Box>
        </Flex>
      </Flex>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
