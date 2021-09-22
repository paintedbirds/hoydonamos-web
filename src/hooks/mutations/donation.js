import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';

import { DonationService } from 'networking/services';

export const useCreateDonation = () => {
  const history = useHistory();

  const mutation = useMutation(
    (donation) => DonationService.createDonation({ donation }),
    {
      onSuccess: (response) => {
        history.push('/');
      },
    }
  );

  return mutation;
};

export const useCreateDonationRequest = () => {
  const history = useHistory();

  const mutation = useMutation(
    ({ donationId, reason }) =>
      DonationService.createDonationRequest({ donationId, reason }),
    {
      onSuccess: (response) => {
        history.push('/');
      },
    }
  );

  return mutation;
};
