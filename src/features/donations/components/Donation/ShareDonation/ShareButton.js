import PropTypes from 'prop-types';

import styles from './ShareButton.module.scss';

const ShareButton = ({ children, className }) => {
  return (
    <div className={`${styles[className]} ${styles['share-button']}`}>
      {children}
    </div>
  );
};

ShareButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string.isRequired,
};

export default ShareButton;
