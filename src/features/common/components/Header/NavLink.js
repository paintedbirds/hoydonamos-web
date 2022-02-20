import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Header.module.scss';

const Link = ({ to, children, type }) => (
  <NavLink
    className={`${styles['nav-link']} ${styles[type]}`}
    activeClassName={`${styles['nav-link--active']} ${
      styles[`${type}--active`]
    }`}
    to={to}
    exact
  >
    {children}
  </NavLink>
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

Link.defaultProps = {
  type: '',
};

export { Link as NavLink };
