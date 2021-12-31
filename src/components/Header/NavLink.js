import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Header.module.scss';

const Link = ({ to, children }) => (
  <NavLink
    className={styles['nav-link']}
    activeClassName={styles['nav-link--active']}
    to={to}
    exact
  >
    {children}
  </NavLink>
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { Link as NavLink };
