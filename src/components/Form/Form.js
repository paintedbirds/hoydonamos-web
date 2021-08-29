import { FormProvider } from 'react-hook-form';
import PropTypes from 'prop-types';

import FormButton from './Button';
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
        {...leftOverProps}
        className="mt-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        {children}
        {errors?.general && (
          <p className={styles.error}>{errors.general.message}</p>
        )}
      </form>
    </FormProvider>
  );
};

Form.Input = FormInput;
Form.Button = FormButton;

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
