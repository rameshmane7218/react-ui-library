import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps, Flex } from '../../src';
import { MdDownloading } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'Button',
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});

export const Variant = () => {
  return (
    <Flex gap={20}>
      <Button variant="primary">primary</Button>
      <Button variant="secondary">secondary</Button>
    </Flex>
  );
};
export const ButtonSize = () => {
  return (
    <Flex gap={20}>
      <Button variant="primary" size="xs">
        Button
      </Button>
      <Button variant="primary" size="sm">
        Button
      </Button>
      <Button variant="primary" size="md">
        Button
      </Button>
      <Button variant="primary" size="lg">
        Button
      </Button>
    </Flex>
  );
};

ButtonSize.storyName = 'Button Sizes';

export const ButtonIcons = () => {
  return (
    <Flex gap={20}>
      <Button leftIcon={<FaWhatsapp />}>WhatsApp</Button>
      <Button rightIcon={<MdDownloading />}>Download</Button>
    </Flex>
  );
};
