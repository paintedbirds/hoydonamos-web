import httpClient from '../httpClient';

export class AuthService {
  static signUp(user) {
    return httpClient.post('/register', user);
  }

  static signIn(user) {
    return httpClient.post('/login', user);
  }

  static signOut(user) {
    return httpClient.delete('/logout', user);
  }
}
