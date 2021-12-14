import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { string, object } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Form } from 'features/common';
import { handleErrors } from 'helpers/errors';
import { useSignUp } from 'hooks/mutations/auth';

const SignUpForm = () => {
  const { mutate, isLoading } = useSignUp();

  const schema = useMemo(
    () =>
      object().shape({
        name: string().required('Campo requerido'),
        email: string().email('Email invalido').required('Campo requerido'),
        password: string().required('Campo requerido'),
      }),
    []
  );

  const methods = useForm({ resolver: yupResolver(schema) });

  const onSubmit = useCallback(
    async (values) =>
      mutate(values, {
        onError: (errors) => handleErrors(errors, methods.setError),
      }),
    [mutate, methods.setError]
  );

  return (
    <Form onSubmit={onSubmit} methods={methods}>
      <Form.Input name="name" label="Nombre" placeholder="Ingresa tu nombre" />
      <Form.Input
        name="email"
        label="Email"
        placeholder="Ingresa tu email"
        type="email"
      />
      <Form.Input
        name="password"
        label="Contraseña"
        placeholder="Ingresa una contraseña"
        type="password"
        autoComplete="on"
      />
      <Form.Button disabled={isLoading}>
        {isLoading ? 'Cargando...' : 'Registrarme'}
      </Form.Button>
    </Form>
  );
};

export default SignUpForm;
