import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { mixed, object, string } from 'yup';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import Form from 'components/Form';
import { useAuth } from 'contexts/auth';
import { handleErrors } from 'helpers/errors';
import { useUserUpdate } from 'hooks/mutations/auth';
import ImageUpload from './ImageUpload';

import styles from './UpdateUser.module.scss';

export const cellphonePattern = /^[0-9]{9}$/;

const UpdateUser = () => {
  const history = useHistory();
  const { mutate, isLoading } = useUserUpdate();
  const { user } = useAuth();

  const schema = useMemo(
    () =>
      object().shape({
        image: mixed(),
        name: string().required('Este campo es requerido'),
        aboutMe: string().nullable(),
        phone: string()
          .nullable()
          .matches(
            cellphonePattern,
            'Este campo debe ser un numero de contacto'
          ),
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

      if (values.image.length > 0) {
        formData.append('image', values.image[0]);
      } else {
        formData.delete('image');
      }

      mutate(formData, {
        onError: (errors) => handleErrors(errors, methods.setError),
      });
    },
    [mutate, methods.setError, user]
  );

  const onCancelClick = useCallback(() => {
    history.push('/mi-cuenta');
  }, [history]);

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
          <Form.SecondaryButton type="button" onClick={onCancelClick}>
            Cancelar
          </Form.SecondaryButton>
          <Form.Button>{isLoading ? 'Cargando...' : 'Guardar'}</Form.Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateUser;
