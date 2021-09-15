import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const DonationsPage = lazy(() => import('pages/DonationsPage'));
const CreateDonationPage = lazy(() => import('pages/CreateDonationPage'));
const DonationPage = lazy(() => import('pages/DonationPage'));

const Authenticated = () => (
  <Switch>
    <Route exact path="/">
      <DonationsPage />
    </Route>
    <Route exact path="/donacion/:id">
      <DonationPage />
    </Route>
    <Route exact path="/crear-donacion">
      <CreateDonationPage />
    </Route>
  </Switch>
);

export default Authenticated;
