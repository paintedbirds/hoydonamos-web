import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as MenuIcon } from 'assets/menu.svg';
import { useAuth } from 'features/auth';
import { Form, useClickAway } from 'features/common';
import {
  ACCOUNT_PATH,
  CREATE_DONATION_PATH,
  CREATE_PETITION_PATH,
  DONATIONS_PATH,
  PETITIONS_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
} from 'utils/constants';
import { NavLink } from './NavLink';
import { SignOutLink } from './SignOutLink';

import styles from './Header.module.scss';

const MobileMenu = () => {
  const { isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const onMenuClick = () => setIsOpen((previousState) => !previousState);

  useClickAway(dropdownRef, () => setIsOpen(false));

  return (
    <div className={styles['mobile-menu']} ref={dropdownRef}>
      <button
        onClick={onMenuClick}
        className={styles['mobile-menu__button']}
        type="button"
      >
        <MenuIcon className="h-6 w-6 lg:h-8 lg:w-8" />
      </button>
      {isOpen && (
        <div className={styles['mobile-menu__dropdown']}>
          {isAuthenticated ? (
            <>
              <NavLink to={DONATIONS_PATH} type="donation">
                Ver donaciones
              </NavLink>
              <NavLink to={CREATE_DONATION_PATH} type="donation">
                Crear donación
              </NavLink>
              <NavLink to={PETITIONS_PATH} type="request">
                Ver solicitudes
              </NavLink>
              <NavLink to={CREATE_PETITION_PATH} type="request">
                Crear solicitud
              </NavLink>
              <NavLink to={ACCOUNT_PATH} type="user">
                Mi cuenta
              </NavLink>
              <SignOutLink type="generic" />
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
      )}
    </div>
  );
};

export default MobileMenu;
