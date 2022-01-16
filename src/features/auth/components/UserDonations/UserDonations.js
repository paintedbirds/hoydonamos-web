import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as EmptyStateDonation } from 'assets/empty-state-donation.svg';
import { EmptyState } from 'features/common';
import { DonationCard, useDeleteDonation } from 'features/donations';

import styles from '../AccountUserInfo/AccountUserInfo.module.scss';

const UserDonations = ({ donations }) => {
  const { mutate } = useDeleteDonation();

  const onDelete = useCallback(
    (id) => () => {
      mutate({ donationId: id });
    },
    [mutate]
  );

  return (
    <>
      <div className="mt-11 mb-8 text-2xl">
        <div className="my-11 text-2xl flex flex-col md:flex-row gap-4">
          <h4>Mis donaciones</h4>
          <Link className={styles.link} to="/crear-donacion">
            Crear donación
          </Link>
        </div>
      </div>
      {donations.length > 0 ? (
        <section className="my-11 grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center">
          {donations.map(({ name, description, image, id, state }) => (
            <DonationCard
              title={name}
              description={description}
              image={image}
              status={state}
              key={id}
              id={id}
              showOptions
              onDelete={onDelete(id)}
            />
          ))}
        </section>
      ) : (
        <div className="my-11 w-full flex justify-center items-center">
          <EmptyState
            icon={<EmptyStateDonation />}
            text="No se han encontrado donaciones para mostrar"
          />
        </div>
      )}
    </>
  );
};

UserDonations.propTypes = {
  donations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { UserDonations };
