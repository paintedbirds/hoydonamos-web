import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import DonationCard from 'components/DonationCard';

import styles from './Account.module.scss';

const Donations = ({ donations }) => (
  <>
    <div className="mt-11 mb-8 text-2xl">
      <div className="my-11 text-2xl flex gap-4">
        <h4>Mis donaciones</h4>
        <Link className={styles.link} to="/crear-donacion">
          Crear donación
        </Link>
      </div>
    </div>
    <section className="my-11 grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center">
      {donations.map(({ name, description, image, id, state }) => (
        <DonationCard
          title={name}
          description={description}
          image={image}
          status={state}
          key={id}
          showHeart={false}
          showStatus
        />
      ))}
    </section>
  </>
);

Donations.propTypes = {
  donations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Donations;
