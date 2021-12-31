import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ReactComponent as Phone } from 'assets/phone.svg';
import { ReactComponent as Email } from 'assets/email.svg';
import { ReactComponent as Edit } from 'assets/edit--secondary.svg';
import { UPDATE_ACCOUNT_PATH } from 'utils/constants';

import styles from './AccountUserInfo.module.scss';

const AccountUserInfo = ({ user }) => (
  <div className={styles['user-container']}>
    <div className={styles['user-image']}>
      <img src={user.image} alt={user.name} />
    </div>
    <div className={styles['user-info']}>
      <div className={styles['name-container']}>
        <h1 className={styles['user-name']}>{user.name}</h1>
        <Link to={UPDATE_ACCOUNT_PATH}>
          <Edit />
        </Link>
      </div>
      {user?.about_me && <p>{user.about_me}</p>}
      <div className={styles['contact-info']}>
        {user?.phone && (
          <div className={styles['contact-item']}>
            <Phone />
            <span>{user.phone}</span>
          </div>
        )}
        <div className={styles['contact-item']}>
          <Email />
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  </div>
);

AccountUserInfo.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string,
    image: PropTypes.string.isRequired,
    about_me: PropTypes.string,
  }).isRequired,
};

export { AccountUserInfo };
