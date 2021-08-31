import httpClient from '../httpClient';

export class DonationService {
  static async getDonations() {
    const response = await httpClient.get('/donations');
    return response.data;
  }
}
