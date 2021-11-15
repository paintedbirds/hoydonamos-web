import { Link } from 'react-router-dom';

import styles from './Home.module.scss';

const SeeMoreLink = ({ children, to }) => (
  <Link to={to} className={styles['see-more']}>
    {children}
  </Link>
);

export default SeeMoreLink;
