import DonationCard from 'components/DonationCard';
import UnderlinedTitle from 'components/UnderlinedTitle';
import Search from './Search';

const Donations = () => (
  <section>
    <Search />
    <div className="px-6">
      <div className="mt-11 text-4xl">
        <UnderlinedTitle>
          <h3>Donaciones</h3>
        </UnderlinedTitle>
      </div>
      <section className="my-11 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <DonationCard />
        <DonationCard />
        <DonationCard />
        <DonationCard />
        <DonationCard />
      </section>
    </div>
  </section>
);

export default Donations;
