import { Link } from 'react-router-dom';

import { ReactComponent as MenuIcon } from 'assets/menu.svg';
import { ReactComponent as Logo } from 'assets/logo--secondary.svg';

import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.container}>
    <div className="max-w-screen-lg flex items-center justify-between mx-auto">
      <div className="flex items-center">
        <Link to="/">
          <Logo className="h-10 w-10" />
        </Link>
        <h1 className={styles.title}>Che, ¿hoy donamos?</h1>
      </div>
      <MenuIcon className="h-6 w-6 lg:h-8 lg:w-8" />
    </div>
  </div>
);

export default Header;
