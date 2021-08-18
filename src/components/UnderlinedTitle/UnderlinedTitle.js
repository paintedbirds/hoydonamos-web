import PropTypes from 'prop-types';

import { ReactComponent as Line } from 'assets/title-line.svg';

const UnderlinedTitle = ({ children }) => (
  <>
    {children}
    <Line />
  </>
);

UnderlinedTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UnderlinedTitle;
