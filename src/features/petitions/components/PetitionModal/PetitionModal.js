import PropTypes from 'prop-types';

import { Modal } from 'features/common';
import { usePetition } from 'features/petitions/hooks';

const PetitionModal = ({ petitionId, onClose }) => {
  const { data, status } = usePetition({ id: petitionId });

  console.log({ data, status });

  return <Modal>Petition Id: {petitionId}</Modal>;
};

PetitionModal.propTypes = {
  petitionId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export { PetitionModal };
