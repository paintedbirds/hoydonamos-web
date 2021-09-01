import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const DonationsPage = lazy(() => import('pages/DonationsPage'));

const Authenticated = () => (
  <Switch>
    <Route exact path="/">
      <DonationsPage />
    </Route>
  </Switch>
);

export default Authenticated;
