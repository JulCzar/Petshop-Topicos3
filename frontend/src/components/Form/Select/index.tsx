import RSelect, { Props as RSelectProps } from 'react-select';
import { Box, Flex, InputGroup, Text } from '@chakra-ui/react';
import React from 'react';

interface SelectProps extends RSelectProps {
  label?: string;
}

const Select: React.FC<SelectProps> = ({ label, name, ...rest }) => {
  return (
    <Box w='full'>
      {label && (
        <Text as='label' htmlFor={name}>
          {label}
        </Text>
      )}
      <InputGroup as={Flex} direction='column'>
        <RSelect name={name} id={name} {...rest} />
      </InputGroup>
    </Box>
  );
};

export default Select;
