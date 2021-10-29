import { useQuery } from 'react-query';

import { AuthService } from 'networking/services';

export const QUERY_KEY = 'user';

export const useAccount = ({ id }) =>
  useQuery([QUERY_KEY, id], () => AuthService.getAccount({ userId: id }));
