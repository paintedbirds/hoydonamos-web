import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Footer,
  Header,
  SecondaryShapesBackground,
  ShapesBackground,
  useWindowSize,
} from 'features/common';
import { BREAKPOINTS } from 'utils/constants';

import styles from '../Main/MainLayout.module.scss';

const LandingLayout = ({ children }) => {
  const [showPrimaryBackground, setShowPrimaryBackground] = useState(false);

  const windowSize = useWindowSize();

  useEffect(() => {
    const isMobile = windowSize.width <= BREAKPOINTS.mobile;
    const isTablet = windowSize.width <= BREAKPOINTS.tablet;

    if (isMobile || isTablet) {
      setShowPrimaryBackground(true);
    }
  }, [windowSize.width, setShowPrimaryBackground]);

  return (
    <>
      {showPrimaryBackground ? (
        <ShapesBackground />
      ) : (
        <SecondaryShapesBackground />
      )}
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

LandingLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { LandingLayout };
