import { useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { ReactComponent as EmptyStatePetition } from 'assets/empty-state-petition.svg';
import { EmptyState, Loading, UnderlinedTitle } from 'features/common';
import { PetitionCard } from 'features/petitions';
import SeeMoreLink from './SeeMoreLink';

import styles from './Home.module.scss';

const Petitions = ({ data, status }) => {
  const history = useHistory();

  const onPetitionClick = useCallback(
    ({ id }) => {
      return () => {
        history.push(`/solicitudes?petition_id=${id}`);
      };
    },
    [history]
  );

  return (
    <>
      <div className="mt-11 text-4xl flex gap-4 items-center">
        <UnderlinedTitle>
          <h3>Solicitudes</h3>
        </UnderlinedTitle>
        <SeeMoreLink to="/solicitudes">Ver mas</SeeMoreLink>
      </div>

      {status === 'loading' && (
        <div className="my-11 w-full flex justify-center items-center">
          <Loading />
        </div>
      )}

      {status === 'success' && data.length > 0 && (
        <section className={styles['petitions-container']}>
          <Swiper
            className={styles.slider}
            spaceBetween={55}
            slidesPerView="auto"
          >
            {data?.map((petition) => (
              <SwiperSlide className={styles.slide} key={petition.id}>
                <PetitionCard
                  key={petition.id}
                  petition={petition}
                  onClickHandler={onPetitionClick(petition)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      {status === 'error' && (
        <p className="my-11 w-full flex justify-center items-center">
          Ha ocurrido un error al cargar las peticiones
        </p>
      )}

      {status === 'success' && !data.length && (
        <EmptyState
          icon={<EmptyStatePetition />}
          text="No se han encontrado solicitudes para mostrar"
        />
      )}
    </>
  );
};

Petitions.propTypes = {
  data: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
};

export default Petitions;
