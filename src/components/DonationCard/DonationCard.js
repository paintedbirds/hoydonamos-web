import PropTypes from 'prop-types';

import { ReactComponent as Heart } from 'assets/heart.svg';
import DeleteIcon from 'components/DeleteIcon';
import Status from './Status';

import styles from './DonationCard.module.scss';

const DonationCard = ({
  title,
  description,
  image,
  id,
  status,
  showOptions,
  onDelete,
  onClick,
}) => (
  <div className={styles.container} role="button" onClick={onClick}>
    {showOptions && (
      <div className={styles.options}>
        {<Status status={status} />}
        {<DeleteIcon onClick={onDelete} />}
      </div>
    )}
    <div className="w-full rounded-lg mb-4">
      <img alt="Donación" className={styles.image} src={image} load="lazy" />
    </div>
    <div className="flex justify-between justify-center">
      <h4 className={styles.title}>{title}</h4>
      {!showOptions && <Heart className={styles.heart} onClick={onClick} />}
    </div>
    <p className={styles.description}>{description}</p>
  </div>
);

DonationCard.defaultProps = {
  onClick: () => {},
  onDelete: () => {},
  showOptions: false,
  status: '',
};

DonationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  showOptions: PropTypes.bool,
  status: PropTypes.string,
};

export default DonationCard;
