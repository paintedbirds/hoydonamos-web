import { useState, useRef } from 'react';

import { ReactComponent as MenuIcon } from 'assets/menu.svg';
import { useClickAway } from 'hooks/events';
import { NavLink } from './NavLink';
import { SignOutLink } from './SignOutLink';

import styles from './Header.module.scss';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const onMenuClick = () => setIsOpen((previousState) => !previousState);

  useClickAway(dropdownRef, () => setIsOpen(false));

  return (
    <div className={styles.nav} ref={dropdownRef}>
      <button onClick={onMenuClick} className={styles['nav__button']}>
        <MenuIcon className="h-6 w-6 lg:h-8 lg:w-8" />
      </button>
      {isOpen && (
        <div className={styles['nav__dropdown']}>
          <NavLink to="/donaciones">Donaciones</NavLink>
          <NavLink to="/crear-donacion">Crear donación</NavLink>
          <NavLink to="/solicitudes">Solicitudes</NavLink>
          <NavLink to="/crear-solicitud">Crear solicitud</NavLink>
          <NavLink to="/mi-cuenta">Mi cuenta</NavLink>
          <SignOutLink />
        </div>
      )}
    </div>
  );
};

export default Nav;
