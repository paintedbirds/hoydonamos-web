import { useFormContext } from 'react-hook-form';

import defaultImage from 'assets/default-donation.svg';

import styles from './CreateDonation.module.scss';

const ImageUpload = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  const error = errors.image;
  const image = watch('image');

  const hasImage = image ? Object.entries(image).length > 0 : image;

  return (
    <>
      <div
        className={`sm:w-1/2 w-full md:h-auto h-54 ${styles['image-upload']}`}
      >
        <img
          className={styles['image-upload__image']}
          src={!hasImage ? defaultImage : URL.createObjectURL(image[0])}
          alt="Donation"
        />
        {!hasImage && (
          <div className={styles['image-upload__container']}>
            <label htmlFor="image">
              <input
                name="image"
                id="image"
                type="file"
                accept="image/*"
                className={styles['image-upload__input']}
                {...register('image')}
              />
              <p className={styles['image-upload__button']}>Subir imagen</p>
            </label>
          </div>
        )}
      </div>
      {error && <p>{error.message}</p>}
    </>
  );
};

export default ImageUpload;
