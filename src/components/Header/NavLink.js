import { NavLink } from 'react-router-dom';

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

export { Link as NavLink };
