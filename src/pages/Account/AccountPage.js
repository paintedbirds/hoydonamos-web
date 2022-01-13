import {
  AccountLayout,
  AccountUserInfo,
  UserDonations,
  UserPetitions,
  useAuth,
  useAccount,
} from 'features/auth';
import { MainLayout, Loading } from 'features/common';

const AccountPage = () => {
  const { user } = useAuth();
  const { data, status } = useAccount({ id: user.id });

  return (
    <MainLayout>
      <AccountLayout>
        <AccountUserInfo user={user} />
        {status === 'loading' && (
          <div className="my-11 w-full flex justify-center items-center">
            <Loading />
          </div>
        )}

        {status === 'success' && <UserDonations donations={data.donations} />}

        {status === 'success' && <UserPetitions petitions={data.petitions} />}
      </AccountLayout>
    </MainLayout>
  );
};

export default AccountPage;
