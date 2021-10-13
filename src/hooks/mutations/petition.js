import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';

import { PetitionService } from 'networking/services';

export const useCreatePetition = () => {
  const history = useHistory();

  const mutation = useMutation(
    (petition) => PetitionService.createPetition({ petition }),
    {
      onSuccess: (response) => {
        history.push('/');

        toast.success('Tu solicitud ha sido creada exitosamente', {
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
