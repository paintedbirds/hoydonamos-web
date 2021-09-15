import donation from 'assets/texture.svg';
import Form from 'components/Form';
import UnderlinedTitle from 'components/UnderlinedTitle';

import styles from './Donation.module.scss';

const Donation = () => (
  <section>
    <div className="px-6">
      <div className="mt-11 text-4xl">
        <UnderlinedTitle>
          <h3>Detalle de donación</h3>
        </UnderlinedTitle>
      </div>
      <div className="flex flex-wrap sm:my-16 mt-8">
        <div className="md:w-1/2 w-full md:h-auto">
          <img alt="Donacion" src={donation} className={styles.image} />
        </div>
        <div className="md:w-1/2 w-full lg:pl-10 lg:mt-0 mt-8">
          <h1 className={styles.title}>Titulo de la donación</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer a galley of type and scrambled it
            to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. was p
          </p>
          <div className="flex">
            <Form.Button>¡Quiero ponerme en contacto!</Form.Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Donation;
