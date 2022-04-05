import { useCallback, useRef } from 'react';
import { Navigation } from 'swiper';
import { Swiper as SwiperContainer } from 'swiper/react/swiper-react';
import PropTypes from 'prop-types';

import { ReactComponent as ArrowRight } from 'assets/arrow--right.svg';

import styles from './Swiper.module.scss';

export const Swiper = ({ children, ...leftOverProps }) => {
  const nextButtonRef = useRef(null);
  const previousButtonRef = useRef(null);

  const onBeforeInit = useCallback((swiper) => {
    if (typeof swiper.params.navigation !== 'boolean') {
      const { navigation } = swiper.params;

      navigation.prevEl = previousButtonRef.current;
      navigation.nextEl = nextButtonRef.current;
    }
  }, []);

  return (
    <SwiperContainer
      spaceBetween={20}
      slidesPerView="auto"
      navigation={{
        prevEl: previousButtonRef.current,
        nextEl: nextButtonRef.current,
      }}
      modules={[Navigation]}
      onBeforeInit={onBeforeInit}
      className={styles.swiper}
      {...leftOverProps}
    >
      {children}
      <button ref={nextButtonRef} className={styles.next} type="button">
        <ArrowRight />
      </button>
      <button ref={previousButtonRef} className={styles.previous} type="button">
        <ArrowRight />
      </button>
    </SwiperContainer>
  );
};

Swiper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
