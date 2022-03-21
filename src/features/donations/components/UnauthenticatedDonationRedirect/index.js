import { useLocation, Redirect } from 'react-router-dom';

import { useAuth } from 'features/auth';
import { DONATIONS_PATH, SIGN_IN_PATH } from 'utils/constants';

const UnauthenticatedDonationRedirect = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const shouldRedirectToDonation =
    location?.state?.from?.pathname?.includes(DONATIONS_PATH);

  if (isAuthenticated && shouldRedirectToDonation) {
    return <Redirect to={{ pathname: location.state.from.pathname }} />;
  }

  if (!isAuthenticated && !shouldRedirectToDonation) {
    return (
      <Redirect to={{ pathname: SIGN_IN_PATH, state: { from: location } }} />
    );
  }

  return null;
};

export { UnauthenticatedDonationRedirect };
