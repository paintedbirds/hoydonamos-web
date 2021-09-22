import { useMutation } from 'react-query';
import { useHistory } from 'react-router';
import toast from 'react-hot-toast';

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

      toast.success('Te has registrado correctamente', {
        duration: 3500,
        icon: '👏',
        style: {
          minWidth: '250px',
        },
      });
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

      toast.success('Has iniciado sesión correctamente', {
        duration: 3500,
        icon: '👏',
        style: {
          minWidth: '250px',
        },
      });
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

      toast.success('Has cerrado sesión correctamente', {
        duration: 3500,
        icon: '👋 ',
        style: {
          minWidth: '250px',
        },
      });
    },
  });

  return mutation;
};
