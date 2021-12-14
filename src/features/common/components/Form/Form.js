import { FormProvider } from 'react-hook-form';
import PropTypes from 'prop-types';

import FormButton from './Button';
import FromSecondaryButton from './SecondaryButton';
import FormEditableField from './EditableField';
import FormInput from './Input';
import FormTextarea from './Textarea';

import styles from './Form.module.scss';

const Form = ({ children, onSubmit, methods, ...leftOverProps }) => {
  const {
    formState: { errors },
    handleSubmit,
  } = methods;

  return (
    <FormProvider {...methods}>
      <form
        className="mt-6"
        onSubmit={handleSubmit(onSubmit)}
        {...leftOverProps}
      >
        {children}
        {errors?.general && (
          <p className={styles.error}>{errors.general.message}</p>
        )}
      </form>
    </FormProvider>
  );
};

Form.Button = FormButton;
Form.SecondaryButton = FromSecondaryButton;
Form.EditableField = FormEditableField;
Form.Input = FormInput;
Form.Textarea = FormTextarea;

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export { Form };
