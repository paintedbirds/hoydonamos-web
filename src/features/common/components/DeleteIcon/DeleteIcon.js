import PropTypes from 'prop-types';

import { ReactComponent as Delete } from 'assets/delete.svg';

import styles from './DeleteIcon.module.scss';

const DeleteIcon = ({ onClick }) => (
  <button className={styles.container} onClick={onClick} type="button">
    <Delete />
  </button>
);

DeleteIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { DeleteIcon };
