import { useState, useRef } from 'react';

import { ReactComponent as MenuIcon } from 'assets/menu.svg';
import { useClickAway } from 'features/common';
import { NavLink } from './NavLink';
import { SignOutLink } from './SignOutLink';

import styles from './Header.module.scss';

const MobileMenu = () => {
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
          <NavLink to="/donaciones" type="donation">
            Ver donaciones
          </NavLink>
          <NavLink to="/crear-donacion" type="donation">
            Crear donación
          </NavLink>
          <NavLink to="/solicitudes" type="request">
            Ver solicitudes
          </NavLink>
          <NavLink to="/crear-solicitud" type="request">
            Crear solicitud
          </NavLink>
          <NavLink to="/mi-cuenta" type="user">
            Mi cuenta
          </NavLink>
          <SignOutLink type="mobile" />
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
