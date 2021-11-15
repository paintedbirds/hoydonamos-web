import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const OnboardingPage = lazy(() => import('pages/OnboardingPage'));
const SignInPage = lazy(() => import('pages/SignInPage'));
const SignUpPage = lazy(() => import('pages/SignUpPage'));

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
