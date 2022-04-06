import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './CallToActionButton.module.scss';

const CallToActionButton = ({ children, type, path }) => (
  <Link className={`${styles[type]} ${styles.button}`} type="button" to={path}>
    <span>{children}</span> +
  </Link>
);

CallToActionButton.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  path: PropTypes.string.isRequired,
};

export { CallToActionButton };
