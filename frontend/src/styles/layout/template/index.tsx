import { Button, Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { useLayoutProps } from 'src/hooks';
import Menu from '../components/Menu';

const Template: React.FC = () => {
  const { global, setGlobal, title } = useLayoutProps();

  const HandleLogin = () => {
    if (!global)
      return (
        <Flex gridGap={5}>
          <Link to='/login'>Login</Link>
        </Flex>
      );

    return (
      <Flex gridGap={5} align='center'>
        <Heading size='lg'>Bem Vindo {global.user?.userName}</Heading>
        <Button onClick={() => setGlobal(null)}>Sair</Button>
      </Flex>
    );
  };

  return (
    <Container h='full' maxW='none' px='0' overflowY='auto'>
      <Flex direction='column' minH='full'>
        <Flex
          py='4'
          px={10}
          bg='gray.50'
          align='center'
          justify='space-between'
          borderBottomWidth='2px'
          borderBottomStyle='solid'>
          <Flex align='center' gridGap={6}>
            <Heading size='lg'>
              <Link to='/'>Home</Link>
            </Heading>
            {global?.user && <Menu user={global?.user} />}
          </Flex>
          <HandleLogin />
        </Flex>
        <Flex direction='column' flex={1} px={10}>
          <Heading py='10'>{title}</Heading>
          <Outlet />
        </Flex>
        <Flex bg='gray.50' mt='auto' py={50} px={10}>
          Julio César - Unitins 2021 - Tópicos III
        </Flex>
      </Flex>
    </Container>
  );
};

export default Template;
