import PropTypes from 'prop-types';

import { Footer, Header, SecondaryShapesBackground } from 'features/common';

import styles from '../Main/MainLayout.module.scss';

const LandingLayout = ({ children }) => (
  <>
    <SecondaryShapesBackground />
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </>
);

LandingLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { LandingLayout };
