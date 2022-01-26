import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Home.module.scss';

const SeeMoreLink = ({ children, to }) => (
  <Link to={to} className={styles['see-more']}>
    {children}
  </Link>
);

SeeMoreLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default SeeMoreLink;
