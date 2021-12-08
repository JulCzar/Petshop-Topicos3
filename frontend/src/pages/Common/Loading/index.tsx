import { Center } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/react';
import React from 'react';

const Loading: React.FC = () => {
  return (
    <Center
      bg='blackAlpha.300'
      position='fixed'
      zIndex={10}
      h='100vh'
      w='100vw'
      left={0}
      top={0}>
      <Spinner size='xl' />
    </Center>
  );
};

export default Loading;
