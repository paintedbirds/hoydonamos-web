import { useState } from 'react';
import PropTypes from 'prop-types';

import { ConfirmationModal, DeleteIcon } from 'features/common';
import { generateDonationPath } from 'utils/constants';
import SeeMoreButton from './SeeMoreButton';
import Status from './Status';

import styles from './DonationCard.module.scss';

const DonationCard = ({
  donationId,
  title,
  description,
  image,
  status,
  showOptions,
  onDelete,
  onClick,
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const onDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const onDeleteConfirm = () => {
    onDelete();
    setShowDeleteModal(false);
  };

  const onDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      {showDeleteModal && (
        <ConfirmationModal
          title="Eliminar Donación"
          content="¿Estás seguro que quieres eliminar esta donación? Una vez eliminada no podrás recuperar esta donación."
          confirmContent="Eliminar"
          onCancel={onDeleteCancel}
          onConfirm={onDeleteConfirm}
        />
      )}
      <div
        className={styles.container}
        onClick={onClick}
        aria-hidden="true"
        role="button"
      >
        {showOptions && (
          <div className={styles.options}>
            {<Status status={status} />}
            {<DeleteIcon onClick={onDeleteClick} />}
          </div>
        )}
        <div className="w-full rounded-lg mb-4">
          <img
            alt="Donación"
            className={styles.image}
            src={image}
            load="lazy"
          />
        </div>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
        {!showOptions && (
          <SeeMoreButton to={generateDonationPath(donationId)} />
        )}
      </div>
    </>
  );
};

DonationCard.defaultProps = {
  onClick: () => {},
  onDelete: () => {},
  showOptions: false,
  status: '',
};

DonationCard.propTypes = {
  donationId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  showOptions: PropTypes.bool,
  status: PropTypes.string,
};

export { DonationCard };
