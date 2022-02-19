import { useSignOut } from 'features/auth';
import { ReactComponent as SignOut } from 'assets/sign_out.svg';

import styles from './Header.module.scss';

const SignOutLink = () => {
  const { mutate } = useSignOut();

  const onClick = async () => {
    await mutate();
  };

  return (
    <button
      type="button"
      className={`${styles['nav-link']} ${styles['nav-link_sign-out']}`}
      onClick={onClick}
    >
      Cerrar sesión
      <SignOut />
    </button>
  );
};

export { SignOutLink };
