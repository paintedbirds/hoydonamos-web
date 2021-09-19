import httpClient from '../httpClient';

export class DonationService {
  static async getDonations({ page = 1, query }) {
    const endpointWithQuery = query ? `/donations/${query}` : '/donations';
    const endpointWithPage = `${endpointWithQuery}?page=${page}`;

    const response = await httpClient.get(endpointWithPage);

    return {
      data: response.data.data,
      currentPage: response.data.current_page,
      lastPage: response.data.last_page,
    };
  }

  static async getDonation({ id }) {
    const response = await httpClient.get(`/donation/${id}`);

    return response.data;
  }

  static createDonation({ donation }) {
    return httpClient.post('/donations', donation);
  }
}
