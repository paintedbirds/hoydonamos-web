const KEY = 'token';

export const persistToken = (token) => localStorage.setItem(KEY, token);

export const getToken = () => localStorage.getItem(KEY);

export const clearToken = () => localStorage.removeItem(KEY);
