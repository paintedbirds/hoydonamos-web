import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { ReactComponent as Heart } from 'assets/heart.svg';

import styles from './DonationCard.module.scss';

const DonationCard = ({ title, description, image, id }) => {
  const history = useHistory();

  const goTo = () => history.push(`/donacion/${id}`);

  return (
    <div className={styles.container} role="button" onClick={goTo}>
      <div className="w-full rounded-lg mb-4">
        <img alt="Donation" className={styles.image} src={image} load="lazy" />
      </div>
      <div className="flex justify-between justify-center">
        <h4 className={styles.title}>{title}</h4>
        <Heart className={styles.heart} onClick={goTo} />
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

DonationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default DonationCard;
