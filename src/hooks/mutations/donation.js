import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';

import { DonationService } from 'networking/services';

export const useCreateDonation = () => {
  const history = useHistory();

  const mutation = useMutation(
    (donation) => DonationService.createDonation({ donation }),
    {
      onSuccess: (response) => {
        history.push('/');

        toast.success(
          'Tu donación ha sido creada y esta siendo procesada por nuestro equipo',
          {
            duration: 3500,
            icon: '👏',
            style: {
              minWidth: '250px',
            },
          }
        );
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

        toast.success(
          'Tu solicitud ha sido creada y esta siendo procesada por nuestro equipo',
          {
            duration: 3500,
            icon: '👏',
            style: {
              minWidth: '250px',
            },
          }
        );
      },
    }
  );

  return mutation;
};
