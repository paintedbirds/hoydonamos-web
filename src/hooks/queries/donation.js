import { useQuery } from 'react-query';

import { DonationService } from 'networking/services';

const QUERY_KEY = 'donations';

export const useDonations = ({ query }) =>
  useQuery([QUERY_KEY, query], () => DonationService.getDonations(query));
