import styles from './PetitionCard.module.scss';

const Status = ({ status }) => (
  <span className={styles[status.toLowerCase()]}>{status}</span>
);

export default Status;
