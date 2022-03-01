import { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { SignUpForm, useSignUp } from 'features/auth';
import { OnboardingLayout } from 'features/common';
import { handleErrors } from 'helpers/errors';

import styles from '../SignIn/SignInPage.module.scss';

const SignUpPage = () => {
  const { mutate, isLoading } = useSignUp();

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
          Registro
        </h1>
        <SignUpForm onSubmit={onSubmit} isLoading={isLoading} />
        <p className="mt-8 text-center">
          ¿Ya tienes una cuenta?{' '}
          <Link to="/iniciar-sesion" className={styles.link}>
            Iniciar sesión
          </Link>
        </p>
      </div>
    </OnboardingLayout>
  );
};

export default SignUpPage;
