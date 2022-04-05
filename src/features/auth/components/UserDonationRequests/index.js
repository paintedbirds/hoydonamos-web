import { useCallback } from 'react';
import PropTypes from 'prop-types';

import { EmptyState } from 'features/common';
import { DonationCard, useDeleteDonationRequest } from 'features/donations';

export const UserDonationRequests = ({ donationRequests }) => {
  const { mutate } = useDeleteDonationRequest();

  const onDelete = useCallback(
    (id) => () => {
      mutate({ donationRequestId: id });
    },
    [mutate]
  );

  return (
    <>
      <div className="mt-11 mb-8 text-2xl">
        <div className="my-11 text-2xl flex flex-col md:flex-row gap-4">
          <h4>Mis donaciones solicitadas</h4>
        </div>
      </div>
      {donationRequests.length > 0 ? (
        <section className="my-11 grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center">
          {donationRequests.map((request) => (
            <DonationCard
              donationId={request['donation_id']}
              description={request.reason}
              image={request['donation_image']}
              status={request.state}
              key={request.id}
              showOptions
              onDelete={onDelete(request.id)}
            />
          ))}
        </section>
      ) : (
        <div className="my-11 w-full flex justify-center items-center">
          <EmptyState text="No se han encontrado solicitudes de donación para mostrar" />
        </div>
      )}
    </>
  );
};

UserDonationRequests.propTypes = {
  donationRequests: PropTypes.arrayOf(PropTypes.object).isRequired,
};
