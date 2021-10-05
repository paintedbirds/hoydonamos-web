const KEY = 'session';

export const persistSession = (session) =>
  localStorage.setItem(KEY, JSON.stringify(session));

export const getSession = () => JSON.parse(localStorage.getItem(KEY));

export const clearSession = () => localStorage.removeItem(KEY);

export const isStoredSession =
  getSession() && Object.keys(getSession()).length > 0;
