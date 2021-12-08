import { Box, Button, Flex, useToast } from '@chakra-ui/react';
import { Input, TextArea } from 'src/components';
import { useNavigate, useParams } from 'react-router-dom';
import { useTitle } from 'src/hooks';
import { useFormik } from 'formik';
import { pet } from 'src/services';
import React from 'react';

const RegisterPet: React.FC = () => {
  const navigate = useNavigate();
  useTitle('Cadastro de Pet');
  const params = useParams();
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      name: '',
      breed: '',
      birthDate: '',
      weight: 0,
      observations: '',
    },
    onSubmit(data) {
      pet
        .create({
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

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex gridGap={3} direction='column'>
        <Box>
          <Flex gridGap={4}>
            <Input onChange={formik.handleChange} label='Nome' name='name' />
            <Input onChange={formik.handleChange} label='Raça' name='breed' />
          </Flex>
          <Input
            onChange={formik.handleChange}
            type='date'
            label='Data de Nascimento'
            name='birthDate'
          />
          <Input onChange={formik.handleChange} label='Peso' name='weight' />
          <TextArea
            onChange={formik.handleChange}
            label='Observações'
            name='observations'
          />
        </Box>
        <Flex w='100%' justify='flex-end'>
          <Button type='submit'>Adicionar</Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default RegisterPet;
