import PropTypes from 'prop-types';

import { ReactComponent as Close } from 'assets/close.svg';
import { Form, Modal } from 'features/common';

import styles from './ConfirmationModal.module.scss';

const ConfirmationModal = ({
  title,
  content,
  onCancel,
  onConfirm,
  confirmContent,
}) => (
  <Modal>
    <div className={styles.container}>
      <div className={styles.close}>
        <Close onClick={onCancel} />
      </div>
      <span className={styles.title}>{title}</span>
      <p className={styles.content}>{content}</p>
      <div className={styles['buttons-container']}>
        <button className={styles.cancel} type="button" onClick={onCancel}>
          Cancelar
        </button>
        <div className={styles['confirm-button-container']}>
          <Form.Button onClick={onConfirm}>{confirmContent}</Form.Button>
        </div>
      </div>
    </div>
  </Modal>
);

ConfirmationModal.defaultProps = {
  confirmContent: 'Confirmar',
};

ConfirmationModal.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  confirmContent: PropTypes.string,
};

export { ConfirmationModal };
