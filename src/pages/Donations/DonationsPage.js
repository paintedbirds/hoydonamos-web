import { useState } from 'react';

import { Donations, useDonations, Search } from 'features/donations';
import { UnderlinedTitle } from 'features/common';
import MainLayout from 'layouts/MainLayout';

const DonationsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useDonations({
      query: searchQuery,
    });

  return (
    <MainLayout>
      <section>
        <Search query={searchQuery} setQuery={setSearchQuery} />
        <div className="px-6">
          <div className="mt-11 text-4xl">
            <UnderlinedTitle>
              <h3>Donaciones</h3>
            </UnderlinedTitle>
          </div>
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
