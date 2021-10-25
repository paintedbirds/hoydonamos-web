import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { ReactComponent as Heart } from 'assets/heart.svg';
import Status from './Status';

import styles from './DonationCard.module.scss';

const DonationCard = ({
  title,
  description,
  image,
  id,
  status,
  showStatus,
  showHeart,
}) => {
  const history = useHistory();

  const goTo = () => history.push(`/donacion/${id}`);

  return (
    <div className={styles.container} role="button" onClick={goTo}>
      {showStatus && <Status status={status} />}
      <div className="w-full rounded-lg mb-4">
        <img alt="Donación" className={styles.image} src={image} load="lazy" />
      </div>
      <div className="flex justify-between justify-center">
        <h4 className={styles.title}>{title}</h4>
        {showHeart && <Heart className={styles.heart} onClick={goTo} />}
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

DonationCard.defaultProps = {
  showHeart: true,
  showStatus: false,
  status: '',
};

DonationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  showHeart: PropTypes.bool,
  showStatus: PropTypes.bool,
  status: PropTypes.string,
};

export default DonationCard;
