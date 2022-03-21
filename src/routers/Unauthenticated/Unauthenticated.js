import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { UnauthenticatedDonationRedirect } from 'features/donations';
import { SIGN_IN_PATH, SIGN_UP_PATH, HOME_PATH } from 'utils/constants';

const LandingPage = lazy(() => import('pages/Landing'));
const SignInPage = lazy(() => import('pages/SignIn'));
const SignUpPage = lazy(() => import('pages/SignUp'));

const Unauthenticated = () => (
  <Switch>
    <Route exact path={SIGN_IN_PATH}>
      <SignInPage />
    </Route>
    <Route exact path={SIGN_UP_PATH}>
      <SignUpPage />
    </Route>
    <Route exact path={HOME_PATH}>
      <LandingPage />
    </Route>
    <UnauthenticatedDonationRedirect />
  </Switch>
);

export default Unauthenticated;
