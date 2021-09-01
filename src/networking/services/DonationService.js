import httpClient from '../httpClient';

export class DonationService {
  static async getDonations(query) {
    const endpoint = query ? `/donations/${query}` : '/donations';

    const response = await httpClient.get(endpoint);

    return response.data;
  }
}
