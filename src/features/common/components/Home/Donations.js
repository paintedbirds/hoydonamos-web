import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ReactComponent as EmptyStateDonation } from 'assets/empty-state-donation.svg';
import { EmptyState, Loading, UnderlinedTitle } from 'features/common';
import { DonationCard } from 'features/donations';
import { generateDonationPath } from 'utils/constants';
import SeeMoreLink from './SeeMoreLink';

import styles from './Home.module.scss';

const Donations = ({ data, status }) => {
  const history = useHistory();

  const onDonationClick = useCallback(
    (id) => () => history.push(generateDonationPath(id)),
    [history]
  );

  return (
    <>
      <div className="mt-11 text-4xl flex gap-4 items-center">
        <UnderlinedTitle>
          <h3>Donaciones</h3>
        </UnderlinedTitle>
        <SeeMoreLink to="/donaciones">Ver mas</SeeMoreLink>
      </div>

      {status === 'loading' && (
        <div className="my-11 w-full flex justify-center items-center">
          <Loading />
        </div>
      )}
      {status === 'success' && data.length > 0 && (
        <section className={styles['scrollable-container']}>
          {data?.map(({ id, name, description, image }) => (
            <DonationCard
              key={id}
              title={name}
              description={description}
              image={image}
              onClick={onDonationClick(id)}
              id={id}
            />
          ))}
        </section>
      )}
      {status === 'error' && (
        <p className="my-11 w-full flex justify-center items-center">
          Ha ocurrido un error al cargar las donaciones
        </p>
      )}
      {status === 'success' && !data.length && (
        <EmptyState
          icon={<EmptyStateDonation />}
          text="No se han encontrado donaciones para mostrar"
        />
      )}
    </>
  );
};

Donations.propTypes = {
  data: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
};

export default Donations;
