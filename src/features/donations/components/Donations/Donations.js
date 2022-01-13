import { Fragment, useCallback, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as EmptyStateDonation } from 'assets/empty-state-donation.svg';
import { EmptyState, Loading, UnderlinedTitle } from 'features/common';
import { DonationCard } from 'features/donations';
import { generateDonationPath } from 'utils/constants';
import { useIntersectionObserver } from 'hooks/intersectionObserver';
import { useDonations } from 'hooks/queries/donation';
import Search from './Search';

import styles from './Donations.module.scss';

const Donations = () => {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');

  const loadMoreRef = useRef();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useDonations({
      query: searchQuery,
    });

  const handleLoadMore = () => fetchNextPage();

  const onDonationClick = useCallback(
    (id) => history.push(generateDonationPath(id)),
    [history]
  );

  useIntersectionObserver({
    elementRef: loadMoreRef,
    enabled: hasNextPage,
    onIntersect: fetchNextPage,
  });

  return (
    <section>
      <Search query={searchQuery} setQuery={setSearchQuery} />
      <div className="px-6">
        <div className="mt-11 text-4xl">
          <UnderlinedTitle>
            <h3>Donaciones</h3>
          </UnderlinedTitle>
        </div>

        {status === 'success' && (
          <>
            <section className="my-11 grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center">
              {data.pages.map((page) => (
                <Fragment key={page.currentPage}>
                  {page.data.map(({ id, name, description, image }) => (
                    <DonationCard
                      key={id}
                      title={name}
                      description={description}
                      image={image}
                      onClick={onDonationClick}
                      id={id}
                    />
                  ))}
                </Fragment>
              ))}
            </section>

            {hasNextPage && !isFetchingNextPage && (
              <div className="my-6 w-full flex justify-center items-center">
                <button
                  type="button"
                  className={styles['load-more-button']}
                  ref={loadMoreRef}
                  onClick={handleLoadMore}
                >
                  Cargar mas
                </button>
              </div>
            )}
          </>
        )}

        {(status === 'loading' || isFetchingNextPage) && (
          <div className="my-11 w-full flex justify-center items-center">
            <Loading />
          </div>
        )}

        {status === 'error' && (
          <p className="my-11 w-full flex justify-center items-center">
            Ha ocurrido un error al cargar las donaciones
          </p>
        )}

        {status === 'success' && !(data.pages[0].data.length > 0) && (
          <EmptyState
            icon={<EmptyStateDonation />}
            text="No se han encontrado donaciones para mostrar"
          />
        )}
      </div>
    </section>
  );
};

export { Donations };
