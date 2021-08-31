import PropTypes from 'prop-types';

import { ReactComponent as Heart } from 'assets/heart.svg';
import image from 'assets/texture.svg';

import styles from './DonationCard.module.scss';

const DonationCard = ({ title, description }) => (
  <div className={styles.container}>
    <div className="w-full rounded-lg mb-4">
      <img alt="Donation" className={styles.image} src={image} />
    </div>
    <div className="flex justify-between justify-center">
      <h4 className={styles.title}>{title}</h4>
      <Heart />
    </div>
    <p className={styles.description}>{description}</p>
  </div>
);

DonationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DonationCard;
