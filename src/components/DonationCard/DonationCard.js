import { ReactComponent as Heart } from 'assets/heart.svg';
import image from 'assets/texture.svg';

import styles from './DonationCard.module.scss';

const DonationCard = () => (
  <div className={styles.container}>
    <div className="w-full rounded-lg mb-4">
      <img alt="Donation" className={styles.image} src={image} />
    </div>
    <div className="flex justify-between justify-center">
      <h4 className={styles.title}>Hello World</h4>
      <Heart />
    </div>
    <p className={styles.description}>
      orem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </p>
  </div>
);

export default DonationCard;
