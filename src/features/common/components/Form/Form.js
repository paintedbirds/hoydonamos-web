import { FormProvider } from 'react-hook-form';
import PropTypes from 'prop-types';

import FormButton from './Button';
import FromSecondaryButton from './SecondaryButton';
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
Form.Input = FormInput;
Form.Textarea = FormTextarea;

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired,
  methods: PropTypes.shape({
    register: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    watch: PropTypes.func.isRequired,
    formState: PropTypes.shape({
      errors: PropTypes.shape({
        general: PropTypes.shape({
          message: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

export { Form };
