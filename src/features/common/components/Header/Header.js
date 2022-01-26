import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/logo--secondary.svg';
import Nav from './Nav';

import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.container}>
    <div className="max-w-screen-lg flex items-center justify-between mx-auto">
      <Link to="/">
        <div className="flex items-center">
          <Logo className="h-10 w-10" />
          <h1 className={styles.title}>Che, ¿hoy donamos?</h1>
        </div>
      </Link>
      <Nav />
    </div>
  </div>
);

export { Header };
