import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';

interface MenuProps {
  user: User | null;
}

const Menu: React.FC<MenuProps> = ({ user }) => {
  if (!user) return null;

  return (
    <Flex gridGap={3}>
      <Link to='/attendances'>Consultas</Link>
      <Link to='/client'>Clientes</Link>
    </Flex>
  );
};

export default Menu;
