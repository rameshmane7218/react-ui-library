import React, { useState } from 'react';
import { Flex } from '../Flex';
import { PinInput } from './PinInput';

export const PinInputExample = () => {
  const [pin, setPin] = useState('');

  return (
    <Flex
      justifyContent="center"
      border="1px solid red"
      flexDirection="column"
      alignItems="center"
    >
      <h2>Pin: {pin}</h2>
      <PinInput length={4} limitPerBox={1} setPin={setPin} />
    </Flex>
  );
};
