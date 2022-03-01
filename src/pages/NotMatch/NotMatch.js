import { ComeBackButton, NotFound } from 'features/common';

import styles from './NotMatch.module.scss';

const NotMatch = () => (
  <div className={styles.not__match}>
    <NotFound />
    <ComeBackButton />
  </div>
);

export default NotMatch;
