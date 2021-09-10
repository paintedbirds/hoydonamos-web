import { FormProvider } from 'react-hook-form';
import PropTypes from 'prop-types';

import FormButton from './Button';
import FormEditableField from './EditableField';
import FormInput from './Input';

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
Form.EditableField = FormEditableField;
Form.Input = FormInput;

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
