import { Center, Heading, Flex } from '@chakra-ui/react';
import { FaExclamationTriangle } from 'react-icons/fa';
import React from 'react';

const Page404: React.FC = () => {
  return (
    <Center h='80%'>
      <Flex direction='column' align='center'>
        <FaExclamationTriangle size={96} />
        <Heading>Pagina não encontrada</Heading>
      </Flex>
    </Center>
  );
};

export default Page404;
