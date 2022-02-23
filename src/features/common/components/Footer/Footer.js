import { ReactComponent as Logo } from 'assets/logo--secondary.svg';
import { ReactComponent as InstagramIcon } from 'assets/instagram_icon.svg';
import { ReactComponent as GmailIcon } from 'assets/gmail_icon.svg';
import { ReactComponent as PaintedBirdsLogo } from 'assets/painted_birds_logo.svg';

import styles from './Footer.module.scss';

const Footer = () => {
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
          <p>Encontranos en: </p>
          <InstagramIcon />
          <GmailIcon />
        </div>
        <div className={styles.powered}>
          <p>Powered by: </p>
          <PaintedBirdsLogo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
