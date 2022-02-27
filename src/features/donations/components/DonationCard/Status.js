import PropTypes from 'prop-types';

import styles from './DonationCard.module.scss';

const translatedStatus = {
  PUBLISHED: 'PUBLICADA',
  REJECTED: 'RECHAZADA',
  PENDING: 'PENDIENTE',
};

const Status = ({ status }) => (
  <span className={styles[status.toLowerCase()]}>
    {translatedStatus[status]}
  </span>
);

Status.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Status;
