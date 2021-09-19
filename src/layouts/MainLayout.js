import PropTypes from 'prop-types';

import Header from 'components/Header';

const MainLayout = ({ children }) => (
  <div className="w-full mx-auto min-h-screen min-w-full">
    <Header />
    <div className="mt-8 max-w-screen-lg mx-auto">{children}</div>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainLayout;
