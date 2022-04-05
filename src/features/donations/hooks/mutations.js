import { useMutation, useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';

import { useAuth, QUERY_KEY as USER_KEY } from 'features/auth';
import { DonationService } from 'networking/services';

export const useCreateDonation = () => {
  const history = useHistory();

  const mutation = useMutation(
    (donation) => DonationService.createDonation({ donation }),
    {
      onSuccess: (response) => {
        history.push('/mi-cuenta');

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

export const useDeleteDonation = () => {
  const queryClient = useQueryClient();
  const {
    user: { id: userId },
  } = useAuth();

  const mutation = useMutation(
    ({ donationId }) => DonationService.deleteDonation({ donationId }),
    {
      onSuccess: async (response) => {
        await queryClient.refetchQueries([USER_KEY, userId]);

        toast.success('Tu donación ha sido eliminada', {
          duration: 3500,
          icon: '👏',
          style: {
            minWidth: '250px',
          },
        });
      },
    }
  );

  return mutation;
};

export const useDeleteDonationRequest = () => {
  const queryClient = useQueryClient();
  const {
    user: { id: userId },
  } = useAuth();

  const mutation = useMutation(
    ({ donationRequestId }) =>
      DonationService.deleteDonationRequest({ donationRequestId }),
    {
      onSuccess: async (response) => {
        await queryClient.refetchQueries([USER_KEY, userId]);

        toast.success('Tu solicitud de donación ha sido eliminada', {
          duration: 3500,
          icon: '👏',
          style: {
            minWidth: '250px',
          },
        });
      },
    }
  );

  return mutation;
};
