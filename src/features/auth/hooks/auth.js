import { useMutation } from 'react-query';
import { useHistory, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

import { useAuth, initialState } from 'features/auth';
import { clearSession, getSession, persistSession } from 'helpers/session';
import { AuthService } from 'networking/services';

export const useSignUp = () => {
  const history = useHistory();
  const location = useLocation();
  const { setState } = useAuth();

  const mutation = useMutation((user) => AuthService.signUp(user), {
    onSuccess: (response) => {
      setState((previousState) => ({
        ...previousState,
        ...response.data,
        isAuthenticated: true,
      }));

      persistSession(response.data);

      history.push('/', location.state?.from && { from: location.state.from });

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
  const location = useLocation();
  const { setState } = useAuth();

  const mutation = useMutation((user) => AuthService.signIn(user), {
    onSuccess: (response) => {
      setState((previousState) => ({
        ...previousState,
        ...response.data,
        isAuthenticated: true,
      }));

      persistSession(response.data);

      history.push('/', location.state?.from && { from: location.state.from });

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

  const storedSession = getSession();

  const mutation = useMutation(() => AuthService.signOut(storedSession), {
    onSuccess: (response) => {
      setState(initialState);
      clearSession();

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

export const useUserUpdate = () => {
  const history = useHistory();
  const { setState, user } = useAuth();

  const mutation = useMutation(
    (updatedUser) => AuthService.update({ user: updatedUser, userId: user.id }),
    {
      onSuccess: (response) => {
        setState((previousState) => {
          const stateToSave = {
            ...previousState,
            user: {
              ...response.data,
            },
          };

          persistSession(stateToSave);

          return stateToSave;
        });

        history.push('/mi-cuenta');

        toast.success('Tu usuario ha sido actualizado correctamente', {
          duration: 3500,
          icon: '👏',
          style: {
            minWidth: '250px',
          },
        });
      },
    }
  );

  return mutation;
};
