import { Link } from 'react-router-dom';

import { useAuth } from 'features/auth';

import styles from './Home.module.scss';

const UserInfo = () => {
  const { user } = useAuth();

  return (
    <div className={styles['user-info']}>
      <div className={styles.avatar}>
        <img src={user.image} alt={user.name} />
      </div>
      <div className={styles.wrapper}>
        <p className={styles.greeting}>¡Bienvenido {user.name}!</p>
        <p className={styles['edit-profile']}>
          Configura tu perfil para que nuestro equipo conozca mas sobre ti
          <Link to="/editar-cuenta" className={styles.link}>
            Editar mi perfil
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
