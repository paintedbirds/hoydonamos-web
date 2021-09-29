import defaultImage from 'assets/default-donation.svg';
import edit from 'assets/edit.svg';

import styles from './UpdateUser.module.scss';

const ImageUpload = () => {
  return (
    <div className={styles['image-upload']}>
      <img className={styles.image} src={defaultImage} alt="Usuario" />
      <div className={styles['edit']}>
        <label className={styles['edit__label']}>
          <input type="file" className={styles['edit__input']} />
          <img className={styles['edit__icon']} src={edit} alt="Editar" />
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;
