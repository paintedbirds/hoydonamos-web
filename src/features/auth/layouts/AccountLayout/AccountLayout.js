import PropTypes from 'prop-types';

const AccountLayout = ({ children }) => (
  <main className="px-4">{children}</main>
);

AccountLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { AccountLayout };
