import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Form from 'components/Form';
import { handleErrors } from 'helpers/errors';
import { useCreatePetition } from 'hooks/mutations/petition';

const CreatePetitionForm = () => {
  const history = useHistory();
  const { mutate, isLoading } = useCreatePetition();

  const schema = useMemo(
    () =>
      object().shape({
        subject: string().required('Debes completar este campo'),
        description: string().required('Debes completar este campo'),
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

  const onCancelClick = useCallback(() => {
    history.push('/solicitudes');
  }, [history]);

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Form.Input
        name="subject"
        label="Asunto"
        placeholder="¿Qué es lo que necesitas?"
      />
      <Form.Textarea
        name="description"
        label="Descripción"
        placeholder="Dejanos mas detalles sobre tu solicitud"
      />
      <div className="flex flex-col-reverse sm:flex-row gap-4">
        <Form.SecondaryButton type="button" onClick={onCancelClick}>
          Cancelar
        </Form.SecondaryButton>
        <Form.Button>{isLoading ? 'Cargando...' : 'Guardar'}</Form.Button>
      </div>
    </Form>
  );
};

export default CreatePetitionForm;
