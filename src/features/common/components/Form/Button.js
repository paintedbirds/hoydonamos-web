import PropTypes from 'prop-types';

import styles from './Form.module.scss';

const Button = ({ children, ...leftOverProps }) => (
  <button type="submit" className={styles.button} {...leftOverProps}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
