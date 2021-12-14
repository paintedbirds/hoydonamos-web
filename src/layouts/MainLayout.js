import PropTypes from 'prop-types';

import Header from 'components/Header';
import { ShapesBackground } from 'features/common';

const MainLayout = ({ children }) => (
  <div className="w-full mx-auto min-h-screen min-w-full">
    <ShapesBackground />
    <Header />
    <div className="my-8 max-w-screen-lg mx-auto relative">{children}</div>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainLayout;
