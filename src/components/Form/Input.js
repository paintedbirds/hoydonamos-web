import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

import styles from './Form.module.scss';

const Input = ({ name, label, ...leftOverProps }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];

  return (
    <div className={styles['input-container']}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        name={name}
        id={name}
        {...register(name)}
        {...leftOverProps}
      />
      {error && <p className={styles.error}>{error?.message}</p>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
