import { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { Modal, Loading, useClickAway } from 'features/common';
import { usePetition } from 'features/petitions/hooks';
import { ReactComponent as PhoneIcon } from 'assets/phone.svg';
import { ReactComponent as MailIcon } from 'assets/email.svg';
import { PETITIONS_PATH } from 'utils/constants';

import styles from './PetitionModal.module.scss';

const PetitionModal = ({ petitionId, onClose }) => {
  const { data, status } = usePetition({ id: petitionId });
  const history = useHistory();
  const modalRef = useRef();

  const onCloseModal = useCallback(() => {
    onClose();
    history.push(PETITIONS_PATH);
  }, []);

  useClickAway(modalRef, onCloseModal);

  return (
    <Modal ref={modalRef}>
      {status === 'loading' && (
        <div className={styles.loading}>
          <Loading />
        </div>
      )}
      {status === 'success' && (
        <div className={styles.modal__content}>
          <div className={styles.user__info}>
            <img src={data.data.user.image} alt="user" />
            <span>{data.data.user.name}</span>
          </div>
          <div className={styles.petition__info}>
            <h3 className={styles.petition__subject}>{data.data.subject}</h3>
            <div>
              <p className={styles.petition__description}>
                {data.data.description}
              </p>
            </div>
          </div>
          <div className={styles.user__contact__info}>
            {data.data.user.phone && (
              <span>
                <PhoneIcon /> {data.data.user.phone}
              </span>
            )}
            <span>
              <MailIcon style={{ marginLeft: '10px' }} /> {data.data.user.email}
            </span>
          </div>
          <button type="button" className={styles.close} onClick={onCloseModal}>
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
