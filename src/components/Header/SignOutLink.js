import { useSignOut } from 'features/auth';

import styles from './Header.module.scss';

const SignOutLink = () => {
  const { mutate } = useSignOut();

  const onClick = async () => {
    await mutate();
  };

  return (
    <button type="button" className={styles['nav-link']} onClick={onClick}>
      Cerrar sesión
    </button>
  );
};

export { SignOutLink };
