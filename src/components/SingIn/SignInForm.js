import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { string, object } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Form from 'components/Form';
import { handleErrors } from 'helpers/errors';
import { useSignIn } from 'hooks/mutations/auth';

const SignInForm = () => {
  const { mutate, isLoading } = useSignIn();

  const schema = useMemo(
    () =>
      object().shape({
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
      <Form.Button>{isLoading ? 'Cargando...' : 'Iniciar sesión'}</Form.Button>
    </Form>
  );
};

export default SignInForm;
