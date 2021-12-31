import { useQuery } from 'react-query';

import { AuthService } from 'networking/services';

export const QUERY_KEY = 'user';

export const useAccount = ({ id }) => {
  return useQuery([QUERY_KEY, id], () =>
    AuthService.getAccount({ userId: id })
  );
};
