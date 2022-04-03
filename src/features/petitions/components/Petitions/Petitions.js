import { Fragment, useRef } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { ReactComponent as EmptyStatePetition } from 'assets/empty-state-petition.svg';
import { EmptyState, Loading, useIntersectionObserver } from 'features/common';
import { PetitionCard } from 'features/petitions';
import { generatePetitionPath } from 'utils/constants';

import styles from 'features/donations/components/Donations/Donations.module.scss';

const Petitions = ({
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  status,
}) => {
  const loadMoreRef = useRef();
  const history = useHistory();

  const handleLoadMore = () => fetchNextPage();

  const showPetition = ({ id }) => {
    history.push(generatePetitionPath(id));
  };

  useIntersectionObserver({
    elementRef: loadMoreRef,
    enabled: hasNextPage,
    onIntersect: fetchNextPage,
  });

  return (
    <>
      {status === 'success' && (
        <>
          <section className="my-20 mx-4 grid grid-cols-1 sm:grid-cols-2 gap-16 justify-center">
            {data.pages.map((page) => (
              <Fragment key={page.currentPage}>
                {page.data.map((petition) => (
                  <PetitionCard
                    key={petition.id}
                    petition={petition}
                    onClickHandler={() => showPetition(petition)}
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

      {status === 'success' && !(data.pages[0].data.length > 0) && (
        <EmptyState
          icon={<EmptyStatePetition />}
          text="No se han encontrado solicitudes para mostrar"
        />
      )}

      {status === 'error' && (
        <p className="my-11 w-full flex justify-center items-center">
          Ha ocurrido un error al cargar las solicitudes
        </p>
      )}
    </>
  );
};

Petitions.defaultProps = {
  data: null,
};

Petitions.propTypes = {
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
          }).isRequired
        ).isRequired,
      })
    ).isRequired,
  }),
  fetchNextPage: PropTypes.func.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  isFetchingNextPage: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
};

export { Petitions };
