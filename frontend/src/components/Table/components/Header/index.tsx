import { Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

export interface HeaderItem {
  label: string;
}

interface HeaderProps {
  data: HeaderItem[];
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  const headerID = React.useMemo(() => Math.round(Math.random() * 100_000), []);

  return (
    <Thead>
      <Tr
        fontSize='md'
        bg='gray.100'
        fontWeight='600'
        color='gray.900'
        borderColor='gray.600'>
        {data.map(({ label }, i) => (
          <Th px='4' py='3' key={`header-${headerID}-item-${i}-label-${label}`}>
            {label}
          </Th>
        ))}
      </Tr>
    </Thead>
  );
};

export default Header;
