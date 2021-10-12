import PropTypes from 'prop-types';

import { ReactComponent as Phone } from 'assets/phone.svg';
import { ReactComponent as Email } from 'assets/email.svg';

import styles from './PetitionCard.module.scss';

const PetitionCard = ({ petition }) => (
  <div className={styles.container}>
    <img className={styles.image} alt="Usuario" src={petition.user.image} />
    <h4 className={styles.title}>
      {petition.user.name} - {petition.subject}
    </h4>
    <p className={styles.description}>{petition.description}</p>
    <div className={styles['contact-info']}>
      {petition.user?.phone && (
        <div className={styles['contact-item']}>
          <Phone />
          <span>{petition.user.phone}</span>
        </div>
      )}
      <div className={styles['contact-item']}>
        <Email />
        <span>{petition.user.email}</span>
      </div>
    </div>
  </div>
);

PetitionCard.propTypes = {
  petition: PropTypes.shape({
    description: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string,
    }),
  }).isRequired,
};

export default PetitionCard;
