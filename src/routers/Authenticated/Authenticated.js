import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import WelcomeModal from 'components/WelcomeModal';

const HomePage = lazy(() => import('pages/Home'));
const DonationsPage = lazy(() => import('pages/Donations'));
const CreateDonationPage = lazy(() => import('pages/CreateDonation'));
const DonationPage = lazy(() => import('pages/Donation'));
const UpdateAccountPage = lazy(() => import('pages/UpdateAccount'));
const PetitionsPage = lazy(() => import('pages/Petitions'));
const CreatePetitionPage = lazy(() => import('pages/CreatePetition'));
const AccountPage = lazy(() => import('pages/Account'));

const Authenticated = () => (
  <>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/donaciones">
        <DonationsPage />
      </Route>
      <Route exact path="/donacion/:id">
        <DonationPage />
      </Route>
      <Route exact path="/crear-donacion">
        <CreateDonationPage />
      </Route>
      <Route exact path="/editar-cuenta">
        <UpdateAccountPage />
      </Route>
      <Route exact path="/solicitudes">
        <PetitionsPage />
      </Route>
      <Route exact path="/crear-solicitud">
        <CreatePetitionPage />
      </Route>
      <Route exact path="/mi-cuenta">
        <AccountPage />
      </Route>
    </Switch>
    <WelcomeModal />
  </>
);

export default Authenticated;
