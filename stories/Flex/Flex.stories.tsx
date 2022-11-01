import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box } from '../../src/Box';
import { Flex, FlexProps } from '../../src/Flex';

const meta: Meta = {
  title: 'flex',
  component: Flex,
  argTypes: {
    flexDirection: {
      defaultValue: 'row',
    },
    gap: {
      defaultValue: '10px',
    },
    width: {
      defaultValue: '99%',
    },
  },
};

export default meta;

const Template: Story<FlexProps> = args => (
  <Flex {...args}>
    <Box shadow="outline" rounded="5px">
      Box1
    </Box>
    <Box shadow="outline" rounded="5px">
      Box2
    </Box>
  </Flex>
);

export const Default = Template.bind({});

const Template2: Story<FlexProps[]> = args => (
  <Flex flexDirection="column" gap={'5px'} width="100%">
    <p>justifyContent: space-between</p>
    <Flex {...args[0]}>
      <Box shadow="outline" rounded="5px">
        Box1
      </Box>
      <Box shadow="outline" rounded="5px">
        Box2
      </Box>
    </Flex>
    <p>justifyContent: space-around</p>
    <Flex {...args[1]}>
      <Box shadow="outline" rounded="5px">
        Box1
      </Box>
      <Box shadow="outline" rounded="5px">
        Box2
      </Box>
    </Flex>
    <p>justifyContent: space-evenly</p>
    <Flex {...args[2]}>
      <Box shadow="outline" rounded="5px">
        Box1
      </Box>
      <Box shadow="outline" rounded="5px">
        Box2
      </Box>
    </Flex>
    <p>justifyContent: start</p>
    <Flex {...args[3]}>
      <Box shadow="sm" rounded="5px">
        Box1
      </Box>
      <Box shadow="sm" rounded="5px">
        Box2
      </Box>
    </Flex>
    <p>justifyContent: end</p>
    <Flex {...args[4]}>
      <Box shadow="sm" rounded="5px">
        Box1
      </Box>
      <Box shadow="sm" rounded="5px">
        Box2
      </Box>
    </Flex>
  </Flex>
);

export const JustifyContent = Template2.bind({});

JustifyContent.args = [
  {
    justifyContent: 'space-between',
  },
  {
    justifyContent: 'space-around',
  },
  {
    justifyContent: 'space-evenly',
  },
  {
    justifyContent: 'start',
  },
  {
    justifyContent: 'end',
  },
];
