import { useSignOut } from 'hooks/mutations/auth';

import styles from './Header.module.scss';

const SignOutLink = () => {
  const { mutate } = useSignOut();

  const onClick = async () => await mutate();

  return (
    <span className={`${styles['nav-link']} cursor-pointer`} onClick={onClick}>
      Cerrar sesión
    </span>
  );
};

export { SignOutLink };
