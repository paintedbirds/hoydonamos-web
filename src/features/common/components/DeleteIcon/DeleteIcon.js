import PropTypes from 'prop-types';

import { ReactComponent as Delete } from 'assets/delete.svg';

import styles from './DeleteIcon.module.scss';

const DeleteIcon = ({ onClick }) => (
  <div className={styles.container} onClick={onClick}>
    <Delete />
  </div>
);

DeleteIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { DeleteIcon };
