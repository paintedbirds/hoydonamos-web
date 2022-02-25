import { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { SignInForm, useSignIn } from 'features/auth';
import { handleErrors } from 'helpers/errors';
import OnboardingLayout from 'layouts/OnboardingLayout';

import styles from './SignInPage.module.scss';

const SignInPage = () => {
  const { mutate, isLoading } = useSignIn();

  const onSubmit = useCallback(
    (setErrors) => async (values) =>
      mutate(values, {
        onError: (errors) => handleErrors(errors, setErrors),
      }),
    [mutate]
  );

  return (
    <OnboardingLayout>
      <div className="w-full h-100">
        <h1 className="text-4xl md:text-2xl font-bold leading-tight mt-12 text-center uppercase">
          Iniciar sesión
        </h1>
        <SignInForm onSubmit={onSubmit} isLoading={isLoading} />
        <p className="mt-8 text-center">
          ¿Aún no tienes una cuenta?{' '}
          <Link to="/registro" className={styles.link}>
            Registrarte
          </Link>
        </p>
      </div>
    </OnboardingLayout>
  );
};

export default SignInPage;
