import PropTypes from 'prop-types';

import { ReactComponent as Phone } from 'assets/phone.svg';
import { ReactComponent as Email } from 'assets/email.svg';

import styles from './RequestCard.module.scss';

const RequestCard = ({ request }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} alt="Usuario" src={request.user.image} />
      <h4 className={styles.title}>
        {request.user.name} - {request.name}
      </h4>
      <p className={styles.description}>{request.description}</p>
      <div className={styles['contact-info']}>
        <div className={styles['contact-item']}>
          <Phone />
          <span>{request.user.phone}</span>
        </div>
        <div className={styles['contact-item']}>
          <Email /> 
          <span>{request.user.email}</span>
        </div>
      </div>
    </div>
  );
};

RequestCard.propTypes = {
  request: PropTypes.shape({
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string,
    }),
  }),
};

export default RequestCard;
