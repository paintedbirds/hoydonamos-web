import UnderlinedTitle from 'components/UnderlinedTitle';
import Form from './CreatePetitionForm';

import styles from './CreatePetition.module.scss';

const CreatePetition = () => (
  <div className="px-6">
    <div className="mt-11 text-4xl">
      <UnderlinedTitle>
        <h3>Crear solicitud</h3>
      </UnderlinedTitle>
    </div>
    <div className={styles.container}>
      <Form />
    </div>
  </div>
);

export default CreatePetition;
