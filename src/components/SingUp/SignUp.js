import { Link } from 'react-router-dom';

import Form from './SignUpForm';

import styles from './SignUp.module.scss';

const SignUp = () => (
  <div className="w-full h-100">
    <h1 className="text-4xl md:text-2xl font-bold leading-tight mt-12 text-center uppercase">
      Registro
    </h1>
    <Form />
    <p className="mt-8 text-center">
      ¿Ya tienes una cuenta?{' '}
      <Link to="/iniciar-sesion" className={styles.link}>
        Iniciar sesión
      </Link>
    </p>
  </div>
);

export default SignUp;
