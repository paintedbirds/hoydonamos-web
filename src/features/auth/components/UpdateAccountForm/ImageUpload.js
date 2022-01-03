import { useFormContext } from 'react-hook-form';

import { useAuth } from 'features/auth';
import edit from 'assets/edit.svg';

import styles from './UpdateAccountForm.module.scss';

const ImageUpload = () => {
  const {
    user: { image },
  } = useAuth();

  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const uploadedImage = watch('image');
  const error = errors.image;

  const hasUploadedImage = uploadedImage
    ? Object.entries(uploadedImage).length > 0
    : uploadedImage;

  return (
    <>
      <div className={styles['image-upload']}>
        <img
          className={styles.image}
          src={
            !hasUploadedImage ? image : URL.createObjectURL(uploadedImage[0])
          }
          alt="Usuario"
        />
        <div className={styles.edit}>
          <label className={styles.edit__label} htmlFor="image">
            <input
              name="image"
              id="image"
              type="file"
              accept="image/*"
              className={styles.edit__input}
              {...register('image')}
            />
            <img className={styles.edit__icon} src={edit} alt="Editar" />
          </label>
        </div>
      </div>
      {error && <p className={styles.error}>{error?.message}</p>}
    </>
  );
};

export default ImageUpload;
