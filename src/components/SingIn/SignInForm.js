import { useCallback } from 'react';

import Form from 'components/Form';

const SignInForm = () => {
  const onSubmit = useCallback(async (values) => console.log(values), []);

  return (
    <Form onSubmit={onSubmit} options={{}}>
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
      <Form.Button>Iniciar sesión</Form.Button>
    </Form>
  );
};

export default SignInForm;
