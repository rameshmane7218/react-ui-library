import React, {
  ChangeEvent,
  HTMLAttributes,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { InputField } from './InputField';
import { StyledPinInput } from './PinInput.styled';

export interface PinInputProps extends HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  defaultValue?: string;
  length?: number;
  limitPerBox?: number;
  setPin?: Function;
}
/** The PinInput component is similar to the Input component, but is optimized for entering sequences of digits quickly.
 *  ```import {PinInput} from '@rameshmane7218/react-ui-library'
 * ```
 *
 */
export const PinInput = ({
  defaultValue,
  placeholder = '〇',
  length = 4,
  limitPerBox = 1,
  setPin = () => {},
}: PinInputProps) => {
  const [pinArray, setPinArray] = useState<string[]>(
    new Array(length).fill('')
  );
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement[]>([]);
  const checkIsSuccessful = (arr: string[]) => {
    let count = 0;
    for (let i = 0; i < length; i++) {
      if (arr[i].length === limitPerBox) {
        count++;
      }
    }
    if (count === length) {
      setIsSuccessful(true);
    } else {
      setIsSuccessful(false);
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value = '' } = e.target;
    pinArray[index] = value;
    setPinArray([...pinArray]);
    if (value.length >= limitPerBox && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    checkIsSuccessful(pinArray);
  };
  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.code === 'Backspace') {
      if (!pinArray[index] && index > 0) {
        inputRef.current[index - 1].focus();
      }
    }
  };
  const handleOnPaste = (input: string) => {
    let totalLength = limitPerBox * length;
    let newInput = input.slice(0, totalLength);

    for (let i = 0; i < length; i++) {
      pinArray[i] = newInput.slice(
        i * limitPerBox,
        i * limitPerBox + limitPerBox
      );
    }
    setPinArray([...pinArray]);
  };
  useEffect(() => {
    let pin = pinArray.join('');
    setPin(() => pin);
  }, [setPin, pinArray]);

  useEffect(() => {
    if (defaultValue?.length) {
      let temp = defaultValue.split('');
      let newArray = [];
      for (let i = 0; i < length; i++) {
        newArray[i] = temp.splice(0, limitPerBox).join('');
      }
      setPinArray([...newArray]);
    }
  }, []);
  return (
    <StyledPinInput
      onPaste={(e) => {
        let input = e.clipboardData.getData('Text');
        handleOnPaste(input);
      }}
    >
      {pinArray.map((val, index) => (
        <InputField
          key={index}
          value={val}
          ref={(element) => {
            if (element) {
              inputRef.current[index] = element;
            }
          }}
          placeholder={placeholder}
          limitPerBox={limitPerBox}
          isSuccessful={isSuccessful}
          onChange={(e) => handleChange(e, index)}
          onKeyUp={(e) => handleKeyUp(e, index)}
        />
      ))}
    </StyledPinInput>
  );
};
