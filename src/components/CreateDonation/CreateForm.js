import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { mixed, object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Form from 'components/Form';
import ImageUpload from './ImageUpload';

const CreateForm = () => {
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

  const onSubmit = useCallback((values) => console.log(values), []);

  return (
    <Form
      methods={methods}
      onSubmit={onSubmit}
      className="flex flex-wrap sm:my-16 mt-8"
    >
      <ImageUpload />
      <div className="sm:w-1/2 w-full lg:pl-10 lg:mt-0 mt-8">
        <Form.EditableField
          name="name"
          type="title"
          defaultValue="Has click aqui, para agregarle un titulo a tu donacion"
        />
        <Form.EditableField
          name="description"
          type="paragraph"
          defaultValue="Sube tu donacion con un titulo que llame la atencion! Trata de proveer al lector todos los datos noecesarios para acceder a esta donacion. Se lo mas claro posible"
        />

        <div className="flex">
          <Form.Button>Subir</Form.Button>
        </div>
      </div>
    </Form>
  );
};

export default CreateForm;
