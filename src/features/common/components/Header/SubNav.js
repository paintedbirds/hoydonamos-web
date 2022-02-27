import { useState, useRef, useMemo } from 'react';
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

  const dropdownTypes = useMemo(
    () => ({
      donations: 'donation',
      requests: 'request',
      user: 'user',
    }),
    []
  );

  const dropdownLinks = useMemo(
    () => ({
      [dropdownTypes.donations]: (
        <>
          <NavLink to="/donaciones">Ver donaciones</NavLink>
          <NavLink to="/crear-donacion">Crear donación</NavLink>
        </>
      ),
      [dropdownTypes.requests]: (
        <>
          <NavLink to="/solicitudes">Ver solicitudes</NavLink>
          <NavLink to="/crear-solicitud">Crear solicitud</NavLink>
        </>
      ),
      [dropdownTypes.user]: (
        <>
          <NavLink to="/mi-cuenta">
            Mi cuenta <Account />
          </NavLink>
          <SignOutLink />
        </>
      ),
    }),
    [dropdownTypes]
  );

  const onMenuClick = () => setIsOpen((previousState) => !previousState);

  useClickAway(dropdownRef, () => setIsOpen(false));

  return (
    <div className={styles['sub-nav']} ref={dropdownRef}>
      <button onClick={onMenuClick} type="button">
        <span className={styles.title}>
          {title} <ArrowDown className={isOpen && styles['icon--active']} />
        </span>
      </button>
      {isOpen && (
        <div className={`${styles['nav__dropdown']} ${styles[type]}`}>
          {dropdownLinks[type]}
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
