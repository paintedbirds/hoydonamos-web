import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { string, object } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Form from 'components/Form';

const DonationRequestForm = () => {
  const schema = useMemo(
    () =>
      object().shape({
        reason: string().required('Campo requerido'),
      }),
    []
  );

  const methods = useForm({ resolver: yupResolver(schema) });

  const onSubmit = useCallback(async (values) => console.log({ values }), []);

  return (
    <Form onSubmit={onSubmit} methods={methods}>
      <Form.Textarea
        name="reason"
        label="Cuentanos porque quieres ponerte en contacto"
        placeholder="Dejanos tu razón aquí"
      />
      <Form.Button>Enviar solicitud</Form.Button>
    </Form>
  );
};

export default DonationRequestForm;
