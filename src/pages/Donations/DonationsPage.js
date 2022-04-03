import { useState } from 'react';

import { Donations, useDonations, Search } from 'features/donations';
import { MainLayout, UnderlinedTitle, Subtitle } from 'features/common';

const DonationsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useDonations({
      query: searchQuery,
    });

  return (
    <MainLayout>
      <section>
        <div className="px-6">
          <div className="mt-11 text-4xl">
            <UnderlinedTitle>
              <h3>Donaciones</h3>
            </UnderlinedTitle>
          </div>
          <Subtitle>
            Puedes postularte a cualquiera de estas donaciones realizadas por la
            comunidad
          </Subtitle>

          <Search query={searchQuery} setQuery={setSearchQuery} />
          <Donations
            data={data}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            status={status}
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default DonationsPage;
