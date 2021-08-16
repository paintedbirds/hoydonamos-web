import PropTypes from 'prop-types';

import styles from './Form.module.scss';

const Input = ({ name, label, ...leftOverProps }) => (
  <div className={styles['input-container']}>
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    <input className={styles.input} id={name} {...leftOverProps} />
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
