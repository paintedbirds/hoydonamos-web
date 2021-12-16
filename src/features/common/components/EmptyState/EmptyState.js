import styles from './EmptyState.module.scss';

const EmptyState = ({ icon, text }) => (
  <div className={styles['empty-state']}>
    {icon}
    <p>{text}</p>
  </div>
);

export { EmptyState };
