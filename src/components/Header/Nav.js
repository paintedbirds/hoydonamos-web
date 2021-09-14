import { useState, useRef } from 'react';

import { ReactComponent as MenuIcon } from 'assets/menu.svg';
import { useClickAway } from 'hooks/events';
import { NavLink } from './NavLink';

import styles from './Header.module.scss';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const onMenuClick = () => {
    setIsOpen((previousState) => !previousState);
  };

  useClickAway(dropdownRef, onMenuClick);

  return (
    <div className={styles.nav}>
      <button onClick={onMenuClick} className={styles['nav__button']}>
        <MenuIcon className="h-6 w-6 lg:h-8 lg:w-8" />
      </button>
      {isOpen && (
        <div ref={dropdownRef} className={styles['nav__dropdown']}>
          <NavLink to="/">Donaciones</NavLink>
          <NavLink to="/crear-donacion">Crear donaciones</NavLink>
          <NavLink to="/solicitudes">Solicitudes</NavLink>
          <NavLink to="/crear-solicitud">Crear solicitud</NavLink>
          <NavLink to="/mi-cuenta">Mi cuenta</NavLink>
          <NavLink to="/cerrar-sesion">Cerrar sesión</NavLink>
        </div>
      )}
    </div>
  );
};

export default Nav;
