import httpClient from '../httpClient';

export class AuthService {
  static signUp(user) {
    return httpClient.post('/register', user);
  }

  static signIn(user) {
    return httpClient.post('/login', user);
  }

  static signOut(user) {
    return httpClient.post('/logout', user);
  }

  static update({ user, userId }) {
    return httpClient.post(`/users/${userId}`, user);
  }
}
