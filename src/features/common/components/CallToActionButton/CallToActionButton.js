import PropTypes from 'prop-types';

import styles from './CallToActionButton.module.scss';

const CallToActionButton = ({ children, type, onClick }) => (
  <button
    className={`${styles[type]} ${styles.button}`}
    type="button"
    onClick={onClick}
  >
    <span>{children}</span> +
  </button>
);

CallToActionButton.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export { CallToActionButton };
