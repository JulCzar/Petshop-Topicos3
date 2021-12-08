import {
  InputGroup,
  Input as CInput,
  Text,
  Flex,
  Button,
  InputRightElement,
  useBoolean,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import { InputProps } from './types';

const PasswordInput: React.FC<InputProps> = ({ label, name, ...rest }) => {
  const [show, turn] = useBoolean();

  return (
    <Box w='full'>
      {label && (
        <Text as='label' htmlFor={name}>
          {label}
        </Text>
      )}
      <InputGroup>
        <CInput
          name={name}
          id={name}
          type={show ? 'text' : 'password'}
          {...rest}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={turn.toggle}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default PasswordInput;
