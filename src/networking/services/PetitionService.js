import httpClient from '../httpClient';

export class PetitionService {
  static async getPetitions({ page = 1 }) {
    const response = await httpClient.get(`/petitions?page=${page}`);

    return {
      data: response.data.data,
      currentPage: response.data.current_page,
      lastPage: response.data.last_page,
    };
  }

  static getPetition({ id }) {
    return httpClient.get(`/petition/${id}`);
  }

  static createPetition({ petition }) {
    return httpClient.post('/petitions', petition);
  }

  static deletePetition({ petitionId }) {
    return httpClient.delete(`/petitions/${petitionId}`);
  }
}
