import { useState, useEffect } from 'react';

const getSizes = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getSizes());

  const onResize = () => {
    setWindowSize(getSizes());
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return windowSize;
};
