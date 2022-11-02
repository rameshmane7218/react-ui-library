import React, { Children } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Select,
  SelectProps,
  Option,
  OptionProps,
  FlexProps,
  Flex,
} from '../../src';

const meta: Meta = {
  title: 'Select',
  component: Select,
  argTypes: {
    placeholder: {
      defaultValue: 'Select option',
    },
    width: {
      defaultValue: '300px',
    },
  },
};

export default meta;

const Template: Story<SelectProps> = ({ children, ...rest }) => (
  <Select {...rest}>
    <Option value="1">one</Option>
    <Option value="2">two</Option>
  </Select>
);

export const Default = Template.bind({});
/**
 * all variation
 */
const Template2: Story<SelectProps[]> = args => (
  <Flex flexDirection="column" gap={'10px'}>
    <Select {...args[0]} />
    <Select {...args[1]} />
    <Select {...args[2]} />
    <Select {...args[3]} />
  </Flex>
);

export const DifferentVariations = Template2.bind({});

DifferentVariations.args = [
  {
    placeholder: 'Outline',
    variant: 'outline',
    width: '300px',
  },
  {
    placeholder: 'Solid',
    variant: 'solid',
    width: '300px',
  },
  {
    placeholder: 'Underline',
    variant: 'underline',
    width: '300px',
  },
  {
    placeholder: 'None',
    variant: 'none',
    width: '300px',
  },
];
