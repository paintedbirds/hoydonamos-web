import { useForm } from 'react-hook-form';

import Form from 'components/Form';
import ImageUpload from './ImageUpload';

import styles from './UpdateUser.module.scss';

const UpdateUser = () => {
  const methods = useForm();

  return (
    <div className={styles.container}>
      <Form methods={methods}>
        <ImageUpload />
        <Form.Input name="name" label="Nombre" placeholder="John Roe" />
        <Form.Textarea
          name="about-me"
          label="Sobre mi"
          placeholder="Ingeniero en Sistemas, me encanta ayudar a los demas!"
        />
        <Form.Input name="phone" label="Teléfono" placeholder="Ej. 093418251" />
        <div className="flex flex-col-reverse sm:flex-row gap-8">
          <Form.SecondaryButton>Cancelar</Form.SecondaryButton>
          <Form.Button>Guardar</Form.Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateUser;
