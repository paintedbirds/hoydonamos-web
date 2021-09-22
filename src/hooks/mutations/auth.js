import { useMutation } from 'react-query';
import { useHistory } from 'react-router';

import { useAuth, initialState } from 'contexts/auth';
import { clearToken, getToken, persistToken } from 'helpers/token';
import { AuthService } from 'networking/services';

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

export const useSignOut = () => {
  const history = useHistory();
  const { setState } = useAuth();

  const storedToken = getToken();

  const mutation = useMutation(() => AuthService.signOut(storedToken), {
    onSuccess: (response) => {
      setState(initialState);
      clearToken();

      history.push('/');
    },
  });

  return mutation;
};
