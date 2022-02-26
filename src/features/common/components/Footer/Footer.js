import { ReactComponent as Logo } from 'assets/logo--secondary.svg';
import { ReactComponent as InstagramIcon } from 'assets/instagram_icon.svg';
import { ReactComponent as GmailIcon } from 'assets/gmail_icon.svg';
import { ReactComponent as PaintedBirdsLogo } from 'assets/painted_birds_logo.svg';

import styles from './Footer.module.scss';

const Footer = () => {
  const PATH_INSTAGRAM =
    'https://instagram.com/hoydonamos.uy?utm_medium=copy_link';
  const MAIL = 'hoydonamos@gmail.com';

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          <div className={styles.logo}>
            <Logo />
            <h1 className={styles.title}>Che, ¿hoy donamos?</h1>
          </div>
          <p>2022 &copy; Todos los derechos reservados.</p>
        </div>
        <div className={styles.contact__us}>
          <p className={styles.contact__us__title}>Puedes contactarnos en:</p>
          <div>
            <div className={styles.contact__us__item}>
              <a href={PATH_INSTAGRAM} target="_blank" rel="noreferrer">
                <InstagramIcon />
                <p>@hoydonamos.uy</p>
              </a>
            </div>
            <div className={styles.contact__us__item}>
              <GmailIcon />
              <p>{MAIL}</p>
            </div>
          </div>
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
