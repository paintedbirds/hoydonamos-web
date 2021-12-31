import PropTypes from 'prop-types';

import styles from './EmptyState.module.scss';

const EmptyState = ({ icon, text }) => (
  <div className={styles['empty-state']}>
    {icon}
    <p>{text}</p>
  </div>
);

EmptyState.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export { EmptyState };
