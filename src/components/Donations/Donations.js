import DonationCard from 'components/DonationCard';
import Loading from 'components/Loading';
import UnderlinedTitle from 'components/UnderlinedTitle';
import { useDonations } from 'hooks/queries/donation';
import Search from './Search';

const Donations = () => {
  const { data, status } = useDonations();

  return (
    <section>
      <Search />
      <div className="px-6">
        <div className="mt-11 text-4xl">
          <UnderlinedTitle>
            <h3>Donaciones</h3>
          </UnderlinedTitle>
        </div>
        {status === 'loading' && (
          <div className="my-11 w-full flex justify-center items-center">
            <Loading />
          </div>
        )}

        {status === 'success' && (
          <section className="my-11 grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center">
            {data.map(({ id, name, description }) => (
              <DonationCard key={id} title={name} description={description} />
            ))}
          </section>
        )}

        {status === 'error' && (
          <p className="my-11 w-full flex justify-center items-center">
            Ha ocurrido un error al cargar las donaciones
          </p>
        )}
      </div>
    </section>
  );
};

export default Donations;
