import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './CallToActionLink.module.scss';

const CallToActionLink = ({ children, type, path }) => (
  <Link className={`${styles[type]} ${styles.button}`} to={path}>
    <span>{children}</span> +
  </Link>
);

CallToActionLink.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  path: PropTypes.string.isRequired,
};

export { CallToActionLink };
