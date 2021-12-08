import { Flex, Container, Heading, Button } from '@chakra-ui/react';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { LoginResponse, persistentStorage } from 'src/services';
import Menu from './components/Menu';
import { LayoutProps } from './types';

export const STORAGE_KEY = 'user';

const INITIAL_STATE: LayoutProps = {
  setTitle: () => {},
  setGlobal: () => {},
  global: null,
};

export const LayoutContext = createContext(INITIAL_STATE);
LayoutContext.displayName = 'LayoutContext';

const Layout: React.FC = () => {
  const [title, setTitle] = useState<ReactNode>('');
  const [global, setGlobal] = useState<LoginResponse | null>(null);

  useEffect(() => {
    const userLogged = persistentStorage.getItem<LoginResponse>(STORAGE_KEY);

    if (userLogged) setGlobal(userLogged);
  }, []);

  useEffect(() => {
    persistentStorage.setItem(STORAGE_KEY, global);
  }, [global]);

  const HandleLogin = () => {
    if (!global)
      return (
        <Flex gridGap={5}>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Cadastrar</Link>
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
    <LayoutContext.Provider value={{ setTitle, setGlobal, global }}>
      <Container
        // bg='#efefef'
        h='full'
        maxW='none'
        px='0'
        overflowY='auto'>
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
    </LayoutContext.Provider>
  );
};

export default Layout;
