import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { string, object } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

import { Form } from 'features/common';

const SignInForm = ({ onSubmit, isLoading }) => {
  const schema = useMemo(
    () =>
      object().shape({
        email: string().email('Email invalido').required('Campo requerido'),
        password: string().required('Campo requerido'),
      }),
    []
  );

  const methods = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = onSubmit(methods.setError);

  return (
    <Form onSubmit={onSubmitHandler} methods={methods}>
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
        {isLoading ? 'Cargando...' : 'Iniciar sesión'}
      </Form.Button>
    </Form>
  );
};

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export { SignInForm };
