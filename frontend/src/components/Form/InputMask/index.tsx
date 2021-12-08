import { InputGroup, Input as CInput, Text, Flex, Box } from '@chakra-ui/react';
import React from 'react';
import InputMaskC from 'react-input-mask';
import { InputProps } from './types';

const InputMask: React.FC<InputProps> = ({ label, name, mask, ...rest }) => {
  return (
    <Box w='full'>
      {label && (
        <Text as='label' htmlFor={name}>
          {label}
        </Text>
      )}
      <InputGroup as={Flex} direction='column'>
        <CInput as={InputMaskC} mask={mask} name={name} id={name} {...rest} />
      </InputGroup>
    </Box>
  );
};

export default InputMask;
