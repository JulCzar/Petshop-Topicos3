import { Box, Button, Flex, Spinner, useBoolean } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { client } from 'src/services';
import { ClientDto } from 'src/services/client';

const Clients: React.FC = () => {
  const [clients, setClients] = useState<ClientDto[]>([]);
  const [isLoading, turn] = useBoolean(true);
  const navigate = useNavigate();

  useEffect(() => {
    client
      .index()
      .then(clients => setClients(clients))
      .then(turn.off);
  }, []);

  const navigateTo =
    (route: string, ...rest: any[]) =>
    () =>
      navigate(route, ...rest);

  return (
    <Box>
      <Button onClick={navigateTo('/client/new')}>Criar Novo</Button>

      <Box>
        {isLoading && <Spinner />}
        {clients.map(i => (
          <Flex
            key={i.cpf + i.id}
            onClick={navigateTo(`/client/${i.id}`)}
            gridGap={4}>
            <Box>{i.name}</Box>
            <Box>{i.email}</Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default Clients;
