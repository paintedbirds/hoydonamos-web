/* eslint-disable no-nested-ternary */
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as ArrowDown } from 'assets/arrow_down.svg';
import { ReactComponent as Account } from 'assets/account.svg';
import { useClickAway } from 'features/common';
import { NavLink } from './NavLink';
import { SignOutLink } from './SignOutLink';

import styles from './Header.module.scss';

const SubNav = ({ title, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const onMenuClick = () => setIsOpen((previousState) => !previousState);

  useClickAway(dropdownRef, () => setIsOpen(false));

  return (
    <div className={styles['sub-nav']} ref={dropdownRef}>
      <button onClick={onMenuClick} type="button">
        <h1 className={styles['title']}>
          {title} <ArrowDown />
        </h1>
      </button>
      {isOpen && (
        <div className={`${styles['nav__dropdown']} ${styles[type]} `}>
          {title === 'Donaciones' ? (
            <>
              <NavLink to="/donaciones">Ver donaciones</NavLink>
              <NavLink to="/crear-donacion">Crear donación</NavLink>
            </>
          ) : title === 'Solicitudes' ? (
            <>
              <NavLink to="/solicitudes">Ver solicitudes</NavLink>
              <NavLink to="/crear-solicitud">Crear solicitud</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/mi-cuenta">
                Mi cuenta <Account />
              </NavLink>
              <SignOutLink />
            </>
          )}
        </div>
      )}
    </div>
  );
};

SubNav.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default SubNav;
