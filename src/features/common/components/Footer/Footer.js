import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/logo--secondary.svg';
import { ReactComponent as InstagramIcon } from 'assets/instagram_icon.svg';
import { ReactComponent as GmailIcon } from 'assets/gmail_icon.svg';
import { ReactComponent as PaintedBirdsLogo } from 'assets/painted_birds_logo.svg';

import styles from './Footer.module.scss';

const Footer = () => {
  const PATH_INSTAGRAM =
    'https://instagram.com/hoydonamos.uy?utm_medium=copy_link';
  const SUBJECT_MAIL = 'Asunto';
  const MAIL = 'hoydonamos@gmail.com';

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          <div className={styles.logo}>
            <Logo className="h-10 w-10" />
            <h1 className={styles.title}>Che, ¿hoy donamos?</h1>
          </div>
          <p>2022 Copyright &copy; Todos los derechos reservados.</p>
        </div>
        <div className={styles.find__in}>
          <p>Encontranos en </p>
          <a href={PATH_INSTAGRAM} target="_blank" rel="noreferrer">
            <InstagramIcon />
          </a>
          <Link to={{ pathname: 'www.gmail.com' }} target="_blank">
            <GmailIcon />
          </Link>
        </div>
        <div className={styles.powered}>
          <p>Powered by </p>
          <PaintedBirdsLogo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
