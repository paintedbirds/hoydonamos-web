import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/logo--secondary.svg';
import Nav from './Nav';
import MobileMenu from './MobileMenu';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles['header_content']}>
      <div className={styles['header_logo']}>
        <Link to="/">
          <Logo className="h-10 w-10" />
          <h1 className={`${styles['title']} ${styles['title-main']}`}>
            Che, ¿hoy donamos?
          </h1>
        </Link>
      </div>
      <Nav />
      <MobileMenu />
    </div>
  </header>
);

export { Header };
