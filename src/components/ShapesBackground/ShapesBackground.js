import { ReactComponent as Shape } from 'assets/background-shape.svg';

import styles from './ShapesBackground.module.scss';

const ShapesBackground = () => {
  return (
    <div className={styles.container}>
      <div className={styles.child}>
        <Shape />
      </div>
      <div className={styles.child}>
        <Shape />
      </div>
      <div className={styles.child}>
        <Shape />
      </div>
      <div className={styles.child}>
        <Shape />
      </div>
      <div className={styles.child}>
        <Shape />
      </div>
    </div>
  );
};

export default ShapesBackground;
