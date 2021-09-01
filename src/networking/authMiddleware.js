export const applyInterceptors = (client, token, clearSession) => {
  const requestInterceptor = client.interceptors.request.use((request) => {
    if (token) {
      Object.assign(request.headers.Authorization, `Bearer ${token}`);
    } else {
      Object.assign(request.params);
    }

    return request;
  });

  const responseInterceptor = client.interceptors.response.use(
    (response) => response,
    (error) => {
      if (!error.response || !error.response.data) {
        return Promise.reject({ message: 'Connection error' });
      }

      if (error.response.status === 401) {
        clearSession();
      }

      return Promise.reject(error.response.data);
    }
  );

  return [requestInterceptor, responseInterceptor];
};

export const clearInterceptors = (client, interceptors) => {
  const [requestInterceptor, responseInterceptor] = interceptors;

  client.interceptors.request.eject(requestInterceptor);
  client.interceptors.response.eject(responseInterceptor);
};
