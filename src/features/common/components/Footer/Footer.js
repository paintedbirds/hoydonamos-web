import { ReactComponent as Logo } from 'assets/logo--secondary.svg';
import { ReactComponent as InstagramIcon } from 'assets/instagram_icon.svg';
import { ReactComponent as GmailIcon } from 'assets/gmail_icon.svg';
import { ReactComponent as PaintedBirdsLogo } from 'assets/painted_birds_logo.svg';
import {
  INSTAGRAM_LINK,
  PAINTED_BIRDS_LINK,
  SUPPORT_EMAIL,
} from 'utils/constants';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`max-w-screen-lg mx-auto ${styles.container}`}>
      <div className={styles.copyright}>
        <div className={styles.logo}>
          <Logo />
          <h1 className={styles.title}>Che, ¿hoy donamos?</h1>
        </div>
        <p>2022 &copy; Todos los derechos reservados.</p>
      </div>
      <div className={styles.contact__us}>
        <div>
          <div className={styles.contact__us__item}>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer">
              <InstagramIcon />
              <p>@hoydonamos.uy</p>
            </a>
          </div>
          <div className={styles.contact__us__item}>
            <a href={`mailto:${SUPPORT_EMAIL}`}>
              <GmailIcon />
              <p>{SUPPORT_EMAIL}</p>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.powered}>
        <p>Impulsado por</p>
        <a href={PAINTED_BIRDS_LINK} target="_blank" rel="noreferrer">
          <PaintedBirdsLogo />
        </a>
      </div>
    </div>
  </footer>
);

export { Footer };
