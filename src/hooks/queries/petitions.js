import { useInfiniteQuery } from 'react-query';

import { PetitionService } from 'networking/services';

export const QUERY_KEY = 'petitions';

export const usePetitions = () =>
  useInfiniteQuery(
    [QUERY_KEY],
    ({ pageParam = 1 }) => PetitionService.getPetitions({ page: pageParam }),
    {
      getNextPageParam: (state) =>
        state.lastPage > state.currentPage ? state.currentPage + 1 : false,
    }
  );
