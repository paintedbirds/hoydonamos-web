import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { CREATE_DONATION_PATH, CREATE_PETITION_PATH } from 'utils/constants';

import styles from './CallToActionButton.module.scss';

const CallToActionButton = ({ type }) => {
  const history = useHistory();

  const redirection = () =>
    type === 'donation'
      ? history.push(CREATE_DONATION_PATH)
      : history.push(CREATE_PETITION_PATH);

  return (
    <button
      className={`${styles[type]} ${styles.button}`}
      type="button"
      onClick={redirection}
    >
      <span>Crear {type === 'donation' ? 'donación' : 'solicitud'}</span> +
    </button>
  );
};

CallToActionButton.propTypes = {
  type: PropTypes.string.isRequired,
};

export { CallToActionButton };
