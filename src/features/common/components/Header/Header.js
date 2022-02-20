import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/logo--secondary.svg';

import styles from './Header.module.scss';
import Nav from './Nav';

const Header = () => (
  <div className={styles['header']}>
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
    </div>
  </div>
);

export { Header };
