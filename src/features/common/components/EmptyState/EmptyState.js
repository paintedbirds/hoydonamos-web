import PropTypes from 'prop-types';

import styles from './EmptyState.module.scss';

const EmptyState = ({ icon, text }) => (
  <div className={styles['empty-state']}>
    {icon && icon}
    <p>{text}</p>
  </div>
);

EmptyState.defaultProps = {
  icon: null,
};

EmptyState.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string.isRequired,
};

export { EmptyState };
