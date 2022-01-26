import PropTypes from 'prop-types';

import { ReactComponent as EmptyStatePetition } from 'assets/empty-state-petition.svg';
import { EmptyState, Loading, UnderlinedTitle } from 'features/common';
import { PetitionCard } from 'features/petitions';
import SeeMoreLink from './SeeMoreLink';

const Petitions = ({ data, status }) => (
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
      <section className="my-20 mx-4 grid grid-cols-1 sm:grid-cols-2 gap-16 justify-center">
        {data?.map((petition) => (
          <PetitionCard key={petition.id} petition={petition} />
        ))}
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

Petitions.propTypes = {
  data: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
};

export default Petitions;
