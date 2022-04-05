import { Fragment, useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ReactComponent as EmptyStateDonation } from 'assets/empty-state-donation.svg';
import { EmptyState, Loading, useIntersectionObserver } from 'features/common';
import { DonationCard } from 'features/donations';
import { generateDonationPath } from 'utils/constants';

import styles from './Donations.module.scss';

const Donations = ({
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  status,
}) => {
  const history = useHistory();

  const loadMoreRef = useRef();

  const onLoadMore = () => fetchNextPage();

  const onDonationClick = useCallback(
    (id) => () => history.push(generateDonationPath(id)),
    [history]
  );

  useIntersectionObserver({
    elementRef: loadMoreRef,
    enabled: hasNextPage,
    onIntersect: fetchNextPage,
  });

  return (
    <>
      {status === 'success' && (
        <>
          <section className="my-11 grid grid-cols-1 sm:grid-cols-3 gap-5 justify-center">
            {data?.pages.map((page) => (
              <Fragment key={page.currentPage}>
                {page.data.map(({ id, name, description, image }) => (
                  <DonationCard
                    key={id}
                    donationId={id}
                    title={name}
                    description={description}
                    image={image}
                    onClick={onDonationClick(id)}
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
                onClick={onLoadMore}
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
    </>
  );
};

Donations.defaultProps = {
  data: null,
  hasNextPage: false,
};

Donations.propTypes = {
  data: PropTypes.shape({
    pages: PropTypes.arrayOf(
      PropTypes.shape({
        currentPage: PropTypes.number.isRequired,
        data: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
          })
        ).isRequired,
      })
    ).isRequired,
  }),
  fetchNextPage: PropTypes.func.isRequired,
  hasNextPage: PropTypes.bool,
  isFetchingNextPage: PropTypes.bool.isRequired,
  status: PropTypes.oneOf(['loading', 'success', 'error']).isRequired,
};

export { Donations };
