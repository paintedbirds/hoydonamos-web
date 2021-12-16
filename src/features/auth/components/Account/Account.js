import { Link } from 'react-router-dom';

import { ReactComponent as Phone } from 'assets/phone.svg';
import { ReactComponent as Email } from 'assets/email.svg';
import { ReactComponent as Edit } from 'assets/edit--secondary.svg';
import { Loading } from 'features/common';
import { useAuth } from 'features/auth';
import { useAccount } from 'hooks/queries/user';
import Donations from './Donations';
import Petitions from './Petitions';

import styles from './Account.module.scss';

const Account = () => {
  const { user } = useAuth();
  const { data, status } = useAccount({ id: user.id });

  return (
    <div className="px-4">
      <div className={styles['user-container']}>
        <div className={styles['user-image']}>
          <img src={user.image} alt={user.name} />
        </div>
        <div className={styles['user-info']}>
          <div className={styles['name-container']}>
            <h1 className={styles['user-name']}>{user.name}</h1>
            <Link to="/editar-usuario">
              <Edit />
            </Link>
          </div>
          {user?.['about_me'] && <p>{user['about_me']}</p>}
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

      {status === 'loading' && (
        <div className="my-11 w-full flex justify-center items-center">
          <Loading />
        </div>
      )}

      {status === 'success' && <Donations donations={data.donations} />}

      {status === 'success' && <Petitions petitions={data.petitions} />}
    </div>
  );
};

export { Account };
