import PropTypes from 'prop-types';

import { Footer, Header, ShapesBackground } from 'features/common';

const MainLayout = ({ children }) => (
  <>
    <ShapesBackground />
    <Header />
    <main className="my-8 max-w-screen-lg mx-auto w-full relative">
      {children}
    </main>
    <Footer />
  </>
);

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { MainLayout };
