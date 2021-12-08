import { Flex, Container, Heading, Button } from '@chakra-ui/react';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { LoginResponse, persistentStorage } from 'src/services';
import Menu from './components/Menu';
import { LayoutProps } from './types';

export const STORAGE_KEY = 'user';

const INITIAL_STATE: LayoutProps = {
  setGlobal: () => {},
  setTitle: () => {},
  global: null,
  title: '',
};

export const LayoutContext = createContext(INITIAL_STATE);
LayoutContext.displayName = 'LayoutContext';

const LayoutProvider: React.FC = ({ children }) => {
  const [title, setTitle] = useState<string>('');
  const [global, setGlobal] = useState<LoginResponse | null>(null);

  useEffect(() => {
    const userLogged = persistentStorage.getItem<LoginResponse>(STORAGE_KEY);

    if (userLogged) setGlobal(userLogged);
  }, []);

  useEffect(() => {
    persistentStorage.setItem(STORAGE_KEY, global);
  }, [global]);

  return (
    <LayoutContext.Provider value={{ title, setTitle, setGlobal, global }}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
