import { Button, Flex, useToast } from '@chakra-ui/react';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router';
import { Input, InputMask } from 'src/components';
import { useTitle } from 'src/hooks';
import { client } from 'src/services';

const Register: React.FC = () => {
  useTitle('Cadastro de Cliente');
  const navigate = useNavigate();
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      birthDate: new Date(),
      rg: '',
      cpf: '',
    },
    onSubmit(data) {
      client
        .create({
          ...data,
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
        <Flex direction='column' gridGap={4}>
          <Flex gridGap={4}>
            <Input onChange={formik.handleChange} label='Nome' name='name' />
            <Input onChange={formik.handleChange} label='Email' name='email' />
          </Flex>
          <Input
            onChange={formik.handleChange}
            label='Data de Nascimento'
            name='birthDate'
            type='date'
          />
          <Flex gridGap={4}>
            <Input onChange={formik.handleChange} label='RG' name='rg' />
            <InputMask
              onChange={formik.handleChange}
              mask='999.999.999-99'
              label='CPF'
              name='cpf'
            />
          </Flex>
        </Flex>
        <Flex w='100%' justify='flex-end'>
          <Button type='submit'>Cadastrar</Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default Register;
