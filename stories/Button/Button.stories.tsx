import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../../src/Button';

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
    <div style={{ display: 'flex', gap: '20px' }}>
      <Button variant="primary">primary</Button>
      <Button variant="secondary">secondary</Button>
    </div>
  );
};
export const ButtonSize = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
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
    </div>
  );
};

ButtonSize.storyName = 'Button Sizes';
