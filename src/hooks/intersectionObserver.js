import { useEffect } from 'react';

export const useIntersectionObserver = ({
  elementRef,
  enabled,
  onIntersect,
}) => {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const observer = new IntersectionObserver((entries) =>
      entries.forEach((entry) => entry.isIntersecting && onIntersect())
    );

    const element = elementRef && elementRef.current;

    if (!element) {
      return;
    }

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementRef, enabled, onIntersect]);
};
