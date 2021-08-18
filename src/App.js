import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Loading from 'components/Loading';

const DonationsPage = lazy(() => import('pages/DonationsPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const SignInPage = lazy(() => import('pages/SignInPage'));
const SignUpPage = lazy(() => import('pages/SignUpPage'));

const App = () => (
  <BrowserRouter>
    <Suspense delayMs={500} fallback={<Loading />}>
      <Switch>
        <Route exact path="/donaciones">
          <DonationsPage />
        </Route>
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
    </Suspense>
  </BrowserRouter>
);

export default App;
