import { Box, Button, useBoolean } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
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
      <Button onClick={() => navigate('/attendances/new')}>
        Agendar Consulta
      </Button>
      {attendances.map(a => (
        <Box key={a.id} onClick={() => navigate(`/attendances/${a.id}`)}>
          {a.name}
        </Box>
      ))}
    </Box>
  );
};

export default List;
