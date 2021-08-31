import { useQuery } from 'react-query';

import { DonationService } from 'networking/services';

const QUERY_KEY = 'donations';

export const useDonations = () =>
  useQuery([QUERY_KEY], DonationService.getDonations);
