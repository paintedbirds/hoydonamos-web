import { useInfiniteQuery, useQuery } from 'react-query';

import { DonationService } from 'networking/services';

const QUERY_KEY = 'donations';

export const useDonations = ({ query }) =>
  useInfiniteQuery(
    [QUERY_KEY, query],
    ({ pageParam = 1 }) =>
      DonationService.getDonations({ query, page: pageParam }),
    {
      getNextPageParam: (state) =>
        state.lastPage > state.currentPage ? state.currentPage + 1 : false,
    }
  );

export const useDonation = ({ id }) =>
  useQuery([QUERY_KEY, id], () => DonationService.getDonation({ id }));
