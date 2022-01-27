import PropTypes from 'prop-types';

import { Form, UnderlinedTitle } from 'features/common';
import ShareDonationLinks from '../ShareDonationLinks';

import styles from './Donation.module.scss';

const Donation = ({ data, onOpenModal }) => (
  <div className="px-6">
    <div className="mt-11 text-4xl">
      <UnderlinedTitle>
        <h3>Detalle de donación</h3>
      </UnderlinedTitle>
    </div>
    <div className="flex flex-wrap sm:my-16 mt-8">
      <div className="md:w-1/2 w-full md:h-auto">
        <img alt="Donación" src={data.image} className={styles.image} />
        <ShareDonationLinks />
      </div>
      <div className="md:w-1/2 w-full lg:pl-10 lg:mt-0 mt-8">
        <h1 className={styles.title}>{data.name}</h1>
        <p>{data.description}</p>
        <div className="flex">
          <Form.Button onClick={onOpenModal}>
            ¡Quiero ponerme en contacto!
          </Form.Button>
        </div>
      </div>
    </div>
  </div>
);

Donation.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export { Donation };
