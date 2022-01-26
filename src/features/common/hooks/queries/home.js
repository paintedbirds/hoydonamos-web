import { useQueries } from 'react-query';

import { DonationService, PetitionService } from 'networking/services';

const DONATIONS_KEY = 'donations-home';
const PETITIONS_KEY = 'petitions-home';

export const useDonationsAndPetitions = () => {
  const [
    { status: donationsStatus, data: donationsData },
    { status: petitionsStatus, data: petitionsData },
  ] = useQueries([
    {
      queryKey: [DONATIONS_KEY],
      queryFn: () => DonationService.getDonations({ query: '', page: 1 }),
    },
    {
      queryKey: [PETITIONS_KEY],
      queryFn: () => PetitionService.getPetitions({ page: 1 }),
    },
  ]);

  return {
    donationsStatus,
    donationsData: donationsData?.data,
    petitionsStatus,
    petitionsData: petitionsData?.data,
  };
};
