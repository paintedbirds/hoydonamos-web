import { useCallback, useEffect, useState } from 'react';

import {
  MainLayout,
  UnderlinedTitle,
  useQueryParams,
  Subtitle,
} from 'features/common';
import { PetitionModal, Petitions, usePetitions } from 'features/petitions';

const PetitionsPage = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    usePetitions();
  const queryParams = useQueryParams();
  const petitionId = queryParams.get('petition_id');

  const [showPetitionModal, setShowPetitionModal] = useState(false);

  const onClosePetitionModal = useCallback(() => {
    setShowPetitionModal(false);
  }, []);

  useEffect(() => {
    if (petitionId) {
      setShowPetitionModal(true);
    }
  }, [petitionId]);

  return (
    <MainLayout>
      <div className="px-6">
        <div className="mt-11 text-4xl">
          <UnderlinedTitle>
            <h3>Solicitudes</h3>
          </UnderlinedTitle>
        </div>
        <Subtitle>
          En esta sección puedes encontrar las necesidades de los integrantes de
          la comunidad
        </Subtitle>
        <Petitions
          data={data}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          status={status}
        />
        {showPetitionModal && (
          <PetitionModal
            petitionId={petitionId}
            onClose={onClosePetitionModal}
          />
        )}
      </div>
    </MainLayout>
  );
};

export default PetitionsPage;
