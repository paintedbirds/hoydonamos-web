import PropTypes from 'prop-types';

import styles from './ShareButton.module.scss';

const ShareButton = ({ children, type }) => (
  <div
    className={`${styles[`share-button__${type}`]} ${styles['share-button']}`}
  >
    {children}
  </div>
);

ShareButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  type: PropTypes.string.isRequired,
};

export default ShareButton;
