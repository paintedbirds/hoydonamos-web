import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ReactComponent as EmptyStatePetition } from 'assets/empty-state-petition.svg';
import { EmptyState } from 'features/common';
import { PetitionCard, useDeletePetition } from 'features/petitions';

import styles from '../AccountUserInfo/AccountUserInfo.module.scss';

const UserPetitions = ({ petitions }) => {
  const { mutate } = useDeletePetition();

  const onDelete = useCallback(
    (id) => () => {
      mutate({ petitionId: id });
    },
    [mutate]
  );

  return (
    <>
      <div className="my-11 text-2xl flex flex-col md:flex-row gap-4">
        <h4>Mis solicitudes</h4>
        <Link className={styles.link} to="/crear-solicitud">
          Crear solicitud
        </Link>
      </div>
      {petitions.length ? (
        <section className="my-20 mx-4 grid grid-cols-1 sm:grid-cols-2 gap-16 justify-center px-6">
          {petitions.map((petition) => (
            <PetitionCard
              petition={petition}
              key={petition.id}
              showOptions
              onDelete={onDelete(petition.id)}
            />
          ))}
        </section>
      ) : (
        <div className="my-11 w-full flex justify-center items-center">
          <EmptyState
            icon={<EmptyStatePetition />}
            text="No se han encontrado solicitudes para mostrar"
          />
        </div>
      )}
    </>
  );
};

UserPetitions.propTypes = {
  petitions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export { UserPetitions };
