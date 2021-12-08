import { Box, Button, Flex, useToast } from '@chakra-ui/react';
import { Input, TextArea } from 'src/components';
import { useNavigate, useParams } from 'react-router-dom';
import { useTitle } from 'src/hooks';
import { useFormik } from 'formik';
import { pet } from 'src/services';
import React, { useEffect } from 'react';
import { format } from 'date-fns';

const RegisterPet: React.FC = () => {
  const navigate = useNavigate();
  useTitle('Cadastro de Pet');
  const params = useParams();
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      name: '',
      breed: '',
      birthDate: new Date(),
      weight: 0,
      observations: '',
    },
    onSubmit(data) {
      pet
        .update(Number(params.petId), {
          ...data,
          clientId: Number(params.id),
          birthdate: new Date(data.birthDate),
        })
        .catch(e => {
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
    pet.findById(Number(params.petId)).then(pet => {
      formik.setValues({
        ...pet,
        birthDate: new Date(pet.birthdate),
        observations: pet.observations ?? '',
      });
    });
  }, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex gridGap={3} direction='column'>
        <Box>
          <Flex gridGap={4}>
            <Input
              onChange={formik.handleChange}
              value={formik.values.name}
              label='Nome'
              name='name'
            />
            <Input
              onChange={formik.handleChange}
              value={formik.values.breed}
              label='Raça'
              name='breed'
            />
          </Flex>
          <Input
            onChange={formik.handleChange}
            type='date'
            value={format(formik.values.birthDate, 'yyyy-MM-dd')}
            label='Data de Nascimento'
            name='birthDate'
          />
          <Input
            onChange={formik.handleChange}
            value={formik.values.weight}
            label='Peso'
            name='weight'
          />
          <TextArea
            onChange={formik.handleChange}
            label='Observações'
            value={formik.values.observations}
            name='observations'
          />
        </Box>
        <Flex w='100%' justify='flex-end' gridGap={4}>
          <Button
            type='button'
            onClick={() => pet.destroy(Number(params.petId))}>
            Excluir
          </Button>
          <Button type='submit'>Salvar Dados</Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default RegisterPet;
