import { Box, Flex, useBoolean } from '@chakra-ui/react';
import { attendance, client, pet } from 'src/services';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Input } from 'src/components';
import { useTitle } from 'src/hooks';
import { useFormik } from 'formik';
import { format } from 'date-fns';
import { Loading } from 'src/pages';

const Details: React.FC = () => {
  const [isLoading, turn] = useBoolean(true);
  useTitle('Detalhes de Serviço');
  const params = useParams();

  const formik = useFormik({
    initialValues: {
      name: '',
      details: '',
      date: new Date(),
      value: '',
      client: '',
      pet: '',
    },
    onSubmit() {},
  });

  useEffect(() => {
    const init = async () => {
      const [pets, clients, atndnc] = await Promise.all([
        pet.index(),
        client.index(),
        attendance.findById(Number(params.id)),
      ]);

      const [currPet] = pets.filter(p => Number(p.id) === atndnc.petId);
      const [user] = clients.filter(c => c.id === currPet.clientId);

      formik.setValues({
        date: new Date(atndnc.date),
        details: atndnc.details,
        value: atndnc.value,
        name: atndnc.name,
        pet: currPet.name,
        client: user.name,
      });
    };

    init().then(turn.off);
  }, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      {isLoading && <Loading />}
      <Flex gridGap={3} direction='column'>
        <Box>
          <Flex gridGap={4}>
            <Input name='name' label='Nome' value={formik.values.name} />
            <Input label='Valor' name='value' value={formik.values.value} />
          </Flex>
          <Input
            isReadOnly
            name='details'
            label='Detalhes'
            value={formik.values.details}
          />
          <Input
            type='date'
            label='Data'
            name='date'
            value={format(formik.values.date, 'yyyy-MM-dd')}
          />
          <Input name='client' label='Cliente' value={formik.values.client} />
          <Input name='pet' label='Pet' value={formik.values.pet} />
        </Box>
      </Flex>
    </form>
  );
};

export default Details;
