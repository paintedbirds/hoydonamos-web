import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { string, object } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

import { Form } from 'features/common';

const DonationRequestForm = ({ onSubmit, isLoading }) => {
  const schema = useMemo(
    () =>
      object().shape({
        reason: string().required('Campo requerido'),
      }),
    []
  );

  const methods = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = onSubmit(methods.setError);

  return (
    <Form onSubmit={onSubmitHandler} methods={methods}>
      <Form.Textarea
        name="reason"
        label="Cuentanos porque quieres ponerte en contacto"
        placeholder="Dejanos tu razón aquí"
      />
      <Form.Button disabled={isLoading}>
        {isLoading ? 'Cargando...' : 'Enviar solicitud'}
      </Form.Button>
    </Form>
  );
};

DonationRequestForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export { DonationRequestForm };
