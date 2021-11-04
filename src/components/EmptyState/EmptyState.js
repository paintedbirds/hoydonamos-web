import styles from './EmptyState.module.scss';

const EmptyState = ({icon, text}) => {
  return (
    <div className={styles.emptyState}>
        {icon}
        <p>{text}</p>
    </div>
  );
};

export default EmptyState;
