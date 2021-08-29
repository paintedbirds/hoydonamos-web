import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage'));
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
      <HomePage />
    </Route>
  </Switch>
);

export default Unauthenticated;
