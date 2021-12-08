import { Box, Button, Flex, useBoolean } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Table } from 'src/components';
import { Loading } from 'src/pages';
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
      <Flex w='full' justify='flex-end' mb='4'>
        <Button onClick={navigateTo('/client/new')}>Criar Novo</Button>
      </Flex>

      <Box>
        {isLoading && <Loading />}
        <Table
          header={[{ label: 'Nome' }, { label: 'Email' }]}
          body={{
            onRowClick: row =>
              navigate(
                `/client/${clients.filter(c => c.name === row[0].item)[0].id}`
              ),
            data: clients.map(c => [{ item: c.name }, { item: c.email }]),
          }}
        />
      </Box>
    </Box>
  );
};

export default Clients;
