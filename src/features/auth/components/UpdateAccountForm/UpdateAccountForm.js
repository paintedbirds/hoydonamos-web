import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { mixed, object, string } from 'yup';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

import { useAuth } from 'features/auth';
import { Form } from 'features/common';
import { ACCOUNT_PATH } from 'utils/constants';
import ImageUpload from './ImageUpload';

import styles from './UpdateAccountForm.module.scss';

export const cellphonePattern = /^[0-9]{9}$/;

const UpdateAccountForm = ({ onSubmit, isLoading }) => {
  const history = useHistory();
  const { user } = useAuth();

  const schema = useMemo(
    () =>
      object().shape({
        image: mixed(),
        name: string().required('Este campo es requerido'),
        aboutMe: string().nullable(),
        phone: string()
          .nullable(true)
          .transform((currentValue, originalValue) => {
            return originalValue === '' ? null : currentValue;
          })
          .matches(
            cellphonePattern,
            'Este campo debe ser un numero de contacto Ej. 093418251'
          ),
      }),
    []
  );

  const methods = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = onSubmit(methods.setError);

  const onCancelClick = useCallback(() => {
    history.push(ACCOUNT_PATH);
  }, [history]);

  return (
    <div className={styles.container}>
      <Form methods={methods} onSubmit={onSubmitHandler}>
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
          defaultValue={user.about_me}
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

UpdateAccountForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export { UpdateAccountForm };
