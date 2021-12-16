import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const OnboardingPage = lazy(() => import('pages/Onboarding'));
const SignInPage = lazy(() => import('pages/SignIn'));
const SignUpPage = lazy(() => import('pages/SignUp'));

const Unauthenticated = () => (
  <Switch>
    <Route exact path="/iniciar-sesion">
      <SignInPage />
    </Route>
    <Route exact path="/registro">
      <SignUpPage />
    </Route>
    <Route exact path="/">
      <OnboardingPage />
    </Route>
  </Switch>
);

export default Unauthenticated;
