import { Box, Button, Flex, useBoolean, useToast } from '@chakra-ui/react';
import { format } from 'date-fns';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Input, InputMask } from 'src/components';
import { useLayoutProps, useTitle } from 'src/hooks';
import { client, pet } from 'src/services';
import { ClientDto } from 'src/services/client';
import { PetDto } from 'src/services/pet';

const Details: React.FC = () => {
  const [user, setUser] = useState<ClientDto>();
  const [pets, setPets] = useState<PetDto[]>([]);
  const [isLoading, loading] = useBoolean(true);
  const { setTitle } = useLayoutProps();
  const navigate = useNavigate();
  const params = useParams();
  const toast = useToast();
  useTitle(user?.name ?? 'Usuário');

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
        .update(Number(params.id), {
          ...data,
          birthdate: new Date(data.birthDate),
        })
        .catch(e => {
          if (e.request.response.includes('System.InvalidOperationException')) {
            toast({
              status: 'success',
              title: 'Sucesso!',
              description: 'Editado',
            });
            navigate('/client');
          } else {
            toast({
              status: 'error',
              title: 'Falha',
              description: 'Erro ao Editar!',
            });
          }
        });
    },
  });

  useEffect(() => {
    client
      .findById(+(params.id ?? 0))
      .then(user => {
        formik.setValues({ ...user, birthDate: new Date(user.birthdate) });

        setUser(user);
      })
      .then(loading.off);
    pet.index().then(setPets);
  }, []);

  useEffect(() => {
    if (user) setTitle(user.name);
    return () => setTitle('');
  }, [user]);

  const navigateTo =
    (route: string, ...rest: any[]) =>
    () =>
      navigate(route, ...rest);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex gridGap={3} direction='column'>
        <Flex direction='column' gridGap={4}>
          <Flex gridGap={4}>
            <Input
              onChange={formik.handleChange}
              value={formik.values.name}
              label='Nome'
              name='name'
            />
            <Input
              onChange={formik.handleChange}
              value={formik.values.email}
              label='Email'
              name='email'
            />
          </Flex>
          <Input
            value={format(formik.values.birthDate, 'yyyy-MM-dd')}
            onChange={formik.handleChange}
            label='Data de Nascimento'
            name='birthDate'
            type='date'
          />
          <Flex gridGap={4}>
            <Input
              onChange={formik.handleChange}
              label='RG'
              name='rg'
              value={formik.values.rg}
            />
            <InputMask
              onChange={formik.handleChange}
              value={formik.values.cpf}
              mask='999.999.999-99'
              label='CPF'
              name='cpf'
            />
          </Flex>
        </Flex>
        <Flex w='100%' justify='flex-end' gridGap={4}>
          <Button onClick={navigateTo(`/client/${params.id}/pet/new`)}>
            Adicionar Pet
          </Button>
          <Button type='submit'>Salvar Alterações</Button>
        </Flex>
      </Flex>
      <Box>
        {pets
          .filter(p => p.clientId === Number(params.id))
          .map(p => (
            <Box
              onClick={navigateTo(`/client/${params.id}/pet/${p.id}`)}
              key={p.id}>
              {p.name}
            </Box>
          ))}
      </Box>
    </form>
  );
};

export default Details;
