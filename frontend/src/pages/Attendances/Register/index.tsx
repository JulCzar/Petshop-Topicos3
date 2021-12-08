import { Box, Button, Flex, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ClientDto } from 'src/services/client';
import { Input, Select } from 'src/components';
import { attendance, client, pet } from 'src/services';
import { PetDto } from 'src/services/pet';
import { useTitle } from 'src/hooks';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';

const RegisterService: React.FC = () => {
  const [clients, setClients] = useState<ClientDto[]>([]);
  const [pets, setPets] = useState<PetDto[]>([]);
  const navigate = useNavigate();
  const toast = useToast();
  useTitle('Cadastro de Serviço');

  const formik = useFormik({
    initialValues: {
      name: '',
      details: '',
      value: 0,
      pet: {
        value: -1,
      },
      client: {
        value: -1,
      },
    },
    onSubmit(data) {
      const { name, details, pet, value } = data;

      attendance.create({ name, details, value, petId: pet.value }).catch(e => {
        if (e.request.response.includes('System.InvalidOperationException')) {
          toast({
            status: 'success',
            title: 'Sucesso!',
            description: 'Cliente Cadastrado',
          });
          navigate('/client');
        } else {
          toast({
            status: 'error',
            title: 'Falha',
            description: 'Erro ao cadastrar!',
          });
        }
      });
    },
  });

  useEffect(() => {
    client.index().then(setClients);
    pet.index().then(setPets);
  }, []);

  const clientsOptions = clients.map(c => ({
    value: c.id || -1,
    label: c.name,
  }));

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex gridGap={3} direction='column'>
        <Box>
          <Input label='Nome' name='name' onChange={formik.handleChange} />
          <Input
            label='Detalhes'
            name='details'
            onChange={formik.handleChange}
          />
          <Input
            type='number'
            label='Valor'
            name='value'
            onChange={formik.handleChange}
          />
          <Select
            name='client'
            label='Cliente'
            options={clientsOptions}
            onChange={c => {
              formik.setFieldValue('pet', { value: NaN });
              formik.setFieldValue('client', c);
            }}
          />
          <Select
            name='pet'
            label='Pet'
            value={formik.values.pet}
            options={pets
              .filter(p => p.clientId === formik.values.client.value)
              .map(p => ({ value: p.id, label: p.name }))}
            onChange={p => formik.setFieldValue('pet', p)}
          />
        </Box>
        <Flex w='100%' justify='flex-end'>
          <Button type='submit'>Cadastrar</Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default RegisterService;
