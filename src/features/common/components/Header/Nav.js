import { useAuth } from 'features/auth';
import SubNav from './SubNav';

import styles from './Header.module.scss';

const Nav = () => {
  const { user } = useAuth();

  return (
    <div className={styles['nav']}>
      <div className={styles['nav_donation-request']}>
        <SubNav title="Donaciones" type="donation" />
        <SubNav title="Solicitudes" type="request" />
      </div>
      <div className={styles['nav-account']}>
        <SubNav title={user.name} type="user" />
        <img
          src={user.image}
          width="50px"
          height="50px"
          alt="user"
          style={{ borderRadius: '50%' }}
        />{' '}
      </div>
    </div>
  );
};

export default Nav;
