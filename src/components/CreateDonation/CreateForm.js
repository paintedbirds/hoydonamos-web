import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { mixed, object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Form from 'components/Form';
import { handleErrors } from 'helpers/errors';
import { useCreateDonation } from 'hooks/mutations/donation';
import ImageUpload from './ImageUpload';

const CreateForm = () => {
  const { mutate, isLoading } = useCreateDonation();

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

  const onSubmit = useCallback(
    (values) => {
      const formData = new FormData();

      formData.append('name', values.name);
      formData.append('description', values.description);
      formData.append('image', values.image[0]);

      mutate(formData, {
        onError: (errors) => handleErrors(errors, methods.setError),
      });
    },
    [methods.setError, mutate]
  );

  return (
    <Form
      methods={methods}
      onSubmit={onSubmit}
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

export default CreateForm;
