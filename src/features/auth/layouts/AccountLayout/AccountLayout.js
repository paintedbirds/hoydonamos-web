import PropTypes from 'prop-types';

const AccountLayout = ({ children }) => <div className="px-4">{children}</div>;

AccountLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { AccountLayout };
