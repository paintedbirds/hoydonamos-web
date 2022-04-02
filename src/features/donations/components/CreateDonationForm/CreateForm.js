import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { mixed, object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

import { Form } from 'features/common';
import ImageUpload from './ImageUpload';

import styles from './CreateDonationForm.module.scss';

const CreateDonationForm = ({ onSubmit, isLoading }) => {
  const schema = useMemo(
    () =>
      object().shape({
        name: string().required('Debes completar este campo'),
        description: string().required('Debes completar este campo'),
        image: mixed().required('Debes subir una imagen'),
      }),
    []
  );

  const methods = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = onSubmit(methods.setError);

  return (
    <div className={styles.container}>
      <Form methods={methods} onSubmit={onSubmitHandler}>
        <div className={styles.inputs}>
          <ImageUpload />
          <div className={styles.info}>
            <Form.Input
              name="name"
              type="title"
              placeholder="Agregarle un título a tu donación"
              label="Título"
            />
            <Form.Textarea
              name="description"
              type="paragraph"
              placeholder="Trata de proveer al lector todos los datos necesarios para acceder a esta donación. Se lo mas claro posible."
              label="Descripción"
            />
          </div>
        </div>
        <div className="flex w-full">
          <Form.Button>{isLoading ? 'Cargando...' : 'Subir'}</Form.Button>
        </div>
      </Form>
    </div>
  );
};

CreateDonationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export { CreateDonationForm };
