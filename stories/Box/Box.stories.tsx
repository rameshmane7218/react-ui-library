import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box, BoxProps } from '../../src/Box';
import { Flex } from '../../src/Flex';

const meta: Meta = {
  title: 'Box',
  component: Box,
  argTypes: {
    children: {
      defaultValue: 'Box',
    },
    shadow: {
      defaultValue: 'sm',
    },
    rounded: {
      defaultValue: '5px',
    },
    padding: {
      defaultValue: '20px',
    },
  },
};
export default meta;

const Template: Story<BoxProps> = args => <Box {...args} />;

export const Default = Template.bind({});

const Template2: Story<BoxProps[]> = args => {
  return (
    <Flex gap={'10px'} justifyContent="center">
      <Box {...args[0]} />
      <Box {...args[1]} />
      <Box {...args[2]} />
      <Box {...args[3]} />
      <Box {...args[4]} />
      <Box {...args[5]} />
    </Flex>
  );
};

export const BoxShadow = Template2.bind({});

BoxShadow.args = [
  {
    children: 'none',
    shadow: 'none',
    rounded: '5px',
    padding: 20,
  },
  {
    children: 'xs',
    shadow: 'xs',
    rounded: '5px',
    padding: 20,
  },
  {
    children: 'sm',
    shadow: 'sm',
    rounded: '5px',
    padding: 20,
  },
  {
    children: 'md',
    shadow: 'md',
    rounded: '5px',
    padding: 20,
  },
  {
    children: 'lg',
    shadow: 'lg',
    rounded: '5px',
    padding: 20,
  },
  {
    children: 'outline',
    shadow: 'outline',
    rounded: '5px',
    padding: 20,
  },
];
