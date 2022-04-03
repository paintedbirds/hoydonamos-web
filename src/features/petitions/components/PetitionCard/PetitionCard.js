import { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Phone } from 'assets/phone.svg';
import { ReactComponent as Email } from 'assets/email.svg';
import { ConfirmationModal, DeleteIcon } from 'features/common';
import Status from './Status';

import styles from './PetitionCard.module.scss';

const PetitionCard = ({ petition, showOptions, onDelete, onClickHandler }) => {
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
          title="Eliminar petición"
          content="¿Estás seguro que quieres eliminar esta petición? Una vez eliminada no podrás recuperar esta petición."
          confirmContent="Eliminar"
          onCancel={onDeleteCancel}
          onConfirm={onDeleteConfirm}
        />
      )}
      <div
        className={styles.container}
        onClick={onClickHandler}
        aria-hidden="true"
        role="button"
      >
        {showOptions && (
          <div className={styles.options}>
            {<Status status={petition.state} />}
            {<DeleteIcon onClick={onDeleteClick} />}
          </div>
        )}
        <img className={styles.image} alt="Usuario" src={petition.user.image} />
        <h4 className={styles.title}>
          {petition.user.name} - {petition.subject}
        </h4>
        <p className={styles.description}>{petition.description}</p>
        <div className={styles['contact-info']}>
          {petition.user?.phone && (
            <div className={styles['contact-item']}>
              <Phone />
              <span>{petition.user.phone}</span>
            </div>
          )}
          <div className={styles['contact-item']}>
            <Email />
            <span>{petition.user.email}</span>
          </div>
        </div>
      </div>
    </>
  );
};

PetitionCard.defaultProps = {
  onDelete: () => {},
  showOptions: false,
};

PetitionCard.propTypes = {
  petition: PropTypes.shape({
    description: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string,
    }),
    state: PropTypes.string.isRequired,
  }).isRequired,
  showOptions: PropTypes.bool,
  onDelete: PropTypes.func,
  onClickHandler: PropTypes.func.isRequired,
};

export { PetitionCard };
