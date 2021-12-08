import {
  Box,
  Button,
  Container,
  Flex,
  useBoolean,
  useToast,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, PasswordInput } from 'src/components';
import { useLayoutProps, useTitle } from 'src/hooks';
import { Loading } from 'src/pages';
import { login } from 'src/services';

const Login: React.FC = () => {
  const { setGlobal: setUser, global: user } = useLayoutProps();
  const [isLoading, loading] = useBoolean(false);
  const navigate = useNavigate();
  const toast = useToast();
  useTitle('Login');

  useEffect(() => {
    if (user) navigate('/');
  }, [user]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit(data) {
      loading.on();
      login(data)
        .then(data => setUser(data))
        .catch(() =>
          toast({
            status: 'error',
            title: 'Houve um problema',
          })
        )
        .finally(loading.off);
    },
  });

  return (
    <Container maxW='md'>
      <form onSubmit={formik.handleSubmit}>
        {isLoading && <Loading />}
        <Flex gridGap={3} direction='column'>
          <Box>
            <Input onChange={formik.handleChange} label='email' name='email' />
            <PasswordInput
              onChange={formik.handleChange}
              label='senha'
              name='password'
            />
          </Box>
          <Flex w='100%' justify='flex-end'>
            <Button type='submit'>Entrar</Button>
          </Flex>
        </Flex>
      </form>
    </Container>
  );
};

export default Login;
