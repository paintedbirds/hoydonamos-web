import PropTypes from 'prop-types';

import styles from './Form.module.scss';

const SecondaryButton = ({ children, ...leftOverProps }) => (
  <button
    type="submit"
    className={styles['button--secondary']}
    {...leftOverProps}
  >
    {children}
  </button>
);

SecondaryButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SecondaryButton;
