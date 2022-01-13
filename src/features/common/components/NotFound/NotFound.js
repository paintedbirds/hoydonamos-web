import styles from './NotFound.module.scss';

const NotFound = () => (
  <div className={styles.container}>
    <span className={styles['not-found']}>404</span>
    <p className={styles.caption}>Página no encontrada</p>
  </div>
);

export { NotFound };
