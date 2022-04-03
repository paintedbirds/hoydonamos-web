import PropTypes from 'prop-types';

import styles from './Subtitle.module.scss';

const Subtitle = ({ children }) => (
  <p className={styles.subtitle}>{children}</p>
);

Subtitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { Subtitle };
