import { useDonationsAndPetitions } from 'features/common';
import { useAuth } from 'features/auth';
import UserInfo from './UserInfo';
import Donations from './Donations';
import Petitions from './Petitions';

const Home = () => {
  const { donationsStatus, donationsData, petitionsStatus, petitionsData } =
    useDonationsAndPetitions();
  const { user } = useAuth();
  const missingUserInfo = !user.phone || !user.about_me;

  return (
    <div className="px-6 mt-11">
      {missingUserInfo && <UserInfo />}
      <Donations status={donationsStatus} data={donationsData} />
      <Petitions status={petitionsStatus} data={petitionsData} />
    </div>
  );
};

export { Home };
