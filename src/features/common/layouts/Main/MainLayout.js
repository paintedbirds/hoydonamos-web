import PropTypes from 'prop-types';

import { Footer, Header, ShapesBackground } from 'features/common';

import styles from './MainLayout.module.scss';

const MainLayout = ({ children }) => (
  <>
    <ShapesBackground />
    <Header />
    <main className={styles.main}>{children}</main>
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
