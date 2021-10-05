import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { mixed, object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Form from 'components/Form';
import { useAuth } from 'contexts/auth';
import { handleErrors } from 'helpers/errors';
import { useUserUpdate } from 'hooks/mutations/auth';
import ImageUpload from './ImageUpload';

import styles from './UpdateUser.module.scss';

const UpdateUser = () => {
  const { mutate, isLoading } = useUserUpdate();
  const { user } = useAuth();

  const schema = useMemo(
    () =>
      object().shape({
        image: mixed(),
        name: string().required('Este campo es requerido'),
        aboutMe: string(),
        phone: string(),
      }),
    []
  );

  const methods = useForm({ resolver: yupResolver(schema) });

  const onSubmit = useCallback(
    (values) => {
      const formData = new FormData();

      Object.entries(user).forEach((entry) => {
        formData.append(entry[0], entry[1]);
      });

      formData.append('name', values.name);
      formData.append('about_me', values.aboutMe);
      formData.append('phone', values.phone);

      if (values.image.length > 0) formData.append('image', values.image[0]);

      mutate(formData, {
        onError: (errors) => handleErrors(errors, methods.setError),
      });
    },
    [mutate, methods.setError, user]
  );

  return (
    <div className={styles.container}>
      <Form methods={methods} onSubmit={onSubmit}>
        <ImageUpload />
        <Form.Input
          name="name"
          label="Nombre"
          placeholder="John Roe"
          defaultValue={user.name}
        />
        <Form.Textarea
          name="aboutMe"
          label="Sobre mi"
          placeholder="Ingeniero en Sistemas, me encanta ayudar a los demas!"
          defaultValue={user['about_me']}
        />
        <Form.Input
          name="phone"
          label="Teléfono"
          placeholder="Ej. 093418251"
          defaultValue={user.phone}
        />
        <div className="flex flex-col-reverse sm:flex-row gap-8">
          <Form.SecondaryButton>Cancelar</Form.SecondaryButton>
          <Form.Button>{isLoading ? 'Cargando...' : 'Guardar'}</Form.Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateUser;
