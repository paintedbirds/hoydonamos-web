import { useMutation } from 'react-query';
import { useHistory } from 'react-router';

import { useAuth } from 'contexts/auth';
import { AuthService } from 'networking/services';

const persistToken = (token) => localStorage.setItem('token', token);

export const useSignUp = () => {
  const history = useHistory();
  const { setState } = useAuth();

  const mutation = useMutation((user) => AuthService.signUp(user), {
    onSuccess: (response) => {
      setState((previousState) => ({
        ...previousState,
        ...response.data,
        isAuthenticated: true,
      }));

      persistToken(response.data.token);

      history.push('/');
    },
  });

  return mutation;
};

export const useSignIn = () => {
  const history = useHistory();
  const { setState } = useAuth();

  const mutation = useMutation((user) => AuthService.signIn(user), {
    onSuccess: (response) => {
      setState((previousState) => ({
        ...previousState,
        ...response.data,
        isAuthenticated: true,
      }));

      persistToken(response.data.token);

      history.push('/');
    },
  });

  return mutation;
};
