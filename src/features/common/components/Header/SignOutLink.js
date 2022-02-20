import PropTypes from 'prop-types';

import { useSignOut } from 'features/auth';
import { ReactComponent as SignOut } from 'assets/sign_out.svg';

import styles from './Header.module.scss';

const SignOutLink = ({ type }) => {
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
      {type !== 'mobile' && <SignOut />}
    </button>
  );
};

SignOutLink.propTypes = {
  type: PropTypes.string,
};

SignOutLink.defaultProps = {
  type: 'desktop',
};

export { SignOutLink };
