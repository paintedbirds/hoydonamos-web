import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { string, object } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

import { Form } from 'features/common';

const SignUpForm = ({ onSubmit, isLoading }) => {
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

  const onSubmitHandler = onSubmit(methods.handleSubmit);

  return (
    <Form onSubmit={onSubmitHandler} methods={methods}>
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

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export { SignUpForm };
