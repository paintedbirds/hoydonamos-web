import { forwardRef, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styles from './Modal.module.scss';

const Modal = forwardRef(({ children }, ref) => {
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    const target = document.body;

    target.appendChild(element);

    return () => {
      target.removeChild(element);
    };
  }, [element]);

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} />
      <div className={styles.container} role="dialog" aria-modal="true">
        <div className={styles.content} ref={ref}>
          {children}
        </div>
      </div>
    </>,
    element
  );
});

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { Modal };
