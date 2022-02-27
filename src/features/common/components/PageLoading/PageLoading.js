import { Loading } from 'features/common';

import styles from './PageLoading.module.scss';

const PageLoading = () => (
  <div className={styles.container}>
    <Loading />
  </div>
);

export { PageLoading };
