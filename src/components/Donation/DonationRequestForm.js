import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { string, object } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Form from 'components/Form';
import { handleErrors } from 'helpers/errors';
import { useCreateDonationRequest } from 'hooks/mutations/donation';

const DonationRequestForm = ({ donationId }) => {
  const schema = useMemo(
    () =>
      object().shape({
        reason: string().required('Campo requerido'),
      }),
    []
  );

  const { mutate, isLoading } = useCreateDonationRequest();

  const methods = useForm({ resolver: yupResolver(schema) });

  const onSubmit = useCallback(
    async (values) =>
      await mutate(
        { donationId, reason: values },
        { onError: (error) => handleErrors(error) }
      ),
    [donationId, mutate]
  );

  return (
    <Form onSubmit={onSubmit} methods={methods}>
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

export default DonationRequestForm;
