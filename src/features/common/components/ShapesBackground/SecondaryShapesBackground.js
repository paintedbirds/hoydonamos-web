import { ReactComponent as Shape } from 'assets/background-shape.svg';
import { ReactComponent as SecondaryShape } from 'assets/secondary-background-shape.svg';

import styles from './ShapesBackground.module.scss';

const SecondaryShapesBackground = () => (
  <div className={styles.container}>
    <div className={styles.child}>
      <SecondaryShape />
    </div>
    <div className={styles.child}>
      <Shape />
    </div>
    <div className={styles.child}>
      <SecondaryShape />
    </div>
    <div className={styles.child}>
      <Shape />
    </div>
    <div className={styles.child}>
      <SecondaryShape />
    </div>
  </div>
);

export { SecondaryShapesBackground };
