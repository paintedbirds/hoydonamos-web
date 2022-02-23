import { Link } from 'react-router-dom';

import IPadTabletMock from 'assets/ipad-tablet-mock.png';
import IMackDesktopMock from 'assets/imac-desktop-mock.png';
import MacDesktopMock from 'assets/mac-desktop-mock.png';
import SamsungMobileMock from 'assets/samsung-mobile-mock.png';
import { Form, MainLayout } from 'features/common';
import { SIGN_UP_PATH } from 'utils/constants';

import styles from './Landing.module.scss';

const LandingPage = () => (
  <MainLayout>
    <div className={styles.container}>
      <section className={styles['cta-section']}>
        <div className={styles.caption}>
          <h1 className={styles.title}>
            ¡Somos el cambio que necesitas para donar!
          </h1>
          <p className={styles.description}>
            Somos una comunidad que busca generalizar y humanizar el proceso de
            donaciones online.
          </p>
          <div className={styles['cta-button-container']}>
            <Link to={SIGN_UP_PATH}>
              <Form.Button>Comenzar ahora</Form.Button>
            </Link>
          </div>
        </div>
        <div className={styles.image}>
          <img src={MacDesktopMock} alt="Vista Desktop Web" />
        </div>
      </section>
      <section className={styles.banner}>
        <p>¿Te gustaría darle un segundo uso a tus cosas?</p>
      </section>
      <section className={styles.section}>
        <div>
          <img src={IMackDesktopMock} alt="Vista Desktop Web" />
        </div>
        <p className={styles.description}>
          <span className={styles.bold}>
            ¿Tienes algo para donar pero no sabes cómo hacerlo?
          </span>{' '}
          <span className={styles.highlight}>simplificamos</span> el proceso,{' '}
          <span className={styles.highlight}>voluntarios</span> analizarán tu
          donación, la cual será publicada en la plataforma una vez aprobada.
        </p>
      </section>
      <section className={[styles.banner, styles.secondary].join(' ')}>
        <p>¿Quieres ayudar o que te ayuden a encontrar lo que buscas?</p>
      </section>
      <section className={[styles.section, styles.reverse].join(' ')}>
        <div>
          <img src={SamsungMobileMock} alt="Vista Desktop Web" />
        </div>
        <p className={styles.description}>
          Creamos el espacio de{' '}
          <span className={[styles.highlight, styles.secondary].join(' ')}>
            Solicitudes
          </span>{' '}
          donde podrás plantear tus necesidades y estas serán visibles por todos
          los usuarios, teniendo todos los datos necesarios para contactarse
          contigo.
        </p>
      </section>
      <section className={[styles.banner, styles.tertiary].join(' ')}>
        <p>¿Como hago para mejorar mi perfil?</p>
      </section>
      <section className={styles.section}>
        <div>
          <img src={IPadTabletMock} alt="Vista Desktop Web" />
        </div>
        <p className={styles.description}>
          <span className={styles.bold}>¿Dónde veo mi información?</span> En la
          sección <span className={styles.highlight}>Mi Cuenta</span> podrás
          encontrar toda tu información personal en el cual recomendamos{' '}
          <span className={styles.highlight}>
            siempre mantenerla actualizada
          </span>
          , para que los voluntarios puedan entenderte mejor a la hora de
          evaluar tus necesidades.
        </p>
      </section>
      <section
        className={[styles.banner, styles.gradient, styles['get-started']].join(
          ' '
        )}
      >
        <h1>¿Que tal te parece nuestra propuesta?</h1>
        <p>Te invitamos a ser parte de esta grandiosa comunidad.</p>
        <div className={styles['cta-button-container']}>
          <Link to={SIGN_UP_PATH}>
            <Form.Button>Unirme ahora</Form.Button>
          </Link>
        </div>
      </section>
    </div>
  </MainLayout>
);

export default LandingPage;
