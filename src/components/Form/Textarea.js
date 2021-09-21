import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

import styles from './Form.module.scss';

const Textarea = ({ name, label, ...leftOverProps }) => {
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
      <textarea
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

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Textarea;
