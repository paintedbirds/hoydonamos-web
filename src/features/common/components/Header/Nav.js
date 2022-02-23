import { Link } from 'react-router-dom';

import { useAuth } from 'features/auth';
import { Form } from 'features/common';
import { SIGN_IN_PATH, SIGN_UP_PATH } from 'utils/constants';
import SubNav from './SubNav';

import styles from './Header.module.scss';

const Nav = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className={styles['nav']}>
      {isAuthenticated ? (
        <>
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
        </>
      ) : (
        <div className={styles['unauthenticated-nav']}>
          <Link to={SIGN_UP_PATH}>
            <Form.SecondaryButton>Registrarme</Form.SecondaryButton>
          </Link>
          <Link to={SIGN_IN_PATH}>
            <Form.Button>Iniciar Sesión</Form.Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
