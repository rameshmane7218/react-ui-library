import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Divider, HrProps } from '../../src/Divider';
const meta: Meta = {
  title: 'Divider',
  component: Divider,
  argTypes: {
    variant: {
      defaultValue: 'solid',
    },
  },
};

export default meta;

const Template: Story<HrProps> = args => <Divider {...args} />;

export const Default = Template.bind({});
