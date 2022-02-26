import PropTypes from 'prop-types';

import { Header, ShapesBackground } from 'features/common';
import Footer from 'features/common/components/Footer/Footer';

const MainLayout = ({ children }) => (
  <div className="w-full mx-auto min-h-screen min-w-full">
    <ShapesBackground />
    <Header />
    <div className="my-8 max-w-screen-lg mx-auto relative">{children}</div>
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainLayout;
