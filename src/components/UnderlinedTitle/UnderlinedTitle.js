import PropTypes from 'prop-types';

import { ReactComponent as Line } from 'assets/title-line.svg';

const UnderlinedTitle = ({ children }) => (
  <div>
    {children}
    <Line />
  </div>
);

UnderlinedTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UnderlinedTitle;
