import { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Heart } from 'assets/heart.svg';
import { ConfirmationModal, DeleteIcon } from 'features/common';
import Status from './Status';

import styles from './DonationCard.module.scss';

const DonationCard = ({
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
        <div className="flex justify-between justify-center">
          <h4 className={styles.title}>{title}</h4>
          {!showOptions && <Heart className={styles.heart} onClick={onClick} />}
        </div>
        <p className={styles.description}>{description}</p>
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  showOptions: PropTypes.bool,
  status: PropTypes.string,
};

export { DonationCard };
