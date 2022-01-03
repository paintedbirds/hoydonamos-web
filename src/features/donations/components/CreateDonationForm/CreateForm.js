import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { mixed, object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

import { Form } from 'features/common';
import ImageUpload from './ImageUpload';

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
    <Form
      methods={methods}
      onSubmit={onSubmitHandler}
      className="flex flex-col md:flex-row gap-1 sm:my-16 mt-8"
    >
      <ImageUpload />
      <div className="sm:w-1/2 w-full lg:pl-10 lg:mt-0 mt-8">
        <Form.EditableField
          name="name"
          type="title"
          placeholder="Has click aqui, para agregarle un titulo a tu donacion"
        />
        <Form.EditableField
          name="description"
          type="paragraph"
          placeholder="Sube tu donacion con un titulo que llame la atencion! Trata de proveer al lector todos los datos noecesarios para acceder a esta donacion. Se lo mas claro posible"
        />

        <div className="flex">
          <Form.Button>{isLoading ? 'Cargando...' : 'Subir'}</Form.Button>
        </div>
      </div>
    </Form>
  );
};

CreateDonationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export { CreateDonationForm };
