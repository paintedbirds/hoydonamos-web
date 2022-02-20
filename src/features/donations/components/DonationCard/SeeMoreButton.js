import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ReactComponent as Arrow } from 'assets/arrow--right.svg';

import styles from './DonationCard.module.scss';

const SeeMoreButton = ({ to }) => (
  <div className={styles['see-more-container']}>
    <Link to={to}>
      <div className={styles['see-more']}>
        Ver mas
        <Arrow />
      </div>
    </Link>
  </div>
);

SeeMoreButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default SeeMoreButton;
