import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

import { Form } from 'features/common';

import styles from './CreatePetitionForm.module.scss';

const CreatePetitionForm = ({ onSubmit, onCancel, isLoading }) => {
  const schema = useMemo(
    () =>
      object().shape({
        subject: string().required('Debes completar este campo'),
        description: string().required('Debes completar este campo'),
      }),
    []
  );

  const methods = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = onSubmit(methods.setError);

  return (
    <div className={styles.container}>
      <Form methods={methods} onSubmit={onSubmitHandler}>
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
          <Form.SecondaryButton type="button" onClick={onCancel}>
            Cancelar
          </Form.SecondaryButton>
          <Form.Button>{isLoading ? 'Cargando...' : 'Guardar'}</Form.Button>
        </div>
      </Form>
    </div>
  );
};

CreatePetitionForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export { CreatePetitionForm };
