import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { Modal, Loading, useClickAway } from 'features/common';
import { usePetition } from 'features/petitions/hooks';
import { ReactComponent as PhoneIcon } from 'assets/phone.svg';
import { ReactComponent as MailIcon } from 'assets/email.svg';

import styles from './PetitionModal.module.scss';

const PetitionModal = ({ petitionId, onClose }) => {
  const { data, status } = usePetition({ id: petitionId });
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useClickAway(modalRef, () => setIsOpen(false));

  return (
    <Modal>
      {status === 'loading' && (
        <div className={styles.loading}>
          <Loading />
        </div>
      )}
      {status === 'success' && isOpen && (
        <div className={styles.modal__content} ref={modalRef}>
          <div className={styles.user__info}>
            <img src={data.data.user.image} alt="user" />
            <p>{data.data.user.name}</p>
          </div>
          <div className={styles.petition__info}>
            <p className={styles.petition__subject}>{data.data.subject}</p>
            <div>
              <p className={styles.petition__description}>
                {data.data.description}
              </p>
            </div>
          </div>
          <div className={styles.user__contact__info}>
            {data.data.user.phone && (
              <p>
                <PhoneIcon /> {data.data.user.phone}
              </p>
            )}
            <p>
              <MailIcon style={{ marginLeft: '10px' }} /> {data.data.user.email}
            </p>
          </div>
          <button
            type="button"
            className={styles.close}
            onClick={() => {
              history.goBack();
              onClose();
            }}
          >
            Cerrar
          </button>
        </div>
      )}
    </Modal>
  );
};

PetitionModal.propTypes = {
  petitionId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export { PetitionModal };
