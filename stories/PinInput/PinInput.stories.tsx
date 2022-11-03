import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Flex, InputFieldProps, PinInput, PinInputProps } from '../../src';

const meta: Meta = {
  title: 'Pin Input',
  component: PinInput,
  argTypes: {
    length: {
      defaultValue: 4,
    },
    limitPerBox: {
      defaultValue: 1,
    },
  },
};

export default meta;

const Template: Story<PinInputProps> = args => {
  const [pin, setPin] = useState('');
  return (
    <Flex flexDirection="column" alignItems="center">
      <h2>Pin: {pin}</h2>
      <PinInput {...args} setPin={setPin} />
    </Flex>
  );
};

export const Default = Template.bind({});

export const FullCode = () => {
  const [pin, setPin] = useState('');
  return (
    <Flex flexDirection="column" alignItems="center">
      <h2>Pin: {pin}</h2>
      <PinInput length={4} limitPerBox={1} setPin={setPin} />
    </Flex>
  );
};

export const DifferentPlaceholder = Template.bind({});

DifferentPlaceholder.args = {
  placeholder: '😇',
};
