import RequestCard from 'components/RequestCard';

import defaultImage from 'assets/default-donation.svg';
import UnderlinedTitle from 'components/UnderlinedTitle';

const requests = [
  {
    description: 'Request description',
    id: 1,
    name: 'Request name',
    user: {
      email: 'user@expmple.com',
      image: defaultImage,
      name: 'John Doe',
      phone: '093418251',
    },
  },
  {
    description: 'Request description',
    id: 2,
    name: 'Request name',
    user: {
      email: 'user@expmple.com',
      image: defaultImage,
      name: 'John Doe',
      phone: '093418251',
    },
  },
];

const Requests = () => {
  return (
    <div className="px-6">
      <div className="mt-11 text-4xl">
        <UnderlinedTitle>
          <h3>Solicitudes</h3>
        </UnderlinedTitle>
      </div>
      <section className="my-20 mx-4 grid grid-cols-1 sm:grid-cols-2 gap-16 justify-center">
        {requests.map((request) => (
          <RequestCard key={request.id} request={request} />
        ))}
      </section>
    </div>
  );
};

export default Requests;
