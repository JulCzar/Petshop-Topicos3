import { InputGroup, Input as CInput, Text, Flex, Box } from '@chakra-ui/react';
import React from 'react';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <Box w='full'>
      {label && (
        <Text as='label' htmlFor={name}>
          {label}
        </Text>
      )}
      <InputGroup as={Flex} direction='column'>
        <CInput name={name} id={name} {...rest} />
      </InputGroup>
    </Box>
  );
};

export default Input;
