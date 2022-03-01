import { MainLayout, UnderlinedTitle } from 'features/common';
import { Petitions, usePetitions } from 'features/petitions';

const PetitionsPage = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    usePetitions();

  return (
    <MainLayout>
      <div className="px-6">
        <div className="mt-11 text-4xl">
          <UnderlinedTitle>
            <h3>Solicitudes</h3>
          </UnderlinedTitle>
        </div>
        <Petitions
          data={data}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          status={status}
        />
      </div>
    </MainLayout>
  );
};

export default PetitionsPage;
