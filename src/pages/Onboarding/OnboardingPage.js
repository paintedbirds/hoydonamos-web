import { Link } from 'react-router-dom';

import logo from 'assets/logo.svg';
import OnboardingLayout from 'layouts/OnboardingLayout';

import styles from './Onboarding.module.scss';

const OnboardingPage = () => (
  <OnboardingLayout>
    <div className="w-full">
      <div className="w-1/3 mx-auto">
        <img alt="Logo" src={logo} />
      </div>
      <h1 className="text-3xl text-center mt-6 font-bold">
        Che, ¿hoy donamos?
      </h1>
      <div className={styles.tabs}>
        <Link to="/registro" className={styles.sign_up_link}>
          Registrarme
        </Link>
        <Link to="/iniciar-sesion" className={styles.sign_in_link}>
          Iniciar sesión
        </Link>
      </div>
    </div>
  </OnboardingLayout>
);

export default OnboardingPage;
