import {
  InputGroup,
  Textarea as CTextArea,
  Text,
  Flex,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import { TextareaProps } from './types';

const TextArea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <Box w='full'>
      {label && (
        <Text as='label' htmlFor={name}>
          {label}
        </Text>
      )}
      <InputGroup as={Flex} direction='column'>
        <CTextArea name={name} id={name} {...rest} />
      </InputGroup>
    </Box>
  );
};

export default TextArea;
