import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  ACCOUNT_PATH,
  CREATE_DONATION_PATH,
  CREATE_PETITION_PATH,
  DONATION_PATH,
  DONATIONS_PATH,
  HOME_PATH,
  PETITIONS_PATH,
  UPDATE_ACCOUNT_PATH,
} from 'utils/constants';

import WelcomeModal from 'components/WelcomeModal';

const HomePage = lazy(() => import('pages/Home'));
const DonationsPage = lazy(() => import('pages/Donations'));
const CreateDonationPage = lazy(() => import('pages/CreateDonation'));
const DonationPage = lazy(() => import('pages/Donation'));
const UpdateAccountPage = lazy(() => import('pages/UpdateAccount'));
const PetitionsPage = lazy(() => import('pages/Petitions'));
const CreatePetitionPage = lazy(() => import('pages/CreatePetition'));
const AccountPage = lazy(() => import('pages/Account'));
const NotMatchPage = lazy(() => import('pages/NotMatch'));

const Authenticated = () => (
  <>
    <Switch>
      <Route exact path={HOME_PATH}>
        <HomePage />
      </Route>
      <Route exact path={DONATION_PATH}>
        <DonationPage />
      </Route>
      <Route exact path={DONATIONS_PATH}>
        <DonationsPage />
      </Route>
      <Route exact path={CREATE_DONATION_PATH}>
        <CreateDonationPage />
      </Route>
      <Route exact path={UPDATE_ACCOUNT_PATH}>
        <UpdateAccountPage />
      </Route>
      <Route exact path={PETITIONS_PATH}>
        <PetitionsPage />
      </Route>
      <Route exact path={CREATE_PETITION_PATH}>
        <CreatePetitionPage />
      </Route>
      <Route exact path={ACCOUNT_PATH}>
        <AccountPage />
      </Route>
      <Route>
        <NotMatchPage />
      </Route>
    </Switch>
    <WelcomeModal />
  </>
);

export default Authenticated;
