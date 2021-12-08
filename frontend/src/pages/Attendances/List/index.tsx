import { Box, Button, Flex, useBoolean } from '@chakra-ui/react';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Table } from 'src/components';
import { useTitle } from 'src/hooks';
import { Loading } from 'src/pages';
import { attendance } from 'src/services';
import { AttendanceDto } from 'src/services/attendance';

const List: React.FC = () => {
  const [attendances, setAttendances] = useState<AttendanceDto[]>([]);
  const [isLoading, turn] = useBoolean(true);
  useTitle('Lista de Consultas');
  const navigate = useNavigate();

  useEffect(() => {
    attendance.index().then(setAttendances).then(turn.off);
  }, []);

  return (
    <Box>
      {isLoading && <Loading />}
      <Flex w='full' justify='flex-end' mb={4}>
        <Button onClick={() => navigate('/attendances/new')}>
          Agendar Consulta
        </Button>
      </Flex>
      <Table
        header={[{ label: 'Nome' }, { label: 'Data' }]}
        body={{
          onRowClick: row =>
            navigate(
              `/attendances/${
                attendances.filter(c => c.name === row[0].item)[0].id
              }`
            ),
          data: attendances.map(c => [
            { item: c.name },
            { item: format(new Date(c.date), 'dd/MM/yyyy') },
          ]),
        }}
      />
    </Box>
  );
};

export default List;
